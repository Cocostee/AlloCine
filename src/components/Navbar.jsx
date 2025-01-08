import { NavLink } from "react-router";
import { useContext } from "react";
import styles from "../../public/css/Navbar.module.css";
import { WishlistContext } from "../context/WishlistProvider";

const Navbar = () => {
  const { wishlist } = useContext(WishlistContext);
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <NavLink to="/">AlloCiné</NavLink>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
          >
            Wishlist ({wishlist.length})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
