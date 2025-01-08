import styles from "../../public/css/Error404.module.css";

const Error404 = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>Oops! Cette page n&apos;existe pas...</p>
      <p className={styles.randomText}>
        Peut-être qu&apos;un pingouin en roller l&apos;a effacée 🐧.
      </p>
      <div className={styles.animation}>
        🌈✨💥 Erreur cosmique en cours... 💥✨🌈
      </div>
      <button
        className={styles.goBackButton}
        onClick={() => window.history.back()}
      >
        Retourner à la réalité
      </button>
    </div>
  );
};

export default Error404;
