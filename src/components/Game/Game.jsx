import React, { useState } from "react";
import Cage from "./Cage";
import './game.css'

const Game = () => {
    let rowCageBoolean = true, colCageBolean = true, tempCage = [];
    let alphabet = ['0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    for (let col = 1; col < 9; col++) {
        colCageBolean = rowCageBoolean ? true : false;
        for (let row = 1; row < 9; row++) {
            tempCage.push(
                {
                    className: colCageBolean ? "black" : "white",
                    id: (col + alphabet[row])
                }
            )
            rowCageBoolean = rowCageBoolean ? true : false
        }
        rowCageBoolean = rowCageBoolean ? false : true

    }
    const [cages, setCages] = useState(tempCage)
    // const 
    return (
        <div>
            <div className="info"></div>
            <div className="board">
                {cages.map((e)=>{
                    return <Cage {...e}/>
                })}
            </div>
        </div>
    )
}
export default Game