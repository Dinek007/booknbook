import { Components, Palette } from "@mui/material/styles";
import PoppinsMedium from "../fonts/Poppins-Medium.ttf"

export const getComponents = (palette: Palette): Components =>
  ({
    MuiCssBaseline: {
      styleOverrides: `
    body {
      overflow: overlay;
      background-color: ${palette.background.default};
      color: white;
    }

    @font-face {
      font-family: Poppins;
      src: url(${PoppinsMedium}) format("truetype");
      font-weight: normal;
      color: white;
    }
    `,
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: palette.text.secondary,
        },
      },
    },

    MuiFilledInput: {
      styleOverrides: {
        input: {
          "&:-webkit-autofill": {
            "-webkit-box-shadow": `0 0 0 100px ${palette.background.paper} inset`,
            "-webkit-text-fill-color": palette.text.secondary,
          },
          background: "rgb(255, 255, 255, 0.1)",
          borderRadius: "7px",
          width: "384px",
        },
      },
    },

    MuiButton: {
      defaultProps: {
        variant: "text",
      },
      styleOverrides: {
        root: {
          padding: "8px 16px",
          textTransform: "none",
          borderRadius: "7px",
          boxShadow: "none",
          color: palette.text.secondary,
          backgroundColor: palette.background.paper,
        },
        containedSecondary: {
          ":disabled": {
            color: palette.text.secondary,
          },
        },
        sizeSmall: {
          fontSize: "14px",
        },
        sizeMedium: {
          fontSize: "16px",
        },
        sizeLarge: {
          fontSize: "20px",
        },
        text: {
          color: palette.text.secondary,
        },
      },
    },
  } as Components);