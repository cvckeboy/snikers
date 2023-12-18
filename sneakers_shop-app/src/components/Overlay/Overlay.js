import styles from "./Overlay.module.scss";
import Card from "../Card/index.js";

function Overlay() {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2>Корзина</h2>
        {/* <Card /> */}
        <button className=''></button>
      </div>
    </div>
  );
}

export default Overlay;
