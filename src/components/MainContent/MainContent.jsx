import React from "react";
import s from "./MainContent.module.css";
import MainHeader from "../../MainHeader/MainHeader";
import Main from "../Main/Main";

function MainContent() {
  return (
    <div className={s.main}>
      <div className={s.maincontainer}>
        <MainHeader />
        <Main />
      </div>
    </div>
  );
}

export default MainContent;
