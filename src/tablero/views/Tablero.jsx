import React, { useState, useEffect } from "react";
import { Square } from "../components";
import { Grid } from "@mui/material";
import { Cabecera } from "./Cabecera";

const SIZE_OF_SHIP = 4;

export const Tablero = () => {
  const [board, setBoard] = useState([]);
  const [ships, setShips] = useState([]);
  const [inputCommand, setInputCommand] = useState('');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const initialBoard = Array.from({ length: 10 }, () => Array(10).fill(null));
    setBoard(initialBoard);

    const generatedShips = [];
    for (let i = 0; i < 5; i++) {
      let newShipPosition;
      let isHorizontal;

      // Generar la orientación aleatoriamente
      isHorizontal = Math.random() < 0.5;

      do {
        newShipPosition = getRandomPosition();

        // Ajustar la posición si el barco se sale de la matriz
        if (isHorizontal && newShipPosition.col + SIZE_OF_SHIP > 10) {
          newShipPosition.col = 10 - SIZE_OF_SHIP + 1;
        } else if (!isHorizontal && newShipPosition.row.charCodeAt(0) + SIZE_OF_SHIP - 1 > 'J'.charCodeAt(0)) {
          newShipPosition.row = String.fromCharCode('J'.charCodeAt(0) - SIZE_OF_SHIP + 1);
        }
      } while (
        generatedShips.some(
          (ship) =>
            ship.some(
              (position) =>
                (isHorizontal &&
                  position.row === newShipPosition.row &&
                  position.col === newShipPosition.col) ||
                (!isHorizontal &&
                  position.col === newShipPosition.col &&
                  position.row === newShipPosition.row)
            )
        )
      );

      // Generar las posiciones del barco según su orientación
      const newShip = Array.from({ length: SIZE_OF_SHIP }, (_, index) => {
        if (isHorizontal) {
          return {
            row: newShipPosition.row,
            col: newShipPosition.col + index,
          };
        } else {
          return {
            row: String.fromCharCode(newShipPosition.row.charCodeAt(0) + index),
            col: newShipPosition.col,
          };
        }
      });

      generatedShips.push(newShip);
    }


    setShips(generatedShips);
    const updatedBoard = initialBoard.map((row) => row.slice());

    generatedShips.forEach((ship) => {
      ship.forEach((position) => {
        const rowIndex = position.row.charCodeAt(0) - 65;
        const colIndex = position.col - 1;

        if (rowIndex >= 0 && rowIndex < 10 && colIndex >= 0 && colIndex < 10) {
          updatedBoard[rowIndex][colIndex] = '';
        }
      });
    });

    setBoard(updatedBoard);
  };



  const getRandomPosition = () => {
    let row, col;
    do {
      row = String.fromCharCode('A'.charCodeAt(0) + Math.floor(Math.random() * 10));
      col = Math.floor(Math.random() * 10) + 1;
    } while (row < 'A' || row > 'J' || col < 1 || col > 10);

    return { row, col };
  };


  const handleCommandExecution = () => {
    console.log(board);
    if (!inputCommand) {
      return;
    }

    const [currentRow, currentCol] = inputCommand.split('');
    const rowIndex = parseInt(currentCol, 10) - 1;
    const colIndex = 'ABCDEFGHIJ'.indexOf(currentRow);

    if (rowIndex >= 0 && rowIndex < 10 && colIndex >= 0 && colIndex < 10) {
      const updatedBoard = board.map((row) => row.slice());

      const targetPosition = { row: currentRow, col: currentCol };
      console.log(ships);
      const hitShip = ships.find((ship) =>
        ship.some(
          (position) =>
            position.row === targetPosition.row &&
            position.col == targetPosition.col
        )
      );

      if (hitShip) {
        hitShip.forEach((position) => {
          updatedBoard[position.row.charCodeAt(0) - 65][position.col - 1] = 'O';
        });

        setCounter((prevCounter) => prevCounter + 1);

        const allShipsDestroyed = ships.every((ship) =>
          ship.every(
            (position) =>
              updatedBoard[position.row.charCodeAt(0) - 65][position.col - 1] === 'O'
          )
        );

        if (allShipsDestroyed) {
          alert('¡Juego terminado! Has destruido todos los barcos');
          initializeGame();
          return;
        }
      } else {
        updatedBoard[colIndex][rowIndex] = 'X';
      }

      setBoard(updatedBoard);
    }

    setInputCommand('');
  };

  const columnNames = Array.from({ length: 10 }, (_, index) => index + 1);
  const rowNames = Array.from({ length: 10 }, (_, index) =>
    String.fromCharCode(65 + index)
  );

  return (
    <main className="board">
      <Grid
        item
        sx={{ m: 2 }}
        style={{ backgroundColor: 'white', border: '1px solid white', borderRadius: '5px' }}
      >
        <Cabecera
          counter={counter}
          handleCommandExecution={handleCommandExecution}
          initializeGame={initializeGame}
          setInputCommand={setInputCommand}
        />
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
            <div className="row-name">{rowNames[colIndex]}</div>
            {row.map((cell, rowIndex) => (
              <Square key={rowIndex} index={cell}></Square>
            ))}
          </React.Fragment>
        ))}
      </section>
    </main>
  );
};
