import { Grid } from "@mui/material";
import { Mapa } from './Mapa';
import { Tablero } from "./Tablero";


export const TableroView = () => {

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 3 }}
        >
            <Tablero />
        </Grid>
    );
};
