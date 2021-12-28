import Homepage from "./Pages/Homepage/Homepage.page";
import DefaultHOC from "./HOC/Default.HOC";
import { Movie } from "./Pages/Movie.page";
import MovieHOC from "./HOC/Movie.HOC";

function App() {
  return (
  <>
    <DefaultHOC path="/" exact component={Homepage} />
    <MovieHOC path="/movie/:id" exact component={Movie}/>
  </>  
  );
}

export default App;
