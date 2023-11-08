import { Box, Typography, useTheme } from "@mui/material";
import { BooksData } from "../redux/books/books.slice";
import { BookItemComponent } from "./bookItemComponent";
import { Communicates } from "../consts";

export type BooksGaleryComponentPropsType = {
  booksData: BooksData[];
  isLoading: boolean;
};

export const BooksGaleryComponent: React.FC<BooksGaleryComponentPropsType> = ({
  booksData,
  isLoading,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "90vw",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {booksData?.length
        ? booksData?.map((book) => {
            return <BookItemComponent key={book.title} {...book} />;
          })
        : !isLoading && (
            <Typography
              variant="h2"
              sx={{
                position: "absolute",
                top: "50vh",
                transform: "translate(0, -50%)",
                color: theme.palette.background.paper,
                [theme.breakpoints.down("sm")]: {
                  width: "230px",
                },
              }}
            >
              {Communicates.EnterBookName}
            </Typography>
          )}
    </Box>
  );
};
