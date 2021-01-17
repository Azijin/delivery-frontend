import Categories from "./Categories";
import ShoppingCart from "./ShoppingCart";
const Content = (props) => {
  const {
    categories,
    addShoppingCart,
    minusShoppingCart,
    shoppingCart,
  } = props;
  return (
    <div className="Content">
      <div className="Content-center">
        <Categories categories={categories} addShoppingCart={addShoppingCart} />
        <ShoppingCart
          shoppingCart={shoppingCart}
          addShoppingCart={addShoppingCart}
          minusShoppingCart={minusShoppingCart}
        />
      </div>
    </div>
  );
};
export default Content;
