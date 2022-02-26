import axios from 'axios';

class ResultViewModel {


    savePlayers(winner,results){
        for (const [player, value] of results.entries()) {
            let resultStatus = "Défaite"
            if(player==winner) resultStatus = "Victoire"
            axios.post("http://localhost:4000/stats",{nom:player,result:resultStatus})
        }
    }

    saveResult(results){
        for (const [player, value] of results.entries()) {
            let questions = new Map(Object.entries(results.get(player)))
            for(const[question,answer] of questions.entries()){
                let correct = "Erreur"
                if(answer == 0) correct = "Correct"
                axios.post("http://localhost:4000/stats",{nom:player,questions:question,result:correct})
            }
        }
    }
}

export default ResultViewModel