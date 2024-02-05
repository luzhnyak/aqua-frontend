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

const TeamMembers = () => {
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
                <p className={css["swipper-info-name"]}>Oleh Luzhniak</p>
                <p className={css["swipper-info-role"]}>Team leader</p>
                <ul>
                  <li className={css["swiper-info-task"]}>Server deployment</li>
                  <li className={css["swiper-info-task"]}>Project structure</li>
                  <li className={css["swiper-info-task"]}>
                    Technical guidance
                  </li>
                  <li className={css["swiper-info-task"]}>Routing</li>
                  <li className={css["swiper-info-task"]}>
                    TypeScript implementation
                  </li>
                  <li className={css["swiper-info-task"]}>
                    Google authorisation
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
                <p className={css["swipper-info-name"]}>Iryna Shevchenko</p>
                <p className={css["swipper-info-role"]}>Scrum master</p>
                <ul>
                  <li className={css["swiper-info-task"]}>Water ratio panel</li>
                  <li className={css["swiper-info-task"]}>Today list modal</li>
                  <li className={css["swiper-info-task"]}>Add water modal</li>
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
                <p className={css["swipper-info-name"]}>Anna Boichuk</p>
                <p className={css["swipper-info-role"]}>Frontend developer</p>
                <ul>
                  <li className={css["swiper-info-task"]}>Today water list</li>
                  <li className={css["swiper-info-task"]}>Month stats table</li>
                  <li className={css["swiper-info-task"]}>
                    Days general stats
                  </li>
                  <li className={css["swiper-info-task"]}>Water month chart</li>
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
                <p className={css["swipper-info-name"]}>Anna Matsarska</p>
                <p className={css["swipper-info-role"]}>Frontend developer</p>
                <ul>
                  <li className={css["swiper-info-task"]}>Redux</li>
                  <li className={css["swiper-info-task"]}>Footer</li>
                  <li className={css["swiper-info-task"]}>
                    Team Members Modal
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
                <p className={css["swipper-info-name"]}>Ihor Khorenko</p>
                <p className={css["swipper-info-role"]}>Backend developer</p>
                <ul>
                  <li className={css["swiper-info-task"]}>Water controllers</li>
                  <li className={css["swiper-info-task"]}>Today controller</li>
                  <li className={css["swiper-info-task"]}>Month controller</li>
                  <li className={css["swiper-info-task"]}>
                    Water API Endpoints
                  </li>
                  <li className={css["swiper-info-task"]}>
                    Datebase structuring
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
                <p className={css["swipper-info-name"]}>Halyna Lastivka</p>
                <p className={css["swipper-info-role"]}>Frontend developer</p>
                <ul>
                  <li className={css["swiper-info-task"]}>Signin Page</li>
                  <li className={css["swiper-info-task"]}>SignUp Page</li>
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
                <p className={css["swipper-info-name"]}>Viktoriia Lytvyn</p>
                <p className={css["swipper-info-role"]}>Frontend developer</p>
                <ul>
                  <li className={css["swiper-info-task"]}>Daily norma</li>
                  <li className={css["swiper-info-task"]}>Daily norma modal</li>
                  <li className={css["swiper-info-task"]}>Welcome page</li>
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
                <p className={css["swipper-info-name"]}>Daniil Chernov</p>
                <p className={css["swipper-info-role"]}>Backend developer</p>
                <ul>
                  <li className={css["swiper-info-task"]}>Auth API</li>
                  <li className={css["swiper-info-task"]}>User API</li>
                  <li className={css["swiper-info-task"]}>WaterRate API</li>
                  <li className={css["swiper-info-task"]}>Refresh token</li>
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
                <p className={css["swipper-info-name"]}>Andrii Zaiats</p>
                <p className={css["swipper-info-role"]}>Fullstack developer</p>
                <ul>
                  <li className={css["swiper-info-task"]}>
                    Swagger documentation
                  </li>
                  <li className={css["swiper-info-task"]}>
                    Forgot password page
                  </li>
                  <li className={css["swiper-info-task"]}>
                    Update password page
                  </li>
                  <li className={css["swiper-info-task"]}>Routing</li>
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
                <p className={css["swipper-info-name"]}>Kateryna Bachkalo</p>
                <p className={css["swipper-info-role"]}>Frontend developer</p>
                <ul>
                  <li className={css["swiper-info-task"]}>Header</li>
                  <li className={css["swiper-info-task"]}>
                    User settings modal
                  </li>
                  <li className={css["swiper-info-task"]}>Bilingual support</li>
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
