import {Component} from 'react';

import {GameLogic} from '../../model/GameLogic';

import {MatchModal} from "./MatchModal";

import './TicTacToe.css';

class TicTacToe extends Component {
    constructor() {
        super();

        // Represents the tic-tac-toe's state
        this.gameState = new GameLogic();

        this.state = {
            gameState: this.gameState,
            iterations: 0,
            showModal: false
        }    
    }

    render() {
        let columns = [[], [], []];
        let iterations = 0;
        // This is a really ugly workaround for creating a grid, I'm sorry!
        for (let i = 0; i < 3; i++) {
            console.log(this.state);
            for (let j = 0; j < 3; j++) {
                columns[i].push(<button key={iterations} onClick={() =>this.handlePiece(i, j)} className={"btn-game column-" + j + " piece-" + this.state.gameState.gameState[i][j]}>{this.state.gameState.gameState[i][j]}</button>);
            }
        }

        return (
            <div className="container">
                <h1>TicTacToe</h1>
                <div className="grid">
                    <div className="row row-0">
                        {columns[0]}
                    </div>
                    <div className="row row-1">
                        {columns[1]}
                    </div>
                    <div className="row row-2">
                        {columns[2]}
                    </div>
                </div>
                <MatchModal show={this.state.showModal} winner={this.state.gameState.winner}></MatchModal>
            </div>
        );
    }   
    
    handlePiece(i, j) {
        this.gameState.addPiece(this.getCurrentPiece(), i, j);
        this.setState({iterations: this.state.iterations + 1, gameState: this.gameState});
        this.renderWinningModal();
    }

    getCurrentPiece() {
        if (this.state.iterations % 2 === 0) {
            return 'O';
        } else {
            return 'X';
        }
    }

    renderWinningModal() {
        if (this.state.gameState.winner) this.setState({showModal: true});
    }
}

export {TicTacToe};