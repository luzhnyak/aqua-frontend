import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import css from "./Footer.module.css";

import { ReactComponent as GithubIcon } from "../../images/icons/github.svg";
import { ReactComponent as LinkedInIcon } from "../../images/icons/linkedin.svg";
import OlehLuzhniak from "../../images/members/OlehLuzhniak.jpg";
import IrynaShevchenko from "../../images/members/IrynaShevchenko.jpg";
import KaterynaBachkalo from "../../images/members/KaterynaBachkalo.jpg";
import AnnaMatsarska from "../../images/members/AnnaMatsarska.jpg";
import HalynaLastivka from "../../images/members/HalynaLastivka.jpg";
import ViktoriaLytvyn from "../../images/members/ViktoriaLytvyn.jpg";
import AnnaBoichuk from "../../images/members/AnnaBoichuk.jpg";
import user from "../../images/members/user.jpg";
import { useTranslation } from "react-i18next";

const TeamMembers = () => {
  const { t } = useTranslation();

  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className={css["swipper-container"]}
      >
        <SwiperSlide>
          <div className={css["swiper-slide"]}>
            <img src={OlehLuzhniak} alt="Oleh Luzhniak" />
            <div className={css["swipper-info-container"]}>
              <div>
                <p className={css["swipper-info-name"]}>
                  {t("team.leaderName")}
                </p>
                <p className={css["swipper-info-role"]}>{t("team.leader")}</p>
                <ul>
                  <li className={css["swiper-info-task"]}>
                    {t("team.leaderTask1")}
                  </li>
                  <li className={css["swiper-info-task"]}>
                    {t("team.leaderTask2")}
                  </li>
                  <li className={css["swiper-info-task"]}>
                    {t("team.leaderTask3")}
                  </li>
                  <li className={css["swiper-info-task"]}>
                    {t("team.leaderTask4")}
                  </li>
                  <li className={css["swiper-info-task"]}>
                    {t("team.leaderTask5")}
                  </li>
                  <li className={css["swiper-info-task"]}>
                    {t("team.leaderTask6")}
                  </li>
                </ul>
              </div>
              <div className={css["swipper-icon-container"]}>
                <a
                  href="https://github.com/luzhnyak"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <GithubIcon width={24} height={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/luzhnyak/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <LinkedInIcon width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={css["swiper-slide"]}>
            <img src={IrynaShevchenko} alt="Iryna Shevchenko" />
            <div className={css["swipper-info-container"]}>
              <div>
                <p className={css["swipper-info-name"]}>
                  {t("team.scrumName")}
                </p>
                <p className={css["swipper-info-role"]}>{t("team.scrum")}</p>
                <ul>
                  <li className={css["swiper-info-task"]}>
                    {t("team.scrumTask1")}
                  </li>
                  <li className={css["swiper-info-task"]}>
                    {t("team.scrumTask2")}
                  </li>
                  <li className={css["swiper-info-task"]}>
                    {t("team.scrumTask3")}
                  </li>
                </ul>
              </div>
              <div className={css["swipper-icon-container"]}>
                <a
                  href="https://github.com/ByeByeSyrena"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <GithubIcon width={24} height={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/iryna-shevchenko-ua/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <LinkedInIcon width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={css["swiper-slide"]}>
            <img src={AnnaBoichuk} alt="Anna Boichuk" />
            <div className={css["swipper-info-container"]}>
              <div>
                <p className={css["swipper-info-name"]}>
                  {t("team.frontNameAnna")}
                </p>
                <p className={css["swipper-info-role"]}>{t("team.front")}</p>
                <ul>
                  <li className={css["swiper-info-task"]}>
                    {t("team.frontAnnaTask1")}
                  </li>
                  <li className={css["swiper-info-task"]}>
                    {t("team.frontAnnaTask2")}
                  </li>
                  <li className={css["swiper-info-task"]}>
                    {t("team.frontAnnaTask3")}
                  </li>
                  <li className={css["swiper-info-task"]}>
                    {t("team.frontAnnaTask4")}
                  </li>
                </ul>
              </div>
              <div className={css["swipper-icon-container"]}>
                <a
                  href="https://github.com/AnnaofAmber"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <GithubIcon width={24} height={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/anna-boichuk-a6a050238/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <LinkedInIcon width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={css["swiper-slide"]}>
            <img src={AnnaMatsarska} alt="Anna Matsarska" />
            <div className={css["swipper-info-container"]}>
              <div>
                <p className={css["swipper-info-name"]}>
                  {t("team.frontNameAnnaM")}
                </p>
                <p className={css["swipper-info-role"]}>{t("team.front")}</p>
                <ul>
                  <li className={css["swiper-info-task"]}>
                    {t("team.frontAnnaMTask1")}
                  </li>
                  <li className={css["swiper-info-task"]}>
                    {t("team.frontAnnaMTask2")}
                  </li>
                  <li className={css["swiper-info-task"]}>
                    {t("team.frontAnnaMTask3")}
                  </li>
                </ul>
              </div>
              <div className={css["swipper-icon-container"]}>
                <a
                  href="https://github.com/AnnMatsarska"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <GithubIcon width={24} height={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/anna-matsarska/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <LinkedInIcon width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={css["swiper-slide"]}>
            <img src={user} alt="Ihor Khorenko" />
            <div className={css["swipper-info-container"]}>
              <div>
                <p className={css["swipper-info-name"]}>
                  {t("team.backNameIhor")}
                </p>
                <p className={css["swipper-info-role"]}>{t("team.back")}</p>
                <ul>
                  <li className={css["swiper-info-task"]}>
                    {t("team.backIhorTask1")}
                  </li>
                  <li className={css["swiper-info-task"]}>
                    {t("team.backIhorTask2")}
                  </li>
                  <li className={css["swiper-info-task"]}>
                    {t("team.backIhorTask3")}
                  </li>
                  <li className={css["swiper-info-task"]}>
                    {t("team.backIhorTask4")}
                  </li>
                  <li className={css["swiper-info-task"]}>
                    {t("team.backIhorTask5")}
                  </li>
                </ul>
              </div>
              <div className={css["swipper-icon-container"]}>
                <a
                  href="https://github.com/Black-Chaos"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <GithubIcon width={24} height={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ihor-khorenko/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <LinkedInIcon width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={css["swiper-slide"]}>
            <img src={HalynaLastivka} alt="Halyna Lastivka" />
            <div className={css["swipper-info-container"]}>
              <div>
                <p className={css["swipper-info-name"]}>
                  {t("team.frontNameHalyna")}
                </p>
                <p className={css["swipper-info-role"]}>{t("team.front")}</p>
                <ul>
                  <li className={css["swiper-info-task"]}>
                    {t("team.frontHalynaTask1")}
                  </li>
                  <li className={css["swiper-info-task"]}>
                    {t("team.frontHalynaTask2")}
                  </li>
                </ul>
              </div>
              <div className={css["swipper-icon-container"]}>
                <a
                  href="https://github.com/HalynaLastivka"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <GithubIcon width={24} height={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/halyna-lastivka/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <LinkedInIcon width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={css["swiper-slide"]}>
            <img src={ViktoriaLytvyn} alt="Viktoriia Lytvyn" />
            <div className={css["swipper-info-container"]}>
              <div>
                <p className={css["swipper-info-name"]}>
                  {t("team.frontNameVik")}
                </p>
                <p className={css["swipper-info-role"]}>{t("team.front")}</p>
                <ul>
                  <li className={css["swiper-info-task"]}>
                    {t("team.frontVikTask1")}
                  </li>
                  <li className={css["swiper-info-task"]}>
                    {t("team.frontVikTask2")}
                  </li>
                  <li className={css["swiper-info-task"]}>
                    {t("team.frontVikTask3")}
                  </li>
                </ul>
              </div>
              <div className={css["swipper-icon-container"]}>
                <a
                  href="https://github.com/VictoriaHilko"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <GithubIcon width={24} height={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/viktoria-lytvyn-3839b4b7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <LinkedInIcon width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={css["swiper-slide"]}>
            <img src={user} alt="Daniil Chernov" />
            <div className={css["swipper-info-container"]}>
              <div>
                <p className={css["swipper-info-name"]}>
                  {t("team.backNameDan")}
                </p>
                <p className={css["swipper-info-role"]}>{t("team.back")}</p>
                <ul>
                  <li className={css["swiper-info-task"]}>
                    {t("team.backDanTask1")}
                  </li>
                  <li className={css["swiper-info-task"]}>
                    {t("team.backDanTask2")}
                  </li>
                  <li className={css["swiper-info-task"]}>
                    {t("team.backDanTask3")}
                  </li>
                  <li className={css["swiper-info-task"]}>
                    {t("team.backDanTask4")}
                  </li>
                </ul>
              </div>
              <div className={css["swipper-icon-container"]}>
                <a
                  href="https://github.com/ChernovDan42"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <GithubIcon width={24} height={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/daniil-chernov-5581ba210/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <LinkedInIcon width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={css["swiper-slide"]}>
            <img src={user} alt="Andrii Zaiats" />
            <div className={css["swipper-info-container"]}>
              <div>
                <p className={css["swipper-info-name"]}>{t("team.fullName")}</p>
                <p className={css["swipper-info-role"]}>
                  {t("team.fullstack")}
                </p>
                <ul>
                  <li className={css["swiper-info-task"]}>
                    {t("team.fullTask1")}
                  </li>
                  <li className={css["swiper-info-task"]}>
                    {t("team.fullTask2")}
                  </li>
                  <li className={css["swiper-info-task"]}>
                    {t("team.fullTask3")}
                  </li>
                  <li className={css["swiper-info-task"]}>
                    {t("team.fullTask4")}
                  </li>
                </ul>
              </div>
              <div className={css["swipper-icon-container"]}>
                <a
                  href="https://github.com/andrey291188"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <GithubIcon width={24} height={24} />
                </a>
                {/* <a
                  href="https://www.linkedin.com/in/luzhnyak/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <LinkedInIcon width={24} height={24} />
                </a> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={css["swiper-slide"]}>
            <img src={KaterynaBachkalo} alt="Kateryna Bachkalo" />
            <div className={css["swipper-info-container"]}>
              <div>
                <p className={css["swipper-info-name"]}>
                  {t("team.frontNameKate")}
                </p>
                <p className={css["swipper-info-role"]}>{t("team.front")}</p>
                <ul>
                  <li className={css["swiper-info-task"]}>
                    {t("team.frontKateTask1")}
                  </li>
                  <li className={css["swiper-info-task"]}>
                    {t("team.frontKateTask2")}
                  </li>
                  <li className={css["swiper-info-task"]}>
                    {t("team.frontKateTask3")}
                  </li>
                </ul>
              </div>
              <div className={css["swipper-icon-container"]}>
                <a
                  href="https://github.com/KaterynaBachkalo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <GithubIcon width={24} height={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/bachkalo-kateryna/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github icon"
                >
                  <LinkedInIcon width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TeamMembers;
