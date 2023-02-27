import React from "react";
//import { useState, useEffect } from "react";
import s from "./Table.module.css";
import incoming from "../../icons/incoming.svg";
import outgoing from "../../icons/outgoing.svg";
import call from "../../icons/call.svg";

function Table({ dataResults, setDataResults }) {
  //const [voiceMessage, setVoiceMessage] = useState([]);

  //useEffect(() => {
  //  fetch(`https://api.skilla.ru/mango/getRecord`, {
  //    method: "POST",
  //    headers: {
  //      Authorization: "Bearer testtoken",
  //      "Content-Type": "application/json",
  //      "Content-type": "audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3",
  //      "Content-Transfer-Encoding": "binary",
  //      "Content-Disposition": "filename='record.mp3'",
  //    },
  //  })
  //    .then((response) => response.json())
  //    .then((data) => {
  //      setVoiceMessage(data.results);
  //    })
  //    .catch((error) => {
  //      console.error("Error:", error);
  //    });
  //}, []);

  console.log(dataResults);

  return (
    <>
      {dataResults.map((data) => (
        <div key={data.id} className={s.table}>
          <div className={s.container}>
            <div className={s.type}>
              {data.in_out === 1 ? (
                <img src={incoming} alt="arrow" />
              ) : data.in_out === 0 ? (
                <img src={outgoing} alt="arrow" />
              ) : (
                <img src={call} alt="arrow" />
              )}
            </div>
            <div className={s.type}>
              {data.date.split(" ")[1].substring(0, 5)}
            </div>
            <div className={s.type}>
              <img src={data.person_avatar} alt="avatar" />
            </div>
            <div className={s.type}>+{data.from_number}</div>
            <div className={s.text}>{data.source}</div>
            <div className={s.grade}>{data.errors[0]}</div>
            <div className={s.time}>
              {/*{voiceMessage}*/}
              {new Date(data.time * 1000)
                .toUTCString()
                .split(/ /)[4]
                .substring(3, 8)}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Table;
