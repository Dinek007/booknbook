import { Box, Checkbox, FormControlLabel, useTheme } from "@mui/material";
import { TitlesAndNames } from "../consts";

export type FilterComponentPropsType = {
  setIsfilterByQueryTitle: (checked: boolean) => void;
};

export const FilterComponent: React.FC<FilterComponentPropsType> = ({
  setIsfilterByQueryTitle,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: "20px",
        marginBottom: "50px",
      }}
    >
      <FormControlLabel
        htmlFor="filter-checkbox"
        label={TitlesAndNames.FilterByQueryInTitle}
        sx={{ color: theme.palette.text.secondary }}
        color="default"
        control={
          <Checkbox
            color="default"
            onChange={(_event, checked) => {
              setIsfilterByQueryTitle(checked);
            }}
          />
        }
      />
    </Box>
  );
};
