
class convertXLS{


    constructor(){}

    convertToXlsUser(data,nom,win,callback) {
        var count = 0
        data.forEach(element => {
            if(element["Nom"]==nom){
                count=count+1
                element["Parties"] = element["Parties"]+1
                if(win=="Victoire") element["Victoires"] = element["Victoires"]+1
                else element["Défaites"] = element["Défaites"]+1
            }
        });
        if(count==0){
            console.log('1')
            var obj = {}
            obj['Nom'] = []
            obj['Nom'].push(nom);
            obj['Parties'] = []
            obj['Parties'].push(1);
            console.log('2')
            obj['Victoires'] = []
            obj['Défaites'] = []
            if(win=="Victoire") {
                
                obj['Victoires'].push(1);
                obj['Défaites'].push(0);
            }
            else {
                obj['Victoires'].push(0);
                obj['Défaites'].push(1);
            }
            data.push(obj)
        }
        
        callback(data)
    }

    convertToXlsStat(data,nom,question,result,callback) {
        var count = 0
        data.forEach(element => {
            if(element["Nom"]==nom && element["Questions"]==question){
                count=count+1
                if(result=="Correct") element["Correct"] = element["Correct"]+1
                else element["Erreur"] = element["Erreur"]+1
            }
        });
        if(count==0){
            var obj = {}
            obj['Nom'] = []
            obj['Nom'].push(nom);

            obj['Questions'] = []
            obj['Questions'].push(question);

            obj['Correct'] = []
            obj['Erreur'] = []
            if(result=="Correct") {
                obj['Correct'].push(1);
                obj['Erreur'].push(0);
            }
            else {
                obj['Correct'].push(0);
                obj['Erreur'].push(1);
            }
            data.push(obj)
        }
        callback(data)
    }

}

module.exports = convertXLS