import styles from "./Shop.module.css"
import FilterMenu from "../assets/FilterMenu.png"
import SquareGrid from "../assets/SquareGrid.png"
import AutoLayout from "../assets/AutoLayout.png"
import Line from "../assets/Line.png"
import Trophy from "../assets/trophy.png"
import guarantee from "../assets/guarantee.png"
import shipping from "../assets/shipping.png"
import support from "../assets/support.png"
import { shopData } from "../Data.tsx/ShopData"

const Shop = () => {
  return (
    <div>
			{/* FrontBanner */}
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
			{/* FrontBanner End */}

			{/* FilterMenu */}
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
			{/* FilterMenu End */}
				
			{/* Preview Cards */}
      <div className={styles.outer_previewCards}>
				<div className={styles.outer_products_card}>
								{shopData.map((item, index) => (
									<div key={index} className={styles.inner_products_card}>
										<img src={item.thumbnail} alt={item.title} className={styles.products_image} />
										<div className={styles.products_bg}>
											<div className={styles.products_metadata}>
												<div className={styles.products_title}>{item.title}</div>
												<div className={styles.products_suffix}>{item.suffix}</div>
												<div className={styles.products_price}>{item.price}</div>
											</div>
										</div>
									</div>
								))}
				</div>
				<div className={styles.pagination}>
					<div>1</div>
					<div>2</div>
					<div>3</div>
					<button className={styles.next}>Next</button>
				</div>
			</div>
			{/* Preview Cards End */}

			{/* Information bar */}
      <div className={styles.outer_informationBar}>
				<div className={styles.inner_informationBar}>
					<img src={Trophy} alt="trophy" />
					<div>
						<div className={styles.inner_informationBar_p1}>High Quality</div>
						<div className={styles.inner_informationBar_p2}>crafted from top materials</div>
					</div>
				</div>
				<div className={styles.inner_informationBar}>
					<img src={guarantee} alt="guarantee" />
					<div>
						<div className={styles.inner_informationBar_p1}>Warranty Protection</div>
						<div className={styles.inner_informationBar_p2}>Over 2 years</div>
					</div>
				</div>
				<div className={styles.inner_informationBar}>
					<img src={shipping} alt="shipping" />
					<div>
						<div className={styles.inner_informationBar_p1}>Free Shipping</div>
						<div className={styles.inner_informationBar_p2}>Order over 150 $</div>
					</div>
				</div>
				<div className={styles.inner_informationBar}>
					<img src={support} alt="support" />
					<div>
						<div className={styles.inner_informationBar_p1}>24 / 7 Support</div>
						<div className={styles.inner_informationBar_p2}>Dedicated support</div>
					</div>
				</div>
			</div>
			{/* Information bar End */}
    </div>
  )
}

export default Shop
