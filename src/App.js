import React from 'react'; 
import axios from "axios";
import Movie from "./Movie";
/*

https://yts-proxy.now.sh/movie_details.json
*/

class App extends React.Component {
  
  state = {
    isLoading : true,
    movies: []
  };

  getMovies = async () => {
    const {
      data: {
        data : {movies}
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState({movies, isLoading : false })
    console.log(movies);
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    
    const { isLoading, movies } = this.state;

    return (
      <div>
        {isLoading ? "Loading..." : movies.map(movie => {
          console.log(movie);
          return <Movie />
        })}
      </div>
     )
  }
}

export default App;
