import { Box, Typography, useTheme } from "@mui/material";
import Tilt from "react-parallax-tilt";
import BrokenImageIcon from "@mui/icons-material/BrokenImage";
import { MissingInformations, TitlesAndNames } from "../consts";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Tooltip } from "react-tooltip";

export type BookItemPropsType = {
  title: string;
  author: string;
  img: string;
  id: string;
  info: string;
};

export const BookItemComponent: React.FC<BookItemPropsType> = ({
  title,
  author,
  img,
  id,
  info,
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
        boxShadow: "0px 0px 10px 1px #B0926A",
        padding: "20px",
        backgroundColor: "rgba(255,255,255, 0.4)",
        borderRadius: "7px",
      }}
    >
      <HelpOutlineIcon
        id={id}
        data-tooltip-id={id}
        data-tooltip-content={info}
        data-tooltip-variant="dark"
        sx={{
          position: "absolute",

          right: "10px",
          top: "10px",
          color: theme.palette.background.paper,
          fontSize: "25px",
        }}
      />

      <Tooltip
        style={{
          zIndex: 100,
          fontSize: 16,
          color: theme.palette.background.paper,
          maxWidth: "350px",
          backgroundColor: "#121212",
          boxShadow: `0px 0px 20px 5px ${theme.palette.background.default}`,
          borderRadius: "12px",
          padding: "20px",
        }}
        classNameArrow="bottom"
        id={id}
      />

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
              boxShadow: "0px 0px 5px 1px #B0926A",
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
