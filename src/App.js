import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/movie/:movieID" element={<MovieDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
