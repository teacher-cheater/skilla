import React from "react";
import s from "./HeaderItems.module.css";

import search from "../../icons/search.svg";
import avatar from "../../icons/avatar.jpg";
import arrow from "../../icons/keyboard_arrow_down.svg";

function HeaderItems() {
  return (
    <div className={s.items}>
      <div className={s.search}>
        <img src={search} alt="icon search" />
      </div>
      <div className={s.blockchoice}>
        <div className={s.dropdownitems}>
          <div className={s.dropdown}>
            <button type="button" className={s.dropdownbtn}>
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
  );
}

export default HeaderItems;
