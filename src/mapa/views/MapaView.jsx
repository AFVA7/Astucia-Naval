import { Grid } from "@mui/material";
import { Mapa } from './Mapa';


export const MapaView = () => {

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 3 }}
        >
            <Mapa />
        </Grid>
    );
};
