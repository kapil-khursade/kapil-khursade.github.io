"use client";
import { Routes, Route } from "react-router";
import NavbarComponant from "./componant/NavbarComponant";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import BackgroundComponant from "./componant/BackgroundComponant";

export default function App() {
  return (
    <div className="bg-white">
      <NavbarComponant />
      <BackgroundComponant>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      </BackgroundComponant>
    </div>
  );
}
