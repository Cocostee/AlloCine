import { Link } from "react-router";
import styles from "../../public/css/SimilarFilms.module.css";

const SimilarFilms = ({ similarFilms }) => {
  if (!similarFilms || similarFilms.length === 0) {
    return (
      <p className={styles.noSimilarFilms}>Aucun film similaire trouvé.</p>
    );
  }

  return (
    <div className={styles.similarFilms}>
      <h2>Films similaires</h2>
      <ul className={styles.similarFilmsList}>
        {similarFilms.map((film) => (
          <Link to={`/film/${film.id}`} key={film.id} className={styles.link}>
            <li className={styles.similarFilmCard}>
              <img
                src={`https://image.tmdb.org/t/p/w200${film.poster_path}`}
                alt={film.original_title}
                className={styles.similarFilmImage}
              />
              <p className={styles.similarFilmTitle}>{film.original_title}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SimilarFilms;
