import { Link } from "react-router";
import styles from "../../public/css/FilmCard.module.css";

const FilmCard = ({
  film,
  isInWishlist,
  addToWishlist,
  removeFromWishlist,
}) => {
  return (
    <div className={styles.card}>
      <Link to={`/film/${film.id}`} className={styles.link}>
        <img
          src={`https://image.tmdb.org/t/p/w200${film.poster_path}`}
          alt={film.original_title}
        />
        <h2>{film.original_title}</h2>
      </Link>
      <div>{film.overview}</div>
      {isInWishlist ? (
        <button onClick={() => removeFromWishlist(film)}>
          Retirer de la wishlist
        </button>
      ) : (
        <button onClick={() => addToWishlist(film)}>
          Ajouter à la wishlist
        </button>
      )}
    </div>
  );
};

export default FilmCard;
