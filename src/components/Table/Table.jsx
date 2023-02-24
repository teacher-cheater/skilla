import React, { useEffect, useState } from "react";
import s from "./Table.module.css";
import incoming from "../../icons/incoming.svg";
import outgoing from "../../icons/outgoing.svg";

function Table() {
  const [dateStart, setDateStart] = useState("");
  const [time, setTime] = useState("");
  const [dateEnd, setDateEnd] = useState("2022-04-19");
  const [inOut, setInOut] = useState(0);
  const [phone, setPhone] = useState("");
  const [personAvatar, setPersonAvatar] = useState("");
  const [source, setSource] = useState("");
  const [answerErrors, setAnswerErrors] = useState("");
  const [duration, setDuration] = useState("");

  useEffect(() => {
    fetch(
      `https://api.skilla.ru/mango/getList`,
      //?date_start=${dateStart}`,
      //&date_end=${dateEnd}
      //&in_out=1`,
      {
        method: "POST",
        headers: {
          Authorization: "Bearer testtoken",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setDateStart(data.results[1].date.split(" ")[0]);
        setTime(data.results[1].date.split(" ")[1]);
        setPhone(data.results[0].partner_data.phone);
        setInOut(data.results[1].in_out);
        setPersonAvatar(data.results[1].person_avatar);
        setSource(data.results[1].source);
        setAnswerErrors(data.results[1].errors[0]);
        setDuration(data.results[1].time);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className={s.table}>
      <div className={s.container}>
        <div className={s.data}>
          <div className={s.type}>
            {inOut === 1 ? (
              <img src={incoming} alt="arrow" />
            ) : (
              <img src={outgoing} alt="arrow" />
            )}
          </div>
          <div className={s.type}>{time.substring(0, 5)}</div>
          <div className={s.type}>
            <img src={personAvatar} alt="avatar" />
          </div>
          <div className={s.type}>+{phone}</div>
        </div>
        <div className={s.info}>
          <div className={s.text}>{source}</div>
          <div className={s.text}>{answerErrors}</div>
        </div>
        <div className={s.times}>
          <div>
            {new Date(duration * 1000)
              .toUTCString()
              .split(/ /)[4]
              .substring(3, 8)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
