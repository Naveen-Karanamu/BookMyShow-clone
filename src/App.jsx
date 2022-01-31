import Homepage from "./Pages/Homepage.page";
import DefaultHOC from "./HOC/Default.HOC";
import StreamHOC from "./HOC/Stream.HOC";
import { Stream } from "./Pages/Stream.page";
import Plays from "./Pages/Plays.page";
import PlaysHOC from "./HOC/Plays.HOC";
import axios from "axios";
import PlaysSubPage from "./Pages/PlaysSub.page";
import PlaysSubHOC from "./HOC/PlaysSub.HOC"

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
      <PlaysSubHOC path="/plays/sub" exact component={PlaysSubPage} />
    </>
  );
}

export default App;
