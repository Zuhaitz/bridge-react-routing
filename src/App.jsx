import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Reserve from "./pages/reserve/Reserve";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <section className="layout">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </section>
    </BrowserRouter>
  );
}

export default App;
