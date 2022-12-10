import {Component} from 'react';

import './MatchModal.css';

class MatchModal extends Component {
    render() {
        if (!this.props.show) {
            return null;
        }
        let header, paragraph;

        if (this.props.winner) {
            header = <h1>Vitória!</h1>;
            paragraph = <p>O jogador {this.props.winner === "O" ? 1 : 2} venceu!</p>
        } else {
            header = <h1>Empate.</h1>;
            paragraph = <p>Ninguém ganhou :(</p>;
        }

        return (
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        {header}
                    </div>
                    <div className="modal-body">
                        {paragraph}
                    </div>
                </div>
            </div>
        );
    }
}

export {MatchModal};