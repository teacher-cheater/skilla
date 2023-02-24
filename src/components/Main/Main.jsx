import React from "react";
import Table from "../Table/Table";
import s from "./Main.module.css";

function Main() {
  return (
    <div className={s.main}>
      <div className={s.container}>
        <div className={s.type}>Тип</div>
        <div className={s.type}>Время</div>
        <div className={s.type}>Сотрудник</div>
        <div className={s.type}>Звонок</div>
        <div className={s.text}>Источник</div>
        <div className={s.text}>Оценка</div>
        <div className={s.times}>Длительность</div>
      </div>
      <Table />
    </div>
  );
}

export default Main;
