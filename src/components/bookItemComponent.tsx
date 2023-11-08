import { Box, Typography, useTheme } from "@mui/material";
import Tilt from "react-parallax-tilt";
import BrokenImageIcon from '@mui/icons-material/BrokenImage';
import { MissingInformations, TitlesAndNames } from "../consts";

export type BookItemPropsType = {
  title: string;
  author: string;
  img: string;
};

export const BookItemComponent: React.FC<BookItemPropsType> = ({
  title,
  author,
  img,
}) => {
  const theme = useTheme();
  const maxTitleLength = 60;
  const truncatedTitle =
    title?.length > maxTitleLength
      ? `${title.slice(0, maxTitleLength)}...`
      : title;
  const truncatedAuthor =
    author?.length > maxTitleLength
      ? `${author.slice(0, maxTitleLength)}...`
      : author;

  return (
    <Box
      sx={{
        width: "450px",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
          width: "280px",
          flexDirection: "column",
        },
        position: "relative",
        margin: "30px",
        boxShadow: "0px 0px 10px 3px #111111",
        padding: "20px",
        backgroundColor: "rgba(100,100,100, 0.2)",
        borderRadius: "10px",
      }}
    >
      {!img ? (
        <BrokenImageIcon
          sx={{
            width: "150px",
            fontSize: "100px",
            color: theme.palette.background.paper,
          }}
        />
      ) : (
        <Tilt>
          <img
            src={img}
            alt={title + " cover image"}
            style={{
              borderRadius: "5px",
              margin: "30px",
              boxShadow: "0px 0px 10px 4px #000000",
            }}
          />
        </Tilt>
      )}

      <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "250px" }}>
        <Typography variant="h5">{TitlesAndNames.Title}</Typography>

        <Typography
          sx={{
            marginBottom: "10px",
          }}
          variant="h6"
        >
          {truncatedTitle || MissingInformations.MissingTitle}
        </Typography>

        <Typography variant="h5">{TitlesAndNames.Author}</Typography>

        <Typography
          sx={{
            marginBottom: "10px",
          }}
          variant="h6"
        >
          {truncatedAuthor || MissingInformations.MissingAuthor}
        </Typography>
      </Box>
    </Box>
  );
};
