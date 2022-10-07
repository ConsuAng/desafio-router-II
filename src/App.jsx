import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Pokemones from "./pages/Pokemones";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="pokemones" element={<Pokemones />}/>
          <Route path="pokemones/:name" element={<Detail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
