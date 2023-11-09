import { Box, Checkbox, Typography } from "@mui/material";
import { TitlesAndNames } from "../consts";

export type FilterComponentPropsType = {
  setIsfilterByQueryTitle: (checked: boolean) => void;
};

export const FilterComponent: React.FC<FilterComponentPropsType> = ({
  setIsfilterByQueryTitle,
}) => {
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
      <Checkbox
        color="default"
        onChange={(_event, checked) => {
          setIsfilterByQueryTitle(checked);
        }}
      />
      <Typography variant="h6">
        {TitlesAndNames.FilterByQueryInTitle}
      </Typography>
    </Box>
  );
};
