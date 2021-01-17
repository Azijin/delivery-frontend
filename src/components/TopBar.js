import logo from "../assets/logo-deliveroo.png";
import RestaurantInfos from "./RestaurantInfos";
const TopBar = (props) => {
  return (
    <header>
      <div className="TopBar">
        <div className="TopBar-center">
          <img className="logo" alt="logo deliveroo" src={logo} />
        </div>
      </div>
      <RestaurantInfos
        name={props.name}
        description={props.description}
        picture={props.picture}
      />
    </header>
  );
};
export default TopBar;
