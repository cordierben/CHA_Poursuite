import React, { Component, useState } from "react";
import Home from "./components/Home.js";
import Board from "./components/Board.js";
import Result from "./components/Results/Result.js"


function App() {

  //Index de la page courante
  const [index, setIndex] = useState("Home")

  //Liste contenant les noms de joueurs
  const [players, setPLayers] = useState([])

  //Map contenant les joueurs et leurs questions
  const [mapQuestion, setMapQuestion] = useState({})

  return (
    <div>
      {index == "Home" ? (
        <Home
          onPlayersChanged={(e) => setPLayers(e)}
          onIndexChanged={(e) => setIndex(e)}
        />) : (null)}
      {index == "Board" ? (
        <Board
          players={players}
          onMapQuestionChanged={(e) => setMapQuestion(e)}
          onIndexChanged={(e) => setIndex(e.target.value)}
        />) : (null)}
      {index == "Result" ? (
        <Result
          mapQuestion = {mapQuestion}
          onIndexChanged={(e) => setIndex(e.target.value)}
        />) : (null)}
    </div>
  );
}

export default App;