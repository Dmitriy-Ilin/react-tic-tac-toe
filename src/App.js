import { useEffect, useState } from 'react';
import Square from './Components/Square';
import { Patterns } from './Patterns';


function App() {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [player, setPlayer] = useState('O');
  const [result, setResult] = useState({winner: 'none', state: 'none'});

  useEffect(() => {
    checkWin();
    checkTie();

    if (player === 'X') {
      setPlayer('O');
    } else {
      setPlayer('X');
    }
  }, [board]);

  useEffect(() => {
    if (result.state !== 'none') {
      alert(`Игра окончена. Победитель: ${result.winner}`);
      restartGame();
    }
  }, [result]);

  const chooseSquare = (square) => {
    setBoard(board.map((value, index) => {
      if (index === square && value === '') {
        return player;
      }
      return value;
    }));

  };

  const checkWin = () => {
    Patterns.forEach((currentPattern) => {
      const firstPlayer = board[currentPattern[0]];
      if (firstPlayer === '') {
        return;
      }
      let winningPattern = true;
      currentPattern.forEach((index) => {
        if (board[index] !== firstPlayer) {
          winningPattern = false;
        }
      })

      if (winningPattern) {
        setResult({winner: player, state: 'won'});
      }
    });
  };

  const checkTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === '') {
        filled = false;
      }
    });

    if (filled) {
      setResult({winner: 'Ничья', state: 'tie'});
    }
  };

  const restartGame = () => {
    setBoard(['', '', '', '', '', '', '', '', '']);
    setPlayer('X');
  }

  return (
    <div className="App">
      <div className='board'>
        <div className='row'>
          <Square value={board[0]} chooseSquare={() => chooseSquare(0)}/>
          <Square value={board[1]} chooseSquare={() => chooseSquare(1)}/>
          <Square value={board[2]} chooseSquare={() => chooseSquare(2)}/>
        </div>
        <div className='row'>
          <Square value={board[3]} chooseSquare={() => chooseSquare(3)}/>
          <Square value={board[4]} chooseSquare={() => chooseSquare(4)}/>
          <Square value={board[5]} chooseSquare={() => chooseSquare(5)}/>
        </div>
        <div className='row'>
          <Square value={board[6]} chooseSquare={() => chooseSquare(6)}/>
          <Square value={board[7]} chooseSquare={() => chooseSquare(7)}/>
          <Square value={board[8]} chooseSquare={() => chooseSquare(8)}/>
        </div>
      </div>
    </div>
  );
}

export default App;
