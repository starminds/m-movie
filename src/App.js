import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Header } from "./components/pages/Header";
import { GlobalStyled } from "./components/styles/globalStyle";
import { Detail } from "./components/detail/Detail";
import { Interest } from "./components/insterest/Interest";
import { Search } from "./components/search/Search";
import { Footer } from "./components/pages/Footer";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <GlobalStyled />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/Interest" element={<Interest />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}
export default App;
