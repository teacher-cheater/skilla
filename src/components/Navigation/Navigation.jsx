import React from "react";
import s from "./Navigation.module.css";
import logo from "../../icons/logo.svg";
import btnAdd from "../../icons/btn-add.svg";
import btnPay from "../../icons/btn-pay.svg";
import calls from "./iconsList/calls.svg";
import cases from "./iconsList/case.svg";
import documents from "./iconsList/documents.svg";
import library from "./iconsList/library.svg";
import mail from "./iconsList/mail.svg";
import orders from "./iconsList/orders.svg";
import people from "./iconsList/people.svg";
import person from "./iconsList/person.svg";
import settings from "./iconsList/settings.svg";
import timeline from "./iconsList/timeline.svg";

function Navigation() {
  return (
    <aside className={s.wrapper}>
      <img className={s.logo} src={logo} alt="logo" />
      <nav className={s.navigation}>
        <ul className={s.list}>
          <li>
            <div className={s.choiceBlock}>
              {" "}
              <img className={s.icon} src={timeline} alt="Итоги" /> Итоги
            </div>
          </li>
          <li>
            <div className={s.choiceBlock}>
              {" "}
              <img className={s.icon} src={orders} alt="Заказы" /> Заказы
            </div>
          </li>
          <li>
            <div className={s.choiceBlock}>
              {" "}
              <img className={s.icon} src={mail} alt="Сообщения" /> Сообщения
            </div>
          </li>
          <li className={s.choice}>
            <div className={s.choiceBlock}>
              <img className={s.icon} src={calls} alt="Звонки" /> Звонки
            </div>
          </li>
          <li>
            <div className={s.choiceBlock}>
              {" "}
              <img className={s.icon} src={people} alt="Контрагенты" />{" "}
              Контрагенты
            </div>
          </li>
          <li>
            <div className={s.choiceBlock}>
              {" "}
              <img className={s.icon} src={documents} alt="Документы" />{" "}
              Документы
            </div>
          </li>
          <li>
            <div className={s.choiceBlock}>
              {" "}
              <img className={s.icon} src={person} alt="Исполнители" />{" "}
              Исполнители
            </div>
          </li>
          <li>
            <div className={s.choiceBlock}>
              {" "}
              <img className={s.icon} src={cases} alt="Отчеты" /> Отчеты
            </div>
          </li>
          <li>
            <div className={s.choiceBlock}>
              <img className={s.icon} src={library} alt="База знаний" />
              База знаний{" "}
            </div>
          </li>
          <li>
            <div className={s.choiceBlock}>
              {" "}
              <img className={s.icon} src={settings} alt="Настройки" />{" "}
              Настройки
            </div>
          </li>
        </ul>
      </nav>
      <div className={s.content}>
        <button className={s.btn}>
          Добавить заказ <img className={s.btnIcon} src={btnAdd} alt="icons" />{" "}
        </button>
        <button className={s.btn}>
          Оплата
          <img className={s.btnIcon} src={btnPay} alt="icons" />{" "}
        </button>
      </div>
    </aside>
  );
}

export default Navigation;
