import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Counter = (props) => {
  const { quantity, addShoppingCart, minusShoppingCart, id } = props;
  return (
    <>
      <span
        onClick={() => {
          minusShoppingCart(id);
        }}
      >
        <FontAwesomeIcon icon="minus" />
      </span>
      <span>{quantity}</span>
      <span
        onClick={() => {
          addShoppingCart(id);
        }}
      >
        <FontAwesomeIcon icon="plus" />
      </span>
    </>
  );
};
export default Counter;
