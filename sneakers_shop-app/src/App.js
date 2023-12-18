import React from "react";
import Card from "./components/Card";
import Overlay from "./components/Overlay/Overlay";
import Header from './components/Header';

const arr = [
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12990,
    imageUrl: "./img/1.jpg",
  },
  {
    name: "Мужские Кроссовки Nike Air Max 270",
    price: 10999,
    imageUrl: "./img/2.jpg",
  },
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12990,
    imageUrl: "./img/1.jpg",
  },
  {
    name: "Мужские Кроссовки Nike Air Max 270",
    price: 10999,
    imageUrl: "./img/2.jpg",
  },
];

function App() {
  const [cartOpened, setCartOpened] = React.useState(false)

  return(
      <div className="wrapper clear">
        <Overlay />
        <Header />
        <div className="content pl-40 pr-40 d-flex justify-between align-center">
          <h1 className="">Все кроссовки</h1>
          <div className="search d-flex align-center">
            <img width={20} height={20} src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..."></input>
          </div>
        </div>
        <div className="content-card p-40">
          {arr.map((obj) => (
            <Card
              title={obj.name}
              price={obj.price}
              imageUrl={obj.imageUrl}
              favouriteClick={() => console.log("Добавили в любимое")}
              addClick={() => console.log("добавили в корзину")}
            />
          ))}
        </div>
      </div>
  );
}

export default App;
