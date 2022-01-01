import Homepage from "./Pages/Homepage.page";
import DefaultHOC from "./HOC/Default.HOC";
import StreamHOC from "./HOC/Stream.HOC";
import { Stream } from "./Pages/Stream.page";
import Plays from "./Pages/Plays.page";
import PlaysHOC from "./HOC/Plays.HOC";

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={Homepage} />
      <StreamHOC path="/stream/:id" exact component={Stream} />
      <PlaysHOC path="/plays" exact component={Plays} />
    </>
  );
}

export default App;
