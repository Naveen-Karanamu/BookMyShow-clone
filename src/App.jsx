import Homepage from "./Pages/Homepage.page";
import DefaultHOC from "./HOC/default.HOC";
import StreamHOC from "./HOC/Stream.HOC";
import { Stream } from "./Pages/Stream.page";
import Plays from "./Pages/Plays.page";
import PlaysHOC from "./HOC/Plays.HOC";
import axios from "axios";
import PlaysSubPage from "./Pages/PlaysSub.page";
import PlaysSubHOC from "./HOC/PlaysSub.HOC"
import MoviesHOC from "./HOC/Movies.HOC";
import MoviesPage from "./Pages/Movies.page";
import EventsHOC from "./HOC/Events.HOC";
import EventsPage from "./Pages/Events.Page";
import SportsHOC from "./HOC/Sports.HOC";
import SportsPage from "./Pages/Sports.Pages";
import ActivitiesHOC from "./HOC/Activities.HOC";
import ActivitiesPage from "./Pages/Activities.page";
import BuzzHOC from "./HOC/Buzz.HOC";
import BuzzPage from "./Pages/Buzz.Page";

// axios default settings
axios.defaults.baseURL="https://api.themoviedb.org/3";
axios.defaults.params={};
axios.defaults.params["api_key"]=process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={Homepage} />
      <StreamHOC path="/stream/:id" exact component={Stream} />
      <PlaysHOC path="/plays" exact component={Plays} />
      <PlaysSubHOC path="/plays/sub/:id" exact component={PlaysSubPage} />
      <MoviesHOC path="/movies" exact component={MoviesPage} />
      <EventsHOC path="/events" exact component={EventsPage} />
      <SportsHOC path="/sports" exact component={SportsPage} />
      <ActivitiesHOC path="/activities" exact component={ActivitiesPage} />
      <BuzzHOC path="/buzz" exact component={BuzzPage} />
    </>
  );
}

export default App;
