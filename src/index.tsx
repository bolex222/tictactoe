import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

type Props = {
    content: number
}

const Square: React.FC<Props> = ({content}) => {
    return (
        <button className="square">
            {content}
        </button>
    )
}

function Board() {

    const renderSquare = (i: number) => {
        return <Square content={i}/>;
    }

    const [status, setStatus] = useState("Next player: X")
    // const status : string  = 'Next player: X'

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);
