import { createTheme } from "@mui/material/styles";
import { ptBR } from "@mui/material/locale";

const theme = createTheme(
  {
    components: {
      MuiButtonBase: {
        styleOverrides: {
          root: {
            "&:hover": "#40ae89 !important",
          },
        },
      },
    },
    palette: {
      primary: {
        main: "#0e7265",
        contrastText: "#40ae89",
      },
      success: {
        main: "#43A047",
      },
      error: {
        main: "#D32F2F",
      },
    },
  },
  ptBR
);

export default theme;
