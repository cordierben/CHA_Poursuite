import React, { useState } from 'react';
import "../../style/Result.css";
import images from '../../images/index'

function PlayerResultItem(props) {



    return (
        <div id="mainResultItemDiv">
            <img src={images.Images.icon}></img>
            <h3 id="playerName">{props.name}</h3>
            <p id="rightansw">✅ &nbsp;&nbsp;&nbsp;{props.correct}</p>
            <p id="wrongansw">❌ &nbsp;&nbsp;&nbsp;{props.false}</p>
        </div>
    );
}

export default PlayerResultItem;