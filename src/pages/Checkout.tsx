import styles from "./Checkout.module.css"
import Checkout_logo from "../assets/Checkout_logo.png"
import Trophy from "../assets/trophy.png"
import guarantee from "../assets/guarantee.png"
import shipping from "../assets/shipping.png"
import support from "../assets/support.png"
const Checkout = () => {
  return (
    <div>
      {/* FrontBanner */}
      <div className={styles.outer_frontbanner}>
        <div className={styles.inner_frontbanner}>
          <div><img src={Checkout_logo} alt="" /></div>
          <div className={styles.banner_text}>Checkout</div>
          <div className={styles.pathText}>
            <div className={styles.pathTextDiv}>Home</div>
            <div>{">"}</div>
            <div className={styles.pathTextDiv2}>Checkout</div>
          </div>
        </div>
      </div>
      {/* FrontBanner End */}

      {/* Checkout */}
      <div className={styles.outer_checkout}>
        <div className={styles.Left_inner_checkout}>1</div>
        <div className={styles.Right_inner_checkout}>2</div>
      </div>
      {/* Checkout End */}

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

export default Checkout