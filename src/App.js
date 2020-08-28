import React from 'react'; 
import axios from "axios";

/*

https://yts-proxy.now.sh/movie_details.json
*/

class App extends React.Component {
  
  state = {
    isLoading : true,
    movies: []
  };

  componentDidMount() {
    const movies = axios.get('https://yts-proxy.now.sh/list_movies.json');
  }

  render() {
    
    const { isLoading } = this.state;

    return (
      <div>
        {isLoading ? "Loading..." : "We are ready"}
      </div>
     )
  }
}

export default App;
