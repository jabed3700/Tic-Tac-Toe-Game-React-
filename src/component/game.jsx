import React from "react";
import Board from "./board";


class Game extends React.Component{
     
    state = {
        history: [{squares:Array(9).fill(null)}]
    }
    onclick = i =>{
        console.log(i)
    }
     
    render(){
        return(
            <div>
                <h1>Game component</h1>
                <div>
                    <Board onClick = {this.onclick} squares = {this.state.history[0]}/>
                </div>
            </div>
        )
    }
}

export default Game;