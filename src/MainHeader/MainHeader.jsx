import React from "react";
import s from "./MainHeader.module.css";
import topup from "../icons/btn-balance.svg";
import arrowLeft from "../icons/keyboard_arrow_left.svg";
import arrowRight from "../icons/keyboard_arrow_right.svg";
import arrowDown from "../icons/keyboard_arrow_down.svg";
import calendar from "../icons/icon-calendar.svg";
import search from "../icons/search.svg";

function MainHeader() {
  return (
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
      <div className={s.bottom}>
        <div className={s.search}>
          <img src={search} alt="icon search" />
          <input type="text" placeholder="Поиск по звонкам" />
        </div>
        <div className={s.selects}>
          <button className={s.dropdown}>
            Все типы
            <img src={arrowDown} alt="arrow bottom" />
          </button>
          <button className={s.dropdown}>
            Все сотрудники
            <img src={arrowDown} alt="arrow bottom" />
          </button>
          <button className={s.dropdown}>
            Все звонки
            <img src={arrowDown} alt="arrow bottom" />
          </button>
          <button className={s.dropdown}>
            Все источники
            <img src={arrowDown} alt="arrow bottom" />
          </button>
          <button className={s.dropdown}>
            Все оценки
            <img src={arrowDown} alt="arrow bottom" />
          </button>
          <button className={s.dropdown}>
            Все ошибки
            <img src={arrowDown} alt="arrow bottom" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
