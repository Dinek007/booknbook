import { Box, Typography } from "@mui/material";

export type ErrorComponentPropsType = {
  message: string;
};

export const ErrorComponent: React.FC<ErrorComponentPropsType> = ({
  message,
}) => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "8vh",
        padding: "12px",
        border: "2px solid #990000",
        borderRadius: "8px",
      }}
    >
      <Typography variant="subtitle1"> Error: {message}</Typography>
    </Box>
  );
};
