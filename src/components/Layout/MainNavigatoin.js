import { useContext } from "react";
import { Link } from "react-router-dom";
import classesMain from "./MainNavigatoin.module.css";
import FavoritesContext from "../../store/FavoritesContext";

const MainNavigatoin = () => {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classesMain.header}>
      <div className={classesMain.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="favorites">
              Favotites
              <span className={classesMain.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigatoin;
