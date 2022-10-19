import { useContext } from "react";
import FavoritesContext from "../store/FavoritesContext";
import MeetupList from "../components/meetups/MeetupList";

const Favotites = () => {
  const favoritesCtx = useContext(FavoritesContext);

  let content;
  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetupsItem={favoritesCtx.favorites} />;
    console.log(favoritesCtx.favorites);
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
};

export default Favotites;
