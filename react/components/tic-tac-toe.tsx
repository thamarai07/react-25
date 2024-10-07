import { useEffect, useState } from "react";

interface SquareInterface {
  onClick: () => void;
  value: any;
}

function Square({ value, onClick }: SquareInterface) {
  return (
    <button onClick={onClick} className="tictactoe__square">
      {value}
    </button>
  );
}

const TicTacToe = () => {
  const [square, setSquare] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState<string>("");

  const getWinner = (squares: any) => {
    const winnerPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const [x, y, z] of winnerPatterns) {
      if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
        return squares[x];
      }
    }
    return null;
  };

  const handleSquare = (index: number) => {
    const newSquares = [...square];
    if (getWinner(newSquares) || newSquares[index]) return;
    newSquares[index] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquare(newSquares);
  };

  useEffect(() => {
    const winner = getWinner(square);
    if (winner) {
      setStatus(`The winner is ${winner}`);
    } else if (square.every((item) => item !== "")) {
      setStatus("Match is Draw");
    } else {
      setStatus(`Next player is ${isXTurn ? "X" : "O"}`);
    }
  }, [isXTurn, square]);

  return (
    <>
      <div className="tictactoe__container">
        <div className="tictactoe__row">
          <Square onClick={() => handleSquare(0)} value={square[0]} />
          <Square onClick={() => handleSquare(1)} value={square[1]} />
          <Square onClick={() => handleSquare(2)} value={square[2]} />
        </div>
        <div className="tictactoe__row">
          <Square onClick={() => handleSquare(3)} value={square[3]} />
          <Square onClick={() => handleSquare(4)} value={square[4]} />
          <Square onClick={() => handleSquare(5)} value={square[5]} />
        </div>
        <div className="tictactoe__row">
          <Square onClick={() => handleSquare(6)} value={square[6]} />
          <Square onClick={() => handleSquare(7)} value={square[7]} />
          <Square onClick={() => handleSquare(8)} value={square[8]} />
        </div>
      </div>
      <p className="text-center text-[30px] font-semibold">{status}</p>
    </>
  );
};

export default TicTacToe;
