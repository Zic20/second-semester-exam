import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home, { loader as homeLoader } from "./pages/Home";
import Detail, { loader as detailLoader } from "./pages/Detail";
import Navbar from "./components/Navbar";
import { Suspense } from "react";
import NotFound from "./pages/NotFound";
import ErrorBoundaryPage from "./pages/ErrorBoundaryPage";

const routes = [
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        errorElement: <ErrorBoundaryPage />,
        loader: homeLoader,
        element: <Home />,
      },
      {
        path: "detail/:name",
        loader: detailLoader,
        element: <Detail />,
        errorElement: <NotFound />,
      },
      {
        element: <NotFound />,
        path: "*",
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
