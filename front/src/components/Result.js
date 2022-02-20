import React,{useState} from 'react';
import axios from 'axios';

function Result(props) {

    var map = {}
    var question = {}
    question["?"] = 1
    question["!"] = 1
    map["Ben"] = question
    map["Al"] = question

    const winner = props.winner
    const results = new Map(Object.entries(map))

    function saveResult(){
        for (const [player, value] of results.entries()) {
            let questions = new Map(Object.entries(results.get(player)))
            for(const[question,answer] of questions.entries()){
                let correct = "Erreur"
                if(answer == 0) correct = "Correct"
                axios.post("http://localhost:4000/stats",{nom:player,questions:question,result:correct})
            }
        }
    }

    saveResult()

    return (
        <div id="mainResultDiv">
            <h2>Le vainqueur est {winner}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Joueur</th>
                        <th>Réponses Correctes</th>
                        <th>Réponses fausses</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from(results.keys()).map(player =>{
                        console.log(player)
                        const playerQuestions = new Map(Object.entries(results.get(player)))
                        let correct = 0
                        let total = 0
                        Array.from(playerQuestions.keys()).map(question => {
                            if(playerQuestions.get(question)==1) correct=correct+1
                            total=total+1
                        })
                        console.log(player)
                        console.log(correct+" "+total)
                        return(
                            <tr>
                                <td>{player}</td>
                                <td>{correct}</td>
                                <td>{total-correct}</td>
                            </tr>
                        )
                    })
                    }
                </tbody>
                
            </table>
        </div>
    );
}

export default Result;