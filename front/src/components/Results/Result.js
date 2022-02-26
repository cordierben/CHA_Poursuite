import React, { useState } from 'react';
import ResultViewModel from './ResultViewModel';
import "../../style/Result.css";
import PlayerResultItem from './PlayerResultItem';

function Result(props) {


    var map = {}
    var question = {}
    question["?"] = 1
    question["!"] = 1
    map["Player1"] = question
    map["Player2"] = question
    map["Player3"] = question
    map["Player4"] = question

    const winner = props.winner
    const results = new Map(Object.entries(map))
    let position = 0

    const vm = new ResultViewModel()
    vm.saveResult(results)
    vm.savePlayers(winner, results)

    return (
        <div id="mainResultDiv" >
            <div id="results" >
                <h2 id="resultsTitle"> Résultats </h2> {
                    Array.from(results.keys()).map(player => {
                        console.log(position)
                        position = position + 1
                        const playerQuestions = new Map(Object.entries(results.get(player)))
                        let correct = 0
                        let total = 0
                        Array.from(playerQuestions.keys()).map(question => {
                            if (playerQuestions.get(question) == 1) correct = correct + 1
                            total = total + 1
                        })
                        return (
                            <div id="playerItem" >
                                {position == 1 ? (<h2 id="playerPosition1" class="playerPosition"> 1st&nbsp;</h2>) : (null)}
                                {position == 2 ? (< h2 id="playerPosition2" class="playerPosition" > 2nd </h2>) : (null)}
                                {position == 3 ? (< h2 id="playerPosition3" class="playerPosition" > 3rd </h2>) : (null)}
                                {position == 4 ? (< h2 id="playerPosition4" class="playerPosition" > 4 th </h2>) : (null)}
                                <PlayerResultItem name={player} image={""} correct={correct} false={total - correct} />
                            </div>
                        )
                    })
                }
            </div>
            <div id="buttonNewGame">
                <h3> Nouvelle partie </h3>
            </div >
        </div>
    );
}

export default Result;