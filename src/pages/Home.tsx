import frontbanner from "../assets/frontbanner.jpg"
import rectangle from "../assets/rectangle.jpg"
import styles from "./Home.module.css"
import Bedroom from "../assets/Bedroom.jpg"
import Livingroom from "../assets/living_room.jpg"
import Dining from "../assets/dining.jpg"
import { data } from "../Data.tsx/HomeData"

const Home = () => {

  return (
    <div>
      {/* banner */}
      <div>
        <div className={styles.outercontainer}>
          <img src={frontbanner} alt="frontbanner" className={styles.frontbanner} />
          <img src={rectangle} alt="rectangle" className={styles.overlayimage} />
          <div className={styles.overlayTextouter}>
            <div className={styles.overlayText1}>New Arrival</div>
            <div className={styles.overlayText2}>Discover Our <br/> New Collection</div>
            <div className={styles.overlayText3}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            <div className={styles.overlaybutton}>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}

      {/* Catogories */}
      <div className={styles.outer_catogorie_container}>
      <div className={styles.inner_catogorie_container}>
        <div className={styles.textcontainer}>
          <div className={styles.text1}>Browse The Range</div>
          <div className={styles.text2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
        </div>
        <div className={styles.preview_card_container}>
          <div className={styles.preview_card_inner_container}>
            <div className={styles.preview_card1}>
              <img src={Bedroom} alt="bedroom" />
              <label>Bedroom</label>
            </div>
            <div className={styles.preview_card2}>
              <img src={Livingroom} alt="livingroom" />
              <label>Living</label>
            </div>
            <div className={styles.preview_card3}>
              <img src={Dining} alt="dining" />
              <label>Dining</label>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* Catogories end */}
      {/* products */}
      <div className={styles.outer_products_container}>
        <div className={styles.inner_products_container}>
          <div className={styles.textcontainer}>Our Products</div>
            <div className={styles.outer_products_card}>
              {data.map((item, index) => (
                <div key={index} className={styles.inner_products_card}>
                  <img src={item.image} alt={item.title} className={styles.products_image} />
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
            
              <div className={styles.show_more}>
                <button>show more</button>
              </div>
        </div>
      </div>
      {/* products end */}
      <div className={styles.line}></div>
      <div>showcase1</div>
      <div>showcase2</div>
    </div>
  )
}

export default Home