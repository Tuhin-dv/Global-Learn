// src/Router.jsx
import { createBrowserRouter } from "react-router";
import MainLayout from "../root/MainLayout";
import Home from "../pages/Home";
import FindTutors from "../pages/FindTutors";
import AddTutorial from "../pages/AddTutorial";
import MyTutorials from "../pages/MyTutorials";
import MyBookedTutors from "../pages/MyBookedTutors";
import TutorDetails from "../pages/TutorDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "../components/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/find-tutors", element: <FindTutors /> },
      {
        path: "/find-tutors/:category",
        element: <FindTutors />, // reuse component with category param
      },
      {
        path: "/tutor/:details",
        element:
            <TutorDetails />
      },
      {
        path: "/add-tutorial",
        element: <AddTutorial />
        
      },
      {
        path: "/my-tutorials",
        element:
            <MyTutorials />
         
      },
      {
        path: "/my-booked-tutors",
        element: 
            <MyBookedTutors />
        
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);

export default router;
