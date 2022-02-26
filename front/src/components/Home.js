import React, { Component } from "react";
import "../style/Button.css";



class Home extends Component {


  constructor() {
    super();
    this.state = {
      numPlayer: 0,
      numMaxPlayer: 4,
      playersName:[""]
    }
  }

  //Ajoute un joueur
  Add() {
    this.setState({ numPlayer: this.state.numPlayer + 1 });
  }

  //Retire un joueur, et son nom de la liste des joueurs
  Remove(index) {
    this.setState({ playersName : this.state.playersName.filter((_, i) => i !== index-1)})
    this.setState({ numPlayer: this.state.numPlayer - 1 });
  }

  //Update le nom du joueur dans la liste
  Update(name,index) {
    const nameUpdated = this.state.playersName
    nameUpdated[index-1] = name
    this.setState({ playersName: nameUpdated });
  }

  //Start le jeu, renvoit la liste des joueurs et passe à l'index Board
  Start() {
    this.props.onPlayersChanged(this.state.playersName)
    this.props.onIndexChanged("Board");
  }

  render() {

    var arrayButtons = [];
    var arrayAdd = [];

    console.log(this.state.playersName)

    for (var i = 0; i < this.state.numMaxPlayer - this.state.numPlayer; i++) {
      arrayButtons.push(
        <div class="centered">
          <button class="buttonPlus" onClick={() => this.Add()}>
            +
          </button>
        </div>
      );
    }
    for (i = 0; i < this.state.numPlayer; i++) {

      arrayAdd.push(
        <div class="centered">
          <input placeholder="Nom du joueur" onChange={(e)=>this.Update(e.target.value,i)}/>
          <button class="buttonSupp" onClick={() => this.Remove(i)}>
            Supprimer
          </button>
        </div>
      );
    }

    return (
      <div>
        <div>
          {arrayAdd}
          {arrayButtons}
          {(this.state.numPlayer > 0) &&
            <div class="centered">
              <br />
              <button class="buttonCommencer" onClick={() => this.Start()}>
                Commencer
              </button>
            </div>}
        </div>
      </div>
    );
  }
}

export default Home;