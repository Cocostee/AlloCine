import { BrowserRouter as Router, Route, Routes } from "react-router";
import FilmList from "./components/FilmList";
import { WishlistProvider } from "./context/WishlistProvider";
import WishList from "./components/WishList";
import Navbar from "./components/navbar";
import FilmDetail from "./components/FilmDetail";
import Error404 from "./components/Error404";

const App = () => {
  return (
    <WishlistProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<FilmList />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/film/:id" element={<FilmDetail />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </WishlistProvider>
  );
};

export default App;
