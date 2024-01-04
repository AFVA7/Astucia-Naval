import React from "react";
import { Square } from "../components";

const turns = {
  x: 'X',
  o: 'O'
}

const board = Array(100).fill(null)
export const Tablero = () => {

  const columnNames = Array.from({ length: 10 }, (_, index) => index + 1);
  const rowNames = Array.from({ length: 10 }, (_, index) => String.fromCharCode(65 + index));



  return (
    <main className="board">
      <section className="column-names">
        {/* Espacio vacío para la esquina superior izquierda */}
        <div className="empty-cell"></div>
        {/* Nombres de las columnas */}
        {columnNames.map((columnName) => (
          <div key={columnName} className="column-name">
            {columnName}
          </div>
        ))}
      </section>
      <section className="game">
        {board.map((_, index) => (
          <React.Fragment key={index}>
            {/* Nombres de las filas */}
            {index % 10 === 0 && (
              <div className="row-name">
                {rowNames[Math.floor(index / 10)]}
              </div>
            )}
            {/* Celdas del tablero */}
            <Square key={index} index={index}></Square>
          </React.Fragment>
        ))}
      </section>
    </main>
  );
}
