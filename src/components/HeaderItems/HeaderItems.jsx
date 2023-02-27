import React from "react";
import s from "./HeaderItems.module.css";

import avatar from "../../icons/avatar.jpg";

function HeaderItems() {
  return (
    <div className={s.items}>
      <div className={s.search}>
        <svg
          className={s.searchIcon}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.4351 10.0629H10.7124L10.4563 9.81589C11.3528 8.77301 11.8925 7.4191 11.8925 5.94625C11.8925 2.66209 9.23042 0 5.94625 0C2.66209 0 0 2.66209 0 5.94625C0 9.23042 2.66209 11.8925 5.94625 11.8925C7.4191 11.8925 8.77301 11.3528 9.81589 10.4563L10.0629 10.7124V11.4351L14.6369 16L16 14.6369L11.4351 10.0629ZM5.94625 10.0629C3.66838 10.0629 1.82962 8.22413 1.82962 5.94625C1.82962 3.66838 3.66838 1.82962 5.94625 1.82962C8.22413 1.82962 10.0629 3.66838 10.0629 5.94625C10.0629 8.22413 8.22413 10.0629 5.94625 10.0629Z" />
        </svg>
      </div>
      <div className={s.blockchoice}>
        <div className={s.dropdownitems}>
          <div className={s.dropdown}>
            <button type="button" className={s.dropdownbtn}>
              ИП Сидорова Александра Михайловна
              <svg
                className={s.arrowDown}
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.8"
                  d="M1.41 0.590088L6 5.17009L10.59 0.590088L12 2.00009L6 8.00009L0 2.00009L1.41 0.590088Z"
                />
              </svg>
            </button>
            {/*<ul class={s.list}>
            <li class={s.item}>ИП Сидорова Александра Михайловна 1</li>
            <li class={s.item}>ИП Сидорова Александра Михайловна 2</li>
            <li class={s.item}>ИП Сидорова Александра Михайловна 3</li>
            <li class={s.item}>ИП Сидорова Александра Михайловна 4</li>
          </ul>*/}
          </div>
        </div>
      </div>
      <div className={s.account}>
        <div className={s.avatar}>
          <img src={avatar} alt="ava" />
          <svg
            className={s.arrowDown}
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.8"
              d="M1.41 0.590088L6 5.17009L10.59 0.590088L12 2.00009L6 8.00009L0 2.00009L1.41 0.590088Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default HeaderItems;
