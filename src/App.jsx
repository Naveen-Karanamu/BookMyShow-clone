import Homepage from "./Pages/Homepage/Homepage.page";
import DefaultHOC from "./HOC/Default.HOC";
import SteamHOC from "./HOC/Stream.HOC";
import { Stream } from "./Pages/Stream.page";


function App() {
  return (
  <>
    <DefaultHOC path="/" exact component={Homepage} />
    <SteamHOC path="/stream/:id" exact component={Stream}/>
  </>  
  );
}

export default App;
