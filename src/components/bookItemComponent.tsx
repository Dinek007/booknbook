import { Box, Typography, useTheme } from "@mui/material";
import Tilt from "react-parallax-tilt";
import BrokenImageIcon from '@mui/icons-material/BrokenImage';

type BookItemProps = {
  title: string;
  author: string;
  img: string;
};

export const BookItemComponent = ({ title, author, img }: BookItemProps) => {
  const theme = useTheme() as any;
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
            flexDirection: "column"
          },
        position: "relative",
        margin: "30px",
        boxShadow: "0px 0px 10px 3px #111111",
        padding: "20px",
        backgroundColor: "rgba(100,100,100, 0.2)",
        borderRadius: "10px",
      }}
    >
      {img === "unknown" ? (
        <BrokenImageIcon
          sx={{
            width: "150px",
            fontSize: "100px",
            color: theme.palette.background.paper,
          }}
        />
      ) : (
        <Tilt key={title}>
          <img
            id={title}
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

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{
            marginBottom: "10px",
            display: "flex",
            flexDirection: "column",
          }}
          color={theme.typography.h6}
        >
          <Typography color={theme.typography.h5}> Title</Typography>{" "}
          {truncatedTitle}
        </Typography>
        <Typography
          sx={{
            marginBottom: "10px",
            display: "flex",
            flexDirection: "column",
          }}
          color={theme.typography.h6}
        >
          <Typography color={theme.typography.h5}> Author</Typography>{" "}
          {truncatedAuthor}
        </Typography>
      </Box>
    </Box>
  );
};
