import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavouritesContext from "../store/Favourites-context";

function FavouritePage() {
  const favouritesCtx = useContext(FavouritesContext);
  let content;
  if (favouritesCtx.totalFavourites === 0) {
    content = <p>You have no Favourites, start adding some!</p>;
  } else {
    content = <MeetupList meetups={favouritesCtx.favourites} />;
  }
  return (
    <section>
      <h1>Favourites Page</h1>
      {content}
    </section>
  );
}
export default FavouritePage;
