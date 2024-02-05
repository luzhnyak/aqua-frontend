import { ChangeEvent, FC, useEffect, useState } from "react";
import css from "./DailyNormaModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateWaterNormaThunk } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { selectWaterRate } from "../../redux/auth/selectors";
import { AppDispatch } from "../../redux/store";
import { useTranslation } from "react-i18next";
import { getAllWaterForTodayThunk } from "../../redux/waterConsumption/operations";

interface IProps {
  setVisible: (value: boolean) => void;
  onWaterAmountSave: (value: number) => void;
}

const DailyNormaModal: FC<IProps> = ({ setVisible, onWaterAmountSave }) => {
  const { t } = useTranslation();
  const dispatch: AppDispatch = useDispatch();

  const waterRateMG = useSelector(selectWaterRate);
  let waterRate = (waterRateMG && waterRateMG / 1000) || 2.0;

  const [userData, setUserData] = useState({
    gender: "female",
    weight: "",
    activityTime: "",
    waterAmount: "",
  });

  const initialValues = {
    gender: "female",
    weight: "",
    activityTime: "",
    waterAmount: waterRate.toString(),
  };

  const validationSchema = Yup.object({
    weight: Yup.number().min(1, `${t("dailyNormaModal.errors.min1")}`),
    activityTime: Yup.number().min(0, `${t("dailyNormaModal.errors.min0")}`),
    waterAmount: Yup.number()
      .required(`${t("dailyNormaModal.errors.waterAmountReq")}`)
      .min(0.1, `${t("dailyNormaModal.errors.minWater0")}`)
      .max(15, `${t("dailyNormaModal.errors.maxWater")}`),
  });

  const [neededWaterAmount, setNeededWaterAmount] = useState(2.0);

  useEffect(() => {
    // Set the initial value for waterAmount when the component mounts
    setUserData((prevData) => ({
      ...prevData,
      waterAmount: waterRate.toString(),
    }));
  }, [waterRate]);

  // Recalculate neededWaterAmount when gender changes
  useEffect(() => {
    const calculatedWaterAmount = calculateWaterAmount(
      userData.gender,
      Number(userData.weight),
      Number(userData.activityTime)
    );
    setNeededWaterAmount(Number(calculatedWaterAmount));
  }, [userData.gender, userData.weight, userData.activityTime]);

  const calculateWaterAmount = (
    gender: string,
    weight: number,
    activityTime: number
  ): string => {
    if (gender === "female") {
      return (weight * 0.03 + activityTime * 0.4).toFixed(1);
    } else {
      return (weight * 0.03 + activityTime * 0.6).toFixed(1);
    }
  };

  const onSubmit = (values: any, { resetForm }: any) => {
    setUserData((prevData) => ({
      ...prevData,
      waterAmount: values.waterAmount,
    }));

    const waterAmount = values.waterAmount;

    const calculatedWaterAmount = calculateWaterAmount(
      values.gender,
      values.weight,
      values.activityTime
    );

    setNeededWaterAmount(Number(calculatedWaterAmount));

    onWaterAmountSave(parseFloat(waterAmount) * 1000);

    dispatch(updateWaterNormaThunk((waterAmount * 1000).toString()));
    dispatch(getAllWaterForTodayThunk());

    setVisible(false);
  };

  return (
    <div className={css.container}>
      <div className={css.formTitle}>
        <p className={css.forField}>
          {t("dailyNormaModal.forField1")}:{" "}
          <span className={css.formulaField}>V=(M*0,03) + (T*0,4)</span>
        </p>
        <p className={css.forField}>
          {t("dailyNormaModal.forField2")}:{" "}
          <span className={css.formulaField}>V=(M*0,04) + (T*0,6)</span>
        </p>
      </div>

      <div className={css.formulaDescContainer}>
        <p className={css.formulaDesc}>
          <span className={css.formulaDescSymbol}>*</span>
          {t("dailyNormaModal.formulaDescSymbol")}
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form>
            <h3 className={css.formName}>{t("dailyNormaModal.formName")}:</h3>
            <div className={css.chooseGender}>
              <label className={css.radioLabel}>
                <Field
                  className={css.formRadioInput}
                  type="radio"
                  name="gender"
                  value="female"
                  checked={values.gender === "female"}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    setFieldValue("gender", event.target.value);
                    const { name, value } = event.target;
                    setUserData((prevData) => ({
                      ...prevData,
                      [name]: value,
                    }));
                  }}
                />
                {t("dailyNormaModal.forField3")}
              </label>

              <label className={css.radioLabel}>
                <Field
                  className={css.formRadioInput}
                  type="radio"
                  name="gender"
                  value="male"
                  checked={values.gender === "male"}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    setFieldValue("gender", event.target.value);
                    const { name, value } = event.target;
                    setUserData((prevData) => ({
                      ...prevData,
                      [name]: value,
                    }));
                  }}
                />
                {t("dailyNormaModal.forField2")}
              </label>
            </div>

            <div className={css.questionContainer}>
              <label className={css.questionLabel}>
                <span className={css.questionText}>
                  {t("dailyNormaModal.questionText1")}:
                </span>
                <Field
                  className={`${css.questionInput}
                ${errors.weight && touched.weight ? css.errorBorder : ""} ${
                    errors.weight && touched.weight ? css.errorInput : ""
                  }
                `}
                  type="text"
                  name="weight"
                  value={values.weight}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    setFieldValue("weight", event.target.value);
                    const { name, value } = event.target;
                    setUserData((prevData) => ({
                      ...prevData,
                      [name]: value,
                    }));

                    if (name === "weight" || name === "activityTime") {
                      const calculatedWaterAmount = calculateWaterAmount(
                        userData.gender,
                        Number(name === "weight" ? value : userData.weight),
                        Number(
                          name === "activityTime"
                            ? value
                            : userData.activityTime
                        )
                      );
                      setNeededWaterAmount(Number(calculatedWaterAmount));
                    }
                  }}
                />

                <ErrorMessage
                  name="weight"
                  component="div"
                  className={css.errormessage}
                />
              </label>

              <label className={css.questionLabel}>
                <span className={css.questionText}>
                  {t("dailyNormaModal.questionText2")}:
                </span>
                <Field
                  className={`${css.questionInput}
                ${
                  errors.activityTime && touched.activityTime
                    ? css.errorBorder
                    : ""
                } ${
                    errors.activityTime && touched.activityTime
                      ? css.errorInput
                      : ""
                  }
                `}
                  type="text"
                  name="activityTime"
                  value={values.activityTime}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    setFieldValue("activityTime", event.target.value);
                    const { name, value } = event.target;
                    setUserData((prevData) => ({
                      ...prevData,
                      [name]: value,
                    }));

                    if (name === "weight" || name === "activityTime") {
                      const calculatedWaterAmount = calculateWaterAmount(
                        userData.gender,
                        Number(name === "weight" ? value : userData.weight),
                        Number(
                          name === "activityTime"
                            ? value
                            : userData.activityTime
                        )
                      );
                      setNeededWaterAmount(Number(calculatedWaterAmount));
                    }
                  }}
                />
                <ErrorMessage
                  name="activityTime"
                  component="div"
                  className={css.errormessage}
                />
              </label>
            </div>

            <div className={css.requiredAmountContainer}>
              <p className={css.requiredAmountText}>
                {t("dailyNormaModal.requiredAmountText")}:
              </p>
              <p
                id="neededWaterAmount"
                className={css.requiredAmountValue}
                onClick={() => {
                  const newWaterAmount = parseFloat(
                    neededWaterAmount.toString()
                  ).toFixed(1);

                  setFieldValue("waterAmount", newWaterAmount);

                  setUserData((prevData) => ({
                    ...prevData,
                    waterAmount: newWaterAmount,
                  }));
                }}
              >
                {neededWaterAmount} {t("dailyNorma.l")}
              </p>
            </div>

            <label className={css.questionLabel}>
              <span className={css.howMuchText}>
                {t("dailyNormaModal.howMuchText")}:
              </span>
              <Field
                className={`${css.questionInput}
                ${
                  errors.waterAmount && touched.waterAmount
                    ? css.errorBorder
                    : ""
                } ${
                  errors.waterAmount && touched.waterAmount
                    ? css.errorInput
                    : ""
                }
                `}
                type="text"
                name="waterAmount"
                value={values.waterAmount}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setFieldValue("waterAmount", event.target.value);
                }}
              />
              <ErrorMessage
                name="waterAmount"
                component="div"
                className={css.errormessage}
              />
            </label>

            <button type="submit" className={css.submitButton}>
              {t("dailyNormaModal.save")}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DailyNormaModal;
