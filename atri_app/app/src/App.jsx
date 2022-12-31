import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import Slot from "./pages/SLOT.jsx";
import Scanner from "./pages/SCANNER.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/SLOT" element={<Slot />} />
<Route path="/SCANNER" element={<Scanner />} />
    </Routes>
  );
}
