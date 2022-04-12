import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import FavouritesContext from "../../store/Favourites-context";

function MainNavigation() {
  const favouritesCtx = useContext(FavouritesContext);
  let totalFvas;
  if (favouritesCtx.totalFavourites > 0) {
    totalFvas = favouritesCtx.totalFavourites;
  }
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React MeetUps</div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}> All Meetsups</Link>
          </li>
          <li>
            <Link to={"/new-meetup"}>Add New Meetsup</Link>
          </li>
          <li>
            <Link to={"/favourites"}>My Favourites {totalFvas}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
