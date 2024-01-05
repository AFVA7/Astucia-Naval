import { Grid } from "@mui/material";
import { Tablero } from "./Tablero";


export const TableroView = () => {

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 3 }}
        >
            <Grid item sx={{ mt: 2 }}>
                <Tablero />
            </Grid>

        </Grid>
    );
};
