import React, { useState } from "react";
import { TableroView } from "./TableroView";

export const Game = () => {
    const [destroyedShips, setDestroyedShips] = useState(0);

    const handleAttack = (position) => {
        const hitShip = ships.find((ship) => ship.position === position);
        if (hitShip) {
            // Actualizar el estado del barco
            hitShip.hits += 1;

            // Verificar si el barco fue completamente destruido
            if (hitShip.hits === 4) {
                // Incrementar el contador de barcos destruidos
                setDestroyedShips((prevCount) => prevCount + 1);

                // Verificar si todos los barcos han sido destruidos
                if (destroyedShips + 1 === 5) {
                    // Juego terminado
                    alert("¡Felicidades! Has destruido todos los barcos. Juego terminado.");
                    // Aquí podrías reiniciar el juego si lo deseas
                    handleRestartGame();
                }
            }
        };

        const handleRestartGame = () => {
            setDestroyedShips(0);
        };

        return (
            <>
                <TableroView onAttack={handleAttack} />
                <button onClick={handleRestartGame}>Reiniciar Juego</button>
            </>
        )
    }
}
