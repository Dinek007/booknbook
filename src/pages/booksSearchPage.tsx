import { Box, CircularProgress } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { BooksData, booksActions } from "../redux/books/books.slice";
import { booksSelectors } from "../redux/books/books.selectors";
import { ErrorComponent } from "../components/errorComponent";
import { BooksGaleryComponent } from "../components/booksGaleryComponent";
import { SearchFormComponent } from "../components/searchFormComponent";
import { useEffect, useState } from "react";
import { FilterComponent } from "../components/filterComponent";

interface FormData {
  query: string;
}

export const BookSearchPage = () => {
  const booksData = useSelector(booksSelectors.booksDataToShow);
  const responseCommunite = useSelector(booksSelectors.responseCommunicate);
  const isLoading = useSelector(booksSelectors.isLoading);
  const currentPage = useSelector(booksSelectors.currentPage);
  const booksDataWithQueryInTitle = useSelector(
    booksSelectors.booksDataToShowWithQueryInName
  );

  const [isLoadingScroll, setIsLoadingScroll] = useState<boolean>(false);
  const [isfilterByQueryTitle, setIsfilterByQueryTitle] =
    useState<boolean>(false);

  const [books, setBooks] = useState<BooksData[]>([]);
  const { control, handleSubmit } = useForm<FormData>();
  const dispatch = useDispatch();

  const onSubmitSearchButton = (data: FormData) => {
    dispatch(booksActions.setCurrentQuery(data.query || ""));
    dispatch(booksActions.getBooks(data.query || ""));
  };

  useEffect(() => {
    if (isfilterByQueryTitle) {
      setBooks(booksDataWithQueryInTitle);
    } else {
      setBooks(booksData);
    }
  }, [isfilterByQueryTitle, booksData, booksDataWithQueryInTitle]);

  useEffect(() => {
    const handleScroll = () => {
      const margin = 10;

      if (
        window.innerHeight + window.scrollY + margin >=
        document.documentElement.offsetHeight
      ) {
        if (!isLoading && !isLoadingScroll && currentPage < 100000) {
          setIsLoadingScroll(true);
          dispatch(booksActions.setIsLoading(true));
          dispatch(booksActions.addBooks(currentPage));
          setIsLoadingScroll(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading, isLoadingScroll]);

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
        handleSubmit={handleSubmit(onSubmitSearchButton)}
      />
      <FilterComponent setIsfilterByQueryTitle={setIsfilterByQueryTitle} />

      {responseCommunite && <ErrorComponent message={responseCommunite} />}

      <BooksGaleryComponent booksData={books} isLoading={isLoading} />

      {isLoading && (
        <CircularProgress
          sx={{
            scale: "200%",
          }}
          color="success"
        />
      )}
    </Box>
  );
};
