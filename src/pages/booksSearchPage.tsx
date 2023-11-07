import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { booksActions } from "../redux/books/books.slice";
import { booksSelectors } from "../redux/books/books.selectors";
import { BookItemComponent } from "../components/bookItemComponent";

interface FormData {
  query: string;
}

export const BookSearchPage = () => {
  const dispatch = useDispatch();
  const theme = useTheme() as any;
  const { control, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    if (data.query) dispatch(booksActions.getBooks(data.query));
  };

  const booksData = useSelector(booksSelectors.booksDataToShow);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "50px",
        }}
        onSubmit={handleSubmit(onSubmit)}
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
          What book are you looking for?
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
            Search
          </Button>
        </Box>
      </form>

      <Box
        sx={{
          width: "90vw",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {booksData?.map((book) => {
          return <BookItemComponent key={book.title} {...book} />;
        })}
      </Box>
    </Box>
  );
};
