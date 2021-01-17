import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const MealItem = (props) => {
  const {
    id,
    title,
    description,
    price,
    popular,
    picture,
    addShoppingCart,
  } = props;
  return (
    <div
      className="MealItem"
      onClick={() => {
        addShoppingCart(id);
      }}
    >
      <div className="MealItem-card">
        <div className="MealItem-texts">
          <h3>{title}</h3>
          {description && <p>{description}</p>}
          <div className="MealItem-infos">
            <span className="MealItem-price">
              {Number(price).toFixed(2).replace(".", ",")} €
            </span>
            {popular && (
              <span className="MealItem-popular">
                <FontAwesomeIcon icon="star" /> Populaire
              </span>
            )}
          </div>
        </div>
        <div className="MealItem-picture">
          {picture && <img src={picture} alt={title} />}
        </div>
      </div>
    </div>
  );
};
export default MealItem;
