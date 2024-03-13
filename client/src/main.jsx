import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom/dist";
import "./index.css";

import App from "./App.jsx";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Encounter from "./pages/Encounter";
import Error from "./pages/Error";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    error: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/aboutus/teamMembers",
        element: <About />,
      },
      {
        path: "/profiles/:profileId",
        element: <Profile />,
      },
      {
        path: "/encounter",
        element: <Encounter />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
