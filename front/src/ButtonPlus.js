import React, { Component } from "react";
import styled from "styled-components";



const StyleButtonPlus = styled.button`
  background-color: black;
  color: white;
  font-size: 100px;
  padding: 15px 50px;
  border-radius: 5px;
  margin: 10px 10px;
  cursor: pointer;
`;

const StyleButtonSupp = styled.button`
  background-color: black;
  color: white;
  font-size: 12px;
  padding: 10px 10px;
  border-radius: 5px;
  margin: 50px 20px;
  cursor: pointer;
`;

const StyleButtonCommencer = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 50px 0px;
  cursor: pointer;
`;


class ButtonPlus extends Component {
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
        <div>
        <StyleButtonPlus onClick={() => this.Add()}>
        +
        </StyleButtonPlus>
        </div>
      );
    }
    for (i = 0; i < this.state.numPlayer; i++) 
    {
      
      arrayAdd.push(
        <div>
        <input
              placeholder="Nom du joueur"
            />

        <StyleButtonSupp onClick={() => this.Remove()}>
        Supprimer
        </StyleButtonSupp>
        </div>
      );
    }

    return (
    <div>
    {arrayAdd}
    {arrayButtons}
    
    {(this.state.numPlayer > 0) && <div>
    <br/>
    <StyleButtonCommencer>
    Commencer
    </StyleButtonCommencer> </div>}
    </div>

    );
  }
}
  
export default ButtonPlus;