import React from "react";
import s from "./MainContent.module.css";
import MainHeader from "../../MainHeader/MainHeader";
import Main from "../Main/Main";

function MainContent({ dataResults, setDataResults }) {
  return (
    <div className={s.main}>
      <div className={s.maincontainer}>
        <MainHeader />
        <Main dataResults={dataResults} setDataResults={setDataResults} />
      </div>
    </div>
  );
}

export default MainContent;
