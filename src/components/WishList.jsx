import { useContext } from "react";
import { WishlistContext } from "../context/WishlistProvider";
import FilmCard from "./FilmCard";
import styles from "../../public/css/WishList.module.css";

const WishList = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Ma Wishlist</h2>
      {wishlist.length > 0 ? (
        <div className={styles.grid}>
          {wishlist.map((film, index) => (
            <FilmCard
              key={index}
              film={film}
              isInWishlist={true}
              removeFromWishlist={removeFromWishlist}
            />
          ))}
        </div>
      ) : (
        <p className={styles.empty}>Votre wishlist est vide.</p>
      )}
    </div>
  );
};

export default WishList;
