import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { TitlesAndNames } from "../consts";
import { Controller } from "react-hook-form";

export type SearchFormComponentPropsType = {
  handleSubmit: any;
  control: any;
};

export const SearchFormComponent: React.FC<SearchFormComponentPropsType> = ({
  handleSubmit,
  control,
}) => {
  const theme = useTheme();
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      onSubmit={handleSubmit}
    >
      <Typography
        variant="h3"
        sx={{
          margin: "30px",
          [theme.breakpoints.down("sm")]: {
            fontSize: "15px",
          },
        }}
      >
        {TitlesAndNames.MainTitle}
      </Typography>
      <Box>
        <Controller
          name="query"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              label="Book name"
              variant="filled"
              sx={{
                width: "300px",
                [theme.breakpoints.down("sm")]: {
                  width: "150px",
                },

                "& .MuiInputLabel-root.Mui-focused": {
                  color: theme.palette.text.secondary,
                },
                "& .MuiFilledInput-underline:after": {
                  borderBottomColor: theme.palette.text.secondary,
                },
              }}
              {...field}
            />
          )}
        />
        <Button
          sx={{
            marginLeft: "20px",
            marginTop: "1px",
            width: "90px",
            height: "50px",
          }}
          type="submit"
        >
          {TitlesAndNames.ButtonSearch}
        </Button>
      </Box>
    </form>
  );
};
