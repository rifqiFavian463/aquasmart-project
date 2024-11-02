import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BerandaPage from "./pages/beranda/beranda-page";
import LaporanPage from "./pages/laporan/laporan-page";
import EditPage from "./pages/laporan/edit-page/edit-page";
import LaporanAddingPage from "./pages/laporan/adding-page/adding-page";
import PenggunaPage from "./pages/pengguna/pengguna-page";
import PenggunaAddingPage from "./pages/pengguna/addding-page/adding-page";
import PenggunaEditPage from "./pages/pengguna/edit-page/edit-page";

import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Footer } from "./components/footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Routes>
        <Route path="/" element={<BerandaPage />} />
        <Route path="/laporan" element={<LaporanPage />} />
        <Route path="/laporan/:id" element={<EditPage />} />
        <Route path="/laporan/adding-page" element={<LaporanAddingPage />} />
        <Route path="/pengguna" element={<PenggunaPage />} />
        <Route path="/pengguna/adding-page" element={<PenggunaAddingPage />} />
        <Route path="/pengguna/:id" element={<PenggunaEditPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
