import { Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage.component";
import DefaultHOC from "./HOC/Default.HOC";

function App() {
  return (
  <>
    <DefaultHOC path="/" exact component={Homepage} />

  </>  
  );
}

export default App;
