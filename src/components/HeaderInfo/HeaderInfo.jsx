import React from "react";
import s from "./HeaderInfo.module.css";

function HeaderInfo() {
  return (
    <div className={s.info}>
      <div className={s.content}>
        Новые звонки <span className={s.newcall}>20 из 30 шт</span>
        <div className={s.linecall} />
      </div>
      <div className={s.content}>
        Качество разговоров <span className={s.quality}>40%</span>
        <div className={s.linequality} />
      </div>
      <div className={s.content}>
        Конверсия в заказ <span className={s.total}>67%</span>
        <div className={s.linetotal} />
      </div>
    </div>
  );
}

export default HeaderInfo;
