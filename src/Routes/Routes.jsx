import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import ListedBooks from "../pages/ListedBooks/ListedBooks";
import BookDetails from "../pages/BookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("./booksData.json"),
        HydrateFallback: LoadingSpinner,
        Component: Home,
      },
      {
        path: "/filter",
        Component: ListedBooks,
      },
      {
        path: "/bookDetails/:id",
        loader: () => fetch("./booksData.json"),
        HydrateFallback: LoadingSpinner,
        Component: BookDetails,
      },
    ],
  },
]);
