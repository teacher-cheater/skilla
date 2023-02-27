import React, { useEffect, useState } from "react";
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Wrapper from './components/Wrapper/Wrapper';

function App() {
  const [dataResults, setDataResults] = useState([]);
  const [sortCall, setSortCall] = useState(0)
  //const [sortEmployees, setSortEmployees] = useState(0)

  useEffect(() => {
    fetch(
      `https://api.skilla.ru/mango/getList`,
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
        setDataResults(data.results);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Wrapper sort={sortCall} onClickCategory={(i) => setSortCall(i)} dataResults={dataResults} setDataResults={setDataResults}
      />

    </div>
  );
}

export default App;
