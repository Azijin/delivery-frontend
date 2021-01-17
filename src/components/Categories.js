import Meals from "./Meals";
const Categories = (props) => {
  const { categories, addShoppingCart } = props;
  const newCategories = categories.filter(
    (category) => category.meals.length > 0
  );

  return (
    <div className="Category">
      {newCategories.map((category, index) => {
        return (
          <Meals key={index} {...category} addShoppingCart={addShoppingCart} />
        );
      })}
    </div>
  );
};
export default Categories;
