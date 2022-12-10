import {Component} from 'react';

import {GameLogic} from '../../model/GameLogic'

import './TicTacToe.css'

class TicTacToe extends Component {
    constructor() {
        super();

        this.gameState = new GameLogic();

        this.state = {
            gameState: this.gameState,
            iterations: 0
        }
    
    }

    render() {
        let columns1 = [], columns2 = [], columns0 = [];
        let iterations = 0;
        // This is a really ugly workaround for creating a grid, I'm sorry!
        for (let i = 0; i < 3; i++) {
            columns0.push(<button key={iterations} onClick={() =>this.handlePiece(0, i)} className={"btn-game column-" + i}></button>);
            iterations++;
            columns1.push(<button key={iterations} onClick={() =>this.handlePiece(1, i)} className={"btn-game column-" + i}></button>);
            iterations++;
            columns2.push(<button key={iterations} onClick={() =>this.handlePiece(2, i)} className={"btn-game column-" + i}></button>);
            iterations++;
        }

        return (
            <div className="container">
                <div class="grid">
                    <div class="row-0">
                        {columns0}
                    </div>
                    <div class="row-1">
                        {columns1}
                    </div>
                    <div class="row-2">
                        {columns2}
                    </div>
                </div>
            </div>
        );
    }   
    
    handlePiece(i, j) {
        if (this.state.iterations % 2 === 0) {
            this.gameState.addPiece('O', i, j);
        } else {
            this.gameState.addPiece('X', i, j);
        }
        console.log(this.gameState.gameState);
        this.setState({iterations: this.state.iterations + 1, gameState: this.gameState});
    }
}

export {TicTacToe};