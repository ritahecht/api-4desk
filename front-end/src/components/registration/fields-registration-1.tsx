import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { green } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import img1 from "../images/icon-comercial.png";
import img2 from "../images/icon-parceiro.png";
import Checkbox from "@mui/material/Checkbox";

const theme = createTheme({
  palette: {
    primary: {
      main: green[900],
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
});

export default function FormRegistration1() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box
            sx={{
              bgcolor: "#ffffff",
              ml: -20,
              height: "50vh",
              width: "110vh",
              mt: 5,
              borderRadius: 3,
            }}
          >
            <Typography sx={{ ml: 33, mb: 4, mt: 3 }}>
              Selecione qual grupo você pertence:
            </Typography>

            <Grid container spacing={1} sx={{ ml: 50, mt: 5 }}>
              <Checkbox sx={{ ml: -36, position: "absolute" }} />
              <Card
                sx={{ ml: -30, height: 202, boxShadow: 5, borderRadius: 5 }}
              >
                <CardMedia>
                  <img src={img2} alt="img" width="200px" />
                </CardMedia>
              </Card>
              <Checkbox sx={{ ml: -1, position: "absolute" }} />
              <Card
                sx={{
                  ml: 10,
                  height: 202,
                  boxShadow: 4,
                  width: 197,
                  borderRadius: 5,
                }}
              >
                <CardMedia>
                  <img src={img1} alt="img" width="200px" />
                </CardMedia>
              </Card>
            </Grid>
          </Box>
        </Container>
      </React.Fragment>
    </ThemeProvider>
  );
}
