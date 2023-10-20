import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home, { loader as homeLoader } from "./pages/Home";
import Detail from "./pages/detail";
import Navbar from "./components/Navbar";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { path: "/", loader: homeLoader, element: <Home /> },
      {
        path: "detail/:id",
        element: <Detail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
