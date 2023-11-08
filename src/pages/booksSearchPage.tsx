import { Box, CircularProgress } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { booksActions } from "../redux/books/books.slice";
import { booksSelectors } from "../redux/books/books.selectors";
import { useEffect } from "react";
import { ErrorComponent } from "../components/errorComponent";
import { BooksGaleryComponent } from "../components/booksGaleryComponent";
import { SearchFormComponent } from "../components/searchFormComponent";

interface FormData {
  query: string;
}

export const BookSearchPage = () => {
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    dispatch(booksActions.getBooks(data.query || ""));
    dispatch(booksActions.clearBooksState({}));
    dispatch(booksActions.setResponseCommunicate(""));
  };

  const booksData = useSelector(booksSelectors.booksDataToShow);
  const responseCommunite = useSelector(booksSelectors.responseCommunicate);
  const isLoading = useSelector(booksSelectors.isLoading);

  useEffect(() => {
    console.log("booksData", booksData);
  }, [booksData]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SearchFormComponent
        control={control}
        handleSubmit={handleSubmit(onSubmit)}
      />

      {responseCommunite && <ErrorComponent message={responseCommunite} />}

      {isLoading && (
        <CircularProgress
          sx={{
            scale: "250%",
            opacity: "50%",
            position: "absolute",
            top: "50vh",
            transform: "translate(0, -50%)",
          }}
          color="inherit"
        />
      )}

      <BooksGaleryComponent booksData={booksData} isLoading={isLoading} />
    </Box>
  );
};
