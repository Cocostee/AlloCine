import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import {
  fetchFilmById,
  fetchActorsByFilmId,
  fetchSimilarFilms,
} from "../services/film";
import styles from "../../public/css/FilmDetail.module.css";
import { WishlistContext } from "../context/WishlistProvider";
import Actors from "./Actor";
import SimilarFilms from "./SimilarFilms";

const FilmDetail = () => {
  const { id } = useParams();
  const [error, setError] = useState(false);
  const [film, setFilm] = useState(null);
  const [actors, setActors] = useState([]);
  const [similarFilms, setSimilarFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const { wishlist, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const filmData = await fetchFilmById(id);
        const actorsData = await fetchActorsByFilmId(id);
        const similarFilmsData = await fetchSimilarFilms(id);

        setFilm(filmData);
        setActors(actorsData);
        setSimilarFilms(similarFilmsData);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const isInWishlist = (id) =>
    wishlist.some((wishlistFilm) => wishlistFilm.id === id);

  if (loading) {
    return <p className={styles.loading}>Chargement de votre film ... 👻</p>;
  }

  if (error) {
    return <p className={styles.notFound}>Aucun film trouvé ... 🤕</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.detailsSection}>
          <h1 className={styles.title}>{film.original_title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
            alt={film.original_title}
            className={styles.poster}
          />
          <div className={styles.details}>
            <p>{film.overview}</p>
            <p className={styles.releaseDate}>
              Date de sortie : {film.release_date}
            </p>
            <p className={styles.rating}>Note : {film.vote_average}/10</p>
            <p className={styles.runtime}>Durée : {film.runtime} minutes</p>
            {isInWishlist(film.id) ? (
              <button onClick={() => removeFromWishlist(film)}>
                Retirer de la wishlist
              </button>
            ) : (
              <button onClick={() => addToWishlist(film)}>
                Ajouter à la wishlist
              </button>
            )}
          </div>
        </div>
        <Actors actors={actors} />
      </div>
      <SimilarFilms similarFilms={similarFilms} />
    </div>
  );
};

export default FilmDetail;
