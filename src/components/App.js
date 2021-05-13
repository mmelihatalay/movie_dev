import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import NavBar from "./NavBar";
import axios from "axios";
require("dotenv").config();

class App extends React.Component {
  state = {
    movies: [],

    searchQuery: "",

    listName: "top_rated",
  };

  //FETCH API
  /* async componentDidMount() {
    const baseURL = "http://localhost:3000/movies";
    const response = await fetch(baseURL);
    const data = await response.json();
    this.setState({ movies: data });
  }

  deleteMovie = async (movie) => {
    const baseURL = `http://localhost:3000/movies/${movie.id}`;
    await fetch(baseURL, { method: "DELETE" });
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);

    this.setState((state) => ({
      movies: newMovieList,
    }));
  }; */

  // AXIOS API

  async componentDidMount() {
    const baseURL = `https://api.themoviedb.org/3/movie/${this.state.listName}?api_key=${process.env.REACT_APP_API_KEY}`;
    const response = await axios.get(baseURL);
    this.setState({ movies: response.data.results });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.listName !== prevState.listName) {
      const baseURL = `https://api.themoviedb.org/3/movie/${this.state.listName}?api_key=${process.env.REACT_APP_API_KEY}`;

      const response = await axios.get(baseURL);
      console.log(response.data.results);
      this.setState({ movies: response.data.results });
    }
  }

  deleteMovie = async (movie) => {
    const baseURL = `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${process.env.REACT_APP_API_KEY}`;
    const response = await axios.get(baseURL);
    console.log(baseURL);

    /*     const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);

    this.setState((state) => ({
      movies: newMovieList,
    })); */
  };

  searchMovie = (event) => {
    this.setState((state) => ({
      searchQuery: event.target.value,
    }));
  };

  getList = (listName) => {
    this.setState((state) => ({
      listName: listName,
      searchQuery: "",
    }));
  };

  render() {
    let filteredMovies = this.state.movies.filter((movie) => {
      return (
        movie.title
          .toLowerCase()
          .indexOf(this.state.searchQuery.toLowerCase()) !== -1
      );
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <NavBar getList={this.getList} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <SearchBar searchMovieProp={this.searchMovie} />
          </div>
        </div>
        <div className="row">
          {" "}
          <div className="col-lg-12">
            <MovieList
              movies={filteredMovies}
              deleteMovieProp={this.deleteMovie}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
