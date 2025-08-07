import { createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import About from "../components/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default router;
