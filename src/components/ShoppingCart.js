import Counter from "./Counter";
const ShoppingCart = (props) => {
  const { shoppingCart, addShoppingCart, minusShoppingCart } = props;
  const btnClassName =
    shoppingCart.length > 0 ? "btn-validate" : "btn-disabled";

  let subtotal = 0;
  shoppingCart.forEach((item) => (subtotal += item.price * item.quantity));
  const delivery = 2.5;
  const total = subtotal + delivery;
  return (
    <div className="ShoppingCart">
      <div className="ShoppingCart-container">
        <button className={btnClassName}>Valider mon panier</button>
        {shoppingCart.length > 0 ? (
          <div>
            {shoppingCart.map((item, index) => {
              const { id, title, price, quantity } = item;
              return (
                <div key={index} className="ShoppingCart-items">
                  <div className="ShoppingCart-items-line">
                    <div className="ShoppingCart-counter">
                      <Counter
                        quantity={quantity}
                        addShoppingCart={addShoppingCart}
                        minusShoppingCart={minusShoppingCart}
                        id={id}
                      />
                    </div>
                    <span className="ShoppingCart-item-name">{title}</span>
                    <span className="ShoppingCart-amount">
                      {(price * quantity).toFixed(2)} €
                    </span>
                  </div>
                </div>
              );
            })}
            <div className="ShoppingCart-result">
              <div className="ShoppingCart-result-line">
                <span className="ShoppingCart-result-name">Sous-total</span>
                <span className="ShoppingCart-amount">
                  {subtotal.toFixed(2)} €
                </span>
              </div>
              <div className="ShoppingCart-result-line">
                <span className="ShoppingCart-result-name">
                  Frais de livraison
                </span>
                <span className="ShoppingCart-amount">
                  {delivery.toFixed(2)} €
                </span>
              </div>
            </div>
            <div className="ShoppingCart-total">
              <span className="ShoppingCart-result-name">Total</span>
              <span className="ShoppingCart-amount">{total.toFixed(2)} €</span>
            </div>
          </div>
        ) : (
          <div className="ShoppingCart-empty">
            <p>Votre panier est vide</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default ShoppingCart;
