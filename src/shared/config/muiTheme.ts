import { createTheme } from "@mui/material";

/**
 *
 * @description global mui theme config
 */

export const muiTheme = createTheme({
  colorSchemes: {
    dark: true,
    light: true,
  },
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "text",
      },
    },
  },
});
