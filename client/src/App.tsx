import { useContext } from "react";
import { AuthContext, AuthContextProvider } from "./contexts/AuthContext";
import AuthPage from "./pages/AuthPage";
import { Grid } from "@mui/material";

function App() {
  const {isAuthenticated} = useContext(AuthContext);

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}>
      <Grid
        item
        container
        xs={12}
        direction="row"
        alignItems="center"
        justifyContent="center">
        {
          !isAuthenticated && <AuthPage/>
        }
      </Grid>
    </Grid>
  )
}

export default App;
