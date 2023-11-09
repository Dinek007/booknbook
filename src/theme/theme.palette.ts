import createPalette from "@mui/material/styles/createPalette";

export const getPalette = () => {
  return createPalette({
    background: {
      default: "#FAE7C9",
      paper: "#E1C78F",
    },
    success: {
      main: "#706233",
    },
    error: {
      main: "#ff0000",
    },
    warning: {
      main: "#ff0000",
    },
    text: {
      primary: "#a0825A",
      secondary: "#706233",
    },
  });
};
