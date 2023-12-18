import React from "react";
import styles from "./Card.module.scss";

function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickAdd = () => {
    setIsAdded(!isAdded);
  };


  return (
    <div className={styles.card}>
      <button className={styles.favButton} onClick={props.favouriteClick}>
        <img width={11} height={11} src="/img/like.svg" alt="like" />
      </button>
      <img width={133} height={112} src={props.imageUrl} alt="img" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price}</b>
        </div>
        <button className={styles.addButton} onClick={onClickAdd}>
          <img
            src={isAdded ? "/img/plus_checked.svg" : "/img/plus.svg"}
            alt="plus"
          />
        </button>
      </div>
    </div>
  );
}

export default Card;
