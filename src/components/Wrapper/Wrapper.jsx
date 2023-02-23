import React from "react";
import HeaderInfo from "../HeaderInfo/HeaderInfo";
import HeaderItems from "../HeaderItems/HeaderItems";
import s from "./Wrapper.module.css";
import MainContent from "../MainContent/MainContent";

function Wrapper() {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <div className={s.container}>
          <div className={s.date}> Среда, 13 окт</div>
          <HeaderInfo />
          <HeaderItems />
        </div>
      </div>
      <MainContent />
    </div>
  );
}

export default Wrapper;
