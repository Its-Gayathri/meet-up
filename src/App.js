import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetUp";
import FavouritePage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetUp";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />}></Route>

        <Route path="/new-meetup" element={<NewMeetupPage />}></Route>

        <Route path="/favourites" element={<FavouritePage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
