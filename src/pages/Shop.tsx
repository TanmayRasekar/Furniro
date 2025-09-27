import styles from "./Shop.module.css"
import FilterMenu from "../assets/FilterMenu.png"
import Squaregrid from "../assets/Squaregrid.png"
import AutoLayout from "../assets/AutoLayout.png"
import Line from "../assets/Line.png"
const Shop = () => {
  return (
    <div>
      <div className={styles.outer_frontBanner}>
        <div className={styles.inner_frontBanner}>
          <div className={styles.shopText}>Shop</div>
          <div className={styles.pathText}>
            <div className={styles.pathTextDiv}>
              <div>Home</div>
              <div>{">"}</div>
            </div>
            <div className={styles.pathTextDiv2}>Shop</div>
          </div>
        </div>
      </div>
      <div className={styles.outer_filterMenu}>
        <div className={styles.inner_filterMenu}>
          <div className={styles.filtermenu}>
            <div className={styles.filtericon}>
              <img src={FilterMenu} alt="filter icon" />
              <div>Filter</div>
            </div>
            <div className={styles.viewicon}>
              <img src={Squaregrid} alt="square grid" />
              <img src={AutoLayout} alt="auto layout" />
            </div>
            <div className={styles.lineicon}>
              <img src={Line} alt="line" />
            </div>
            <div>Showing 1-16 of 32 results</div>
          </div>

          <div className={styles.sortby1}>
            <div className={styles.show}>
              <div>Show</div>
              <input type="text" placeholder="12" />
            </div>
            <div className={styles.sortby2}>
              <div>Sort by</div>
              <select className={styles.sortbySelect}>
                <option>Default</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div>Preview cards</div>
      <div>Information bar</div>
    </div>
  )
}

export default Shop