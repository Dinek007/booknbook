import createPalette from "@mui/material/styles/createPalette";

export const getPalette = () => {
  return createPalette({
    background: {
      default: "#1A120B",
      paper: "#3C2A21",
    },
    success: {
      main: "#ffffff",
    },
    error: {
      main: "#ff0000",
    },
    warning: {
      main: "#ff0000",
    },
    text: {
      primary: "#E5E5CB",
      secondary: "#D5CEA3",
    },
  });
};
