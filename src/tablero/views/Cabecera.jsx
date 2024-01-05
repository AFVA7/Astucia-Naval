import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react"
import { useForm } from "../../hooks";

const formData = {
    displayComand: 'A1',
}

const formValidations = {
    displayComand: [
        (value) => /^[A-J]\d$/.test(value.toUpperCase()) && value.length > 0,
        'Ingrese una letra (A-J) seguida de un número (1-10)'
    ]
};

export const Cabecera = ({ counter, handleCommandExecution, initializeGame, setInputCommand}) => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const { formState, displayComand, isFormValid, onInputChange, displayComandValid } = useForm(formData, formValidations);

    const handleReset = () => {
        initializeGame();
        setFormSubmitted(false);
    };

    return (
        <div className="cabecera" style={{ padding: 15 }}>
            <p>{`Barcos Destruidos: ${counter}`}</p>
            <p>Comandos:</p>
            <Grid
                container spacing={2}
                alignItems="center"
            >
                <Grid item xs={6}>
                    <TextField
                        label="comandos"
                        type="text"
                        placeholder="Ingrese un comando (ejemplo: D1, H3, C2)"
                        fullWidth
                        name='displayComand'
                        value={displayComand}
                        onChange={(e) => onInputChange(e, setInputCommand)}
                        error={!!displayComandValid && formSubmitted}
                        helperText={displayComandValid}
                    />
                </Grid>

                <Grid item xs={3} >
                    <Button
                        variant='contained'
                        fullWidth
                        onClick={handleCommandExecution}
                    >
                        Ejecutar
                    </Button>
                </Grid>
                <Grid item xs={3} >
                    <Button
                        variant='contained'
                        fullWidth
                        onClick={handleReset}
                    >
                        Limpiar
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}
