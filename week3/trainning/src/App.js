import Movie from "./Components/Movie";
import { movies } from "./movieDummy";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        {
          movies.results.map((item) => {//data갯수 만큼 돈다.
            return (
              <Movie 
                title = {item.title}
                poster_path= {item.poster_path}
                vote_average= {item.vote_average}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
