import React from "react";
import s from "./Wrapper.module.css";
import search from "../../icons/search.svg";
import avatar from "../../icons/avatar.jpg";
import arrow from "../../icons/keyboard_arrow_down.svg";

function Wrapper() {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <div className={s.container}>
          <div className={s.date}> Среда, 13 окт</div>
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
          <div className={s.items}>
            <div className={s.search}>
              <img src={search} alt="icon search" />
            </div>
            <div className={s.blockchoice}>
              <div className={s.dropdownitems}>
                <div className={s.dropdown}>
                  <button className={s.dropdownbtn}>
                    ИП Сидорова Александра Михайловна
                  </button>
                  {/*<ul class={s.list}>
                    <li class={s.item}>ИП Сидорова Александра Михайловна 1</li>
                    <li class={s.item}>ИП Сидорова Александра Михайловна 2</li>
                    <li class={s.item}>ИП Сидорова Александра Михайловна 3</li>
                    <li class={s.item}>ИП Сидорова Александра Михайловна 4</li>
                  </ul>*/}
                  <img src={arrow} alt="arrow" />
                </div>
              </div>
            </div>
            <div className={s.account}>
              <div className={s.avatar}>
                <img src={avatar} alt="ava" />
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
