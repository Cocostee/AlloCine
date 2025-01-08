import styles from "../../public/css/Actor.module.css";

const Actors = ({ actors }) => {
  if (!actors || actors.length === 0) {
    return <p className={styles.noActors}>Aucun acteur trouvé.</p>;
  }

  return (
    <div className={styles.actors}>
      <h2>Acteurs</h2>
      <div className={styles.actorsGrid}>
        {actors.map((actor) => (
          <div key={actor.id} className={styles.actorCard}>
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
              className={styles.actorImage}
            />
            <p className={styles.actorName}>{actor.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Actors;
