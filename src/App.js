import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetUp";
import FavouritePage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetUp";
import MainNavigation from "./components/Layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllMeetupsPage />}></Route>

        <Route path="/new-meetup" element={<NewMeetupPage />}></Route>

        <Route path="/favourites" element={<FavouritePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
