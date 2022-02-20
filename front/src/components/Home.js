import React, { Component } from "react";
import "./Button.css";



class Home extends Component {
  constructor() {
    super();
    this.state = {
      numPlayer : 0,
      numMaxPlayer : 4
    }
  }


  Add() {
      this.setState({ numPlayer: this.state.numPlayer + 1 });
    }
  Remove() {
      this.setState({ numPlayer: this.state.numPlayer - 1 });
    }

  render() {

    

    var arrayButtons = [];
    var arrayAdd = [];



    for (var i = 0; i < this.state.numMaxPlayer - this.state.numPlayer; i++) 
    {
      arrayButtons.push(
        <div class = "centered">
        <button class = "buttonPlus" onClick={() => this.Add()}>
        +
        </button>
        </div>
      );
    }
    for (i = 0; i < this.state.numPlayer; i++) 
    {
      
      arrayAdd.push(
        <div class = "centered">
        <input
              placeholder="Nom du joueur"
            />

        <button class = "buttonSupp" onClick={() => this.Remove()}>
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
    
    {(this.state.numPlayer > 0) && <div class = "centered">
    <br/>
    <button class = "buttonCommencer">
    Commencer
    </button> </div>}
    </div>
    </div>

    );
  }
}
  
export default Home;