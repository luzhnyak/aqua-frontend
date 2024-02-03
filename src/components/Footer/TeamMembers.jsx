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
import user from "../../images/members/user.jpg";

const TeamMembers = () => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className={css["swiper-container"]}
      >
        <SwiperSlide className={css["swiper-slide"]}>
          <div className={css["swipper-container"]}>
            <img src={OlehLuzhniak} alt="Oleh Luzhniak" />
            <div className={css["swipper-info-container"]}>
              <div>
                <p className={css["swipper-info-name"]}>Oleh Luzhniak</p>
                <p className={css["swipper-info-role"]}>Team leader</p>
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
        <SwiperSlide className={css["swiper-slide"]}>
          <div className={css["swipper-container"]}>
            <img src={IrynaShevchenko} alt="Iryna Shevchenko" />
            <div className={css["swipper-info-container"]}>
              <div>
                <p className={css["swipper-info-name"]}>Iryna Shevchenko</p>
                <p className={css["swipper-info-role"]}>Scrum master</p>
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
        <SwiperSlide className={css["swiper-slide"]}>
          <div className={css["swipper-container"]}>
            <img src={user} alt="Anna Boichuk" />
            <div className={css["swipper-info-container"]}>
              <div>
                <p className={css["swipper-info-name"]}>Anna Boichuk</p>
                <p className={css["swipper-info-role"]}></p>
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
        <SwiperSlide className={css["swiper-slide"]}>
          <div className={css["swipper-container"]}>
            <img src={AnnaMatsarska} alt="Anna Matsarska" />
            <div className={css["swipper-info-container"]}>
              <div>
                <p className={css["swipper-info-name"]}>Anna Matsarska</p>
                <p className={css["swipper-info-role"]}></p>
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
        <SwiperSlide className={css["swiper-slide"]}>
          <div className={css["swipper-container"]}>
            <img src={user} alt="Ihor Khorenko" />
            <div className={css["swipper-info-container"]}>
              <div>
                <p className={css["swipper-info-name"]}>Ihor Khorenko</p>
                <p className={css["swipper-info-role"]}></p>
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
        <SwiperSlide className={css["swiper-slide"]}>
          <div className={css["swipper-container"]}>
            <img src={HalynaLastivka} alt="Halyna Lastivka" />
            <div className={css["swipper-info-container"]}>
              <div>
                <p className={css["swipper-info-name"]}>Halyna Lastivka</p>
                <p className={css["swipper-info-role"]}></p>
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
        <SwiperSlide className={css["swiper-slide"]}>
          <div className={css["swipper-container"]}>
            <img src={ViktoriaLytvyn} alt="Viktoriia Lytvyn" />
            <div className={css["swipper-info-container"]}>
              <div>
                <p className={css["swipper-info-name"]}>Viktoriia Lytvyn</p>
                <p className={css["swipper-info-role"]}></p>
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
        <SwiperSlide className={css["swiper-slide"]}>
          <div className={css["swipper-container"]}>
            <img src={user} alt="Daniil Chernov" />
            <div className={css["swipper-info-container"]}>
              <div>
                <p className={css["swipper-info-name"]}>Daniil Chernov</p>
                <p className={css["swipper-info-role"]}></p>
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
        <SwiperSlide className={css["swiper-slide"]}>
          <div className={css["swipper-container"]}>
            <img src={user} alt="Andrii Zaiats" />
            <div className={css["swipper-info-container"]}>
              <div>
                <p className={css["swipper-info-name"]}>Andrii Zaiats</p>
                <p className={css["swipper-info-role"]}></p>
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
        <SwiperSlide className={css["swiper-slide"]}>
          <div className={css["swipper-container"]}>
            <img src={KaterynaBachkalo} alt="Oleh Luzhniak" />
            <div className={css["swipper-info-container"]}>
              <div>
                <p className={css["swipper-info-name"]}>Kateryna Bachkalo</p>
                <p className={css["swipper-info-role"]}></p>
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
