import styles from "./Header.module.css";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import cart from "../assets/cart.png";
import favourite from "../assets/favourite.png";
import profile from "../assets/profile.png";
import { NAVLINKS } from "./NAVLINKS";

const Header = () => {
  return (
    <nav className={styles.outercontainer}>
      <div className={styles.innerContainer}>
        <div className={styles.logoContainer}>
          <a href="/home">
            <img src={logo} alt="logo"/>
          </a>
        </div>
        <div>
          <div className={styles.navlinks}>
            {NAVLINKS.map((link, index) => (
              <a key={index} href={link.href} >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        
        <div className={styles.icons}>
          <a href="/profile">
            <img src={profile} alt="Profile" />
          </a>
          <a href="/search">
            <img src={search} alt="Search" />
          </a>
          <a href="/favorites">
            <img src={favourite} alt="Favorites" />
          </a>
          <a href="/cart">
            <img src={cart} alt="Cart" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
