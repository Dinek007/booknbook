import { Box } from "@mui/material";
import { BookSearchPage } from "./pages/booksSearchPage";

export const App = () => {
  return (
    <Box>
      <BookSearchPage />
    </Box>
  );
};

App.displayName = "AppComponent";
