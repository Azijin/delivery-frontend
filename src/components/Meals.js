import MealItem from "./MealItem";
const Meals = (props) => {
  const { name, meals, addShoppingCart } = props;

  return (
    <div className="Meals">
      <h2>{name}</h2>
      <div className="Meals-items">
        {meals.map((meal) => {
          return (
            <MealItem
              key={meal.id}
              {...meal}
              addShoppingCart={addShoppingCart}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Meals;
