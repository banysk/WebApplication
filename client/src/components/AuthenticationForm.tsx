import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Typography } from '@mui/material';

const AuthenticationForm = () => {

    return (
        <Box
            sx={{
                width: 550,
                height: 350,
                backgroundColor: "white",
                borderRadius: "15px"
            }}
        >
            <Grid
                sx={{
                    width: 550,
                    height: 350
                }}
                container
                spacing={2}
                direction="column"
                alignItems="center"
                justifyContent="center">
                <Grid item>
                    <Typography variant="h5">
                        Авторизация
                    </Typography>
                </Grid>
                <Grid item width={300}>
                    <TextField id="standard-basic" label="Логин" variant="standard" fullWidth/>
                </Grid>
                <Grid item width={300}>
                    <TextField id="standard-basic" label="Пароль" variant="standard" fullWidth type="password"/>
                </Grid>
                <Grid item>
                    <Button variant="contained">Войти</Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default AuthenticationForm;