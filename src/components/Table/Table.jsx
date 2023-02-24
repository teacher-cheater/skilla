import React, { useEffect, useState } from "react";
import s from "./Table.module.css";
import avatar from "../../icons/avatar.jpg";

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

  console.log(dateStart);
  console.log(inOut);
  console.log(time.substring(0, 5));
  console.log(phone);

  useEffect(() => {
    //const str = "2022-10-26T15:44:01.000Z";

    //function convertDate(str) {
    //  const data = new Date(str);
    //  return `${data.getFullYear()}-${data.getMonth() + 1}-${data.getDate()}`;
    //}

    //console.log(convertDate(str));

    const data = { username: "John" };
    fetch(
      `https://api.skilla.ru/mango/getList`,
      //?date_start=${dateStart}`,
      //&date_end=${dateEnd}
      //&in_out=1`,
      {
        method: "POST", // or 'PUT'
        headers: {
          Authorization: "Bearer testtoken",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
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
          <div className={s.type}>/</div>
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
