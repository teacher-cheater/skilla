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
      <a href="#">
        <img className={s.logo} src={logo} alt="logo" />
      </a>
      <nav className={s.navigation}>
        <ul className={s.list}>
          <li>
            {" "}
            <img className={s.icon} src={timeline} alt="" /> Итоги
          </li>
          <li>
            {" "}
            <img className={s.icon} src={orders} alt="" /> Заказы
          </li>
          <li>
            {" "}
            <img className={s.icon} src={mail} alt="" /> Сообщения
          </li>
          <li>
            {" "}
            <img className={s.icon} src={calls} alt="" /> Звонки
          </li>
          <li>
            {" "}
            <img className={s.icon} src={people} alt="" /> Контрагенты
          </li>
          <li>
            {" "}
            <img className={s.icon} src={documents} alt="" /> Документы
          </li>
          <li>
            {" "}
            <img className={s.icon} src={person} alt="" /> Исполнители
          </li>
          <li>
            {" "}
            <img className={s.icon} src={cases} alt="" /> Отчеты
          </li>
          <li>
            {" "}
            <img className={s.icon} src={library} alt="" /> База знаний
          </li>
          <li>
            {" "}
            <img className={s.icon} src={settings} alt="" /> Настройки
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
