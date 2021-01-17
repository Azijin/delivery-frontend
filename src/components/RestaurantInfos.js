const RestaurantInfos = (props) => {
  return (
    <div className="RestaurantInfos">
      <div className="RestaurantInfos-center">
        <div className="RestaurantInfos-texts">
          <h1>{props.name}</h1>
          <p>{props.description}</p>
        </div>
        <img
          className="RestaurantInfos-cover"
          src={props.picture}
          alt="restaurant cover"
        />
      </div>
    </div>
  );
};
export default RestaurantInfos;
