import { Route } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favotites from "./pages/Favotites";

function App() {
  return (
    <div>
      <Route path="/" element={<AllMeetups />}></Route>
      <Route path="/new-meetup" element={<NewMeetup />}></Route>
      <Route path="/favorites" element={<Favotites />}></Route>
    </div>
  );
}

export default App;
