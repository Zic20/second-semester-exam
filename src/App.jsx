import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home, { loader as homeLoader } from "./pages/Home";
import Detail, { loader as detailLoader } from "./pages/Detail";
import Navbar from "./components/Navbar";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { path: "/", loader: homeLoader, element: <Home /> },
      {
        path: "detail/:name",
        loader: detailLoader,
        element: <Detail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
