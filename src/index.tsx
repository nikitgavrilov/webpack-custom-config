import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./index.scss";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<RouterProvider router={router} />);
