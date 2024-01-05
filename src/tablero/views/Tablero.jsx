import React, { useState, useEffect } from "react";
import { Square } from "../components";
import { Grid } from "@mui/material";
import { Cabecera } from "./Cabecera";

export const Tablero = () => {
  const [board, setBoard] = useState([]);
  const [ships, setShips] = useState([]);
  const [destroyedShips, setDestroyedShips] = useState(0);
  const [inputCommand, setInputCommand] = useState('');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const initialBoard = Array.from({ length: 10 }, () => Array(10).fill(null));
    setBoard(initialBoard);

    const getRandomPosition = () => {
      const row = 'ABCDEFGHIJ'.charAt(Math.floor(Math.random() * 10));
      const col = Math.floor(Math.random() * 10) + 1;

      return { row, col };
    };

    const generatedShips = [];
    for (let i = 0; i < 5; i++) {
      let newShipPosition;
      do {
        newShipPosition = getRandomPosition();
      } while (generatedShips.some(ship => ship.row === newShipPosition.row && ship.col === newShipPosition.col));

      generatedShips.push(newShipPosition);
    }

    setShips(generatedShips.map(position => ({ ...position, hits: 0, size: 4 })));

    const updatedBoard = initialBoard.map(row => row.slice());
    generatedShips.forEach(ship => {
      updatedBoard[ship.row.charCodeAt(0) - 65][ship.col - 1] = 'B';
    });

    setBoard(updatedBoard);
  };

  const handleCommandExecution = () => {
    console.log(board);
    const [currentRow, currentCol] = inputCommand.split('');
    const rowIndex = parseInt(currentCol, 10) - 1;

    const colIndex = 'ABCDEFGHIJ'.indexOf(currentRow);


    if (rowIndex >= 0 && rowIndex < 10 && colIndex >= 0 && colIndex < 10) {
      const updatedBoard = board.map(row => row.slice());

      const targetPosition = { row: currentRow, col: currentCol };
      const hitShip = ships.find(ship => ship.row === targetPosition.row && ship.col == targetPosition.col);
      console.log(ships);
      console.log(hitShip);
      console.log(destroyedShips);

      if (hitShip) {
        hitShip.hits += 1;
        updatedBoard[colIndex][rowIndex] = 'O';
        setCounter(prevCounter => prevCounter + 1);

        if (hitShip.hits === 4) {
          setDestroyedShips(prevCount => prevCount + 1);

          if (destroyedShips + 1 === 5) {
            alert("¡Juego terminado! Has destruido todos los barcos");
            initializeGame();
            return;  
          }
        }
      } else {
        updatedBoard[colIndex][rowIndex] = 'X';
      }

      setBoard(updatedBoard);


    }
  };

  const columnNames = Array.from({ length: 10 }, (_, index) => index + 1);
  const rowNames = Array.from({ length: 10 }, (_, index) => String.fromCharCode(65 + index));

  return (
    <main className="board">
      <Grid item sx={{ m: 2 }} style={{ backgroundColor: "white", border: '1px solid white', borderRadius: '5px' }}>
        <Cabecera counter={counter} handleCommandExecution={handleCommandExecution} initializeGame={initializeGame} setInputCommand={setInputCommand} />
      </Grid>
      <section className="column-names">
        <div className="empty-cell"></div>
        {columnNames.map((columnName) => (
          <div key={columnName} className="column-name">
            {columnName}
          </div>
        ))}
      </section>
      <section className="game">
        {board.map((row, colIndex) => (
          <React.Fragment key={colIndex}>
            <div className="row-name">
              {rowNames[colIndex]}
            </div>
            {row.map((cell, rowIndex) => (
              <Square key={rowIndex} index={cell}></Square>
            ))}
          </React.Fragment>
        ))}
      </section>
    </main>
  );
}
