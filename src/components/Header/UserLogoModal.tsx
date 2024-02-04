import { FC } from "react";
import { ReactComponent as IconSettings } from "../../images/icons/cog-6-tooth.svg";
import { ReactComponent as IconLogout } from "../../images/icons/arrow-right-on-rectangle.svg";

import css from "./Header.module.css";
import AnimatedComponent from "../../components/AnimatedComponent/AnimatedComponent";
import { useTranslation } from "react-i18next";

interface IProps {
  openUserInfoModal: () => void;
  openUserLogoutModal: () => void;
}

const UserLogoModal: FC<IProps> = ({
  openUserInfoModal,
  openUserLogoutModal,
}) => {
  const { t } = useTranslation();

  return (
    <AnimatedComponent css={css.dropDownMenuContent}>
      <button className={css.settingsBtn} onClick={openUserInfoModal}>
        <IconSettings className={css.iconSettings} />
        {t("userLogoModal.setting")}
      </button>
      <button className={css.logoutBtn} onClick={openUserLogoutModal}>
        <IconLogout className={css.iconLogout} />
        {t("userLogoModal.logout")}
      </button>
    </AnimatedComponent>
  );
};

export default UserLogoModal;
