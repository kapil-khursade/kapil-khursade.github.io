"use client";
import NavbarComponant from "./componant/NavbarComponant";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import BackgroundComponant from "./componant/BackgroundComponant";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/projects",
    element: <Projects/>,
  },
]);

export default function App() {
  return (
    <div className="bg-white">
      <NavbarComponant />
      <BackgroundComponant>
      <RouterProvider router={router} />,
      </BackgroundComponant>
    </div>
  );
}