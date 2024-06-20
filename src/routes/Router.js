import { Navigate } from "react-router-dom";
import FullLayout from "../layouts/FullLayout";
import Starter from "../views/Starter";
import About from "../views/About";
import Badges from "../views/ui/Badges";
import Signup from '../views/ui/login/Signup'



const ThemeRoutes = [

  {
      path: "" , element: <FullLayout />,   
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/badges", exact: true, element: <Badges /> },
    ],
  },
];

export default ThemeRoutes;
