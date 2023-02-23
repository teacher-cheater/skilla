import React from "react";
import s from "./MainContent.module.css";
import topup from "../../icons/btn-balance.svg";
import arrowLeft from "../../icons/keyboard_arrow_left.svg";
import arrowRight from "../../icons/keyboard_arrow_right.svg";
import calendar from "../../icons/icon-calendar.svg";

function MainContent() {
  return (
    <div className={s.main}>
      <div className={s.maincontainer}>
        <div className={s.mainheader}>
          <div className={s.top}>
            <button className={s.balance}>
              Баланс: <span>272 ₽</span>
              <img className={s.btnbalance} src={topup} alt="icon" />
            </button>
            <div className={s.calendar}>
              <button>
                <img src={arrowLeft} alt="arrow left" />
              </button>
              <div className={s.choicedate}>
                <img src={calendar} alt="calendar" />
                <span>3 дня</span>
              </div>
              <button>
                <img src={arrowRight} alt="arrow right" />
              </button>
            </div>
          </div>
          <div className={s.bottom}></div>
        </div>
        <div className={s.maincontent}></div>
      </div>
    </div>
  );
}

export default MainContent;
