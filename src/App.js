import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import TopBar from "./components/TopBar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
library.add(faStar, faPlus, faMinus);

function App() {
  //Import data
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    const response = await axios.get(
      "https://replica-deliveroo-backend.herokuapp.com/"
    );
    // console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const { restaurant, categories } = data;
  //manage the addition to the shopping cart
  const [shoppingCart, setShoppingCart] = useState([]);

  const addShoppingCart = (itemId) => {
    const exist = shoppingCart.find((item) => item.id === itemId);
    if (exist) {
      const index = shoppingCart.indexOf(exist);
      const nextShoppingCart = [...shoppingCart];
      nextShoppingCart[index].quantity++;
      setShoppingCart(nextShoppingCart);
    } else {
      let item = null;
      data.categories.forEach((category) => {
        category.meals.forEach((menu) => {
          if (menu.id === itemId) {
            item = menu;
          }
        });
      });
      if (item === null) {
        console.error(`Cannot find item ${itemId}`);
        return;
      }
      const nextShoppingCart = [...shoppingCart];
      nextShoppingCart.push({
        id: item.id,
        title: item.title,
        price: Number(item.price),
        quantity: 1,
      });
      setShoppingCart(nextShoppingCart);
    }
  };
  const minusShoppingCart = (itemId) => {
    const exist = shoppingCart.find((item) => item.id === itemId);
    if (exist) {
      const index = shoppingCart.indexOf(exist);
      let nextShoppingCart = [...shoppingCart];
      nextShoppingCart[index].quantity--;
      nextShoppingCart = nextShoppingCart.filter((item) => item.quantity > 0);
      setShoppingCart(nextShoppingCart);
    }
  };
  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <>
      <TopBar
        name={restaurant.name}
        description={restaurant.description}
        picture={restaurant.picture}
      />
      <Content
        categories={categories}
        addShoppingCart={addShoppingCart}
        minusShoppingCart={minusShoppingCart}
        shoppingCart={shoppingCart}
      />
      <Footer />
    </>
  );
}
export default App;
