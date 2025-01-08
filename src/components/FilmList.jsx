import { useEffect, useState, useContext } from "react";
import { fetchFilms } from "../services/film";
import FilmCard from "./FilmCard";
import { WishlistContext } from "../context/WishlistProvider";
import styles from "../../public/css/FilmList.module.css";

const FilmList = () => {
  const [films, setFilms] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const { wishlist, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);

  useEffect(() => {
    fetchFilms().then((data) => {
      setFilms(data);
      setLoading(false);
    });
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredFilms = films.filter((film) =>
    film.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const isInWishlist = (film) =>
    wishlist.some((wishlistFilm) => wishlistFilm.id === film.id);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Liste des films</h1>
      <input
        type="search"
        placeholder="Chercher votre film..."
        value={searchQuery}
        onChange={handleSearch}
        className={styles.searchInput}
      />
      {loading ? (
        <p className={styles.loading}>Loading...</p>
      ) : filteredFilms.length === 0 ? (
        <p className={styles.noResults}>
          Aucun film ne correspond à votre recherche ...
        </p>
      ) : (
        <div className={styles.grid}>
          {filteredFilms.map((film, index) => (
            <FilmCard
              key={index}
              film={film}
              isInWishlist={isInWishlist(film)}
              addToWishlist={addToWishlist}
              removeFromWishlist={removeFromWishlist}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FilmList;
