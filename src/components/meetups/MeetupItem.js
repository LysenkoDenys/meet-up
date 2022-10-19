import { useContext } from "react";
import Card from "../ui/Card";
import classesItem from "./MeetupItem.module.css";
import FavoritesContext from "../../store/FavoritesContext";

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite === true) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={classesItem.item}>
      <Card>
        <div className={classesItem.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classesItem.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classesItem.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "Add to Favorits"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
