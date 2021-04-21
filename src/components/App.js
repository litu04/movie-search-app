import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies,setShowFavourites } from '../actions';
//import './App.css';

class App extends React.Component {
  componentDidMount(){
    const {store} = this.props;
    console.log("store value",this.props);
    store.subscribe(()=> {  // once after action is dispatched subscription callback is called
      console.log("Updated");
      this.forceUpdate(); // not recomended
    })
    // make API call to get the movies
    // dispatch an action to add the movies to the store
    store.dispatch(addMovies(data));
    
    console.log("state",this.props);
  }

  isMovieFavourite = (movie) => {
    const {movies} = this.props.store.getState();

    const index = movies.favourites.indexOf(movie);

    if (index !== -1){
      return true;
    }
    return false;
  }
  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourites(val));
  }
  render() {
    console.log("rendered");
    const {movies} = this.props.store.getState(); // {movies: {},search: {}}
    console.log("movies get",movies);
    const {list,favourites,show_favourites} = movies;
    const displayMovies = show_favourites ? favourites:list;
    console.log("display movies",displayMovies);
    console.log("list",list);
    console.log("new state",this.props.store.getState());
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab" onClick={() => this.onChangeTab(false)}>Movies</div>
            <div className="tab" onClick={() => this.onChangeTab(true)}>Favourites</div>
          </div>

          <div className="list">
          {displayMovies.map((movie,index) => (
            <MovieCard movie={movie}
              key={`movies-${index}`} 
              dispatch={this.props.store.dispatch}
              isFavourite = {this.isMovieFavourite(movie)}
            />
          ))}
          </div>
          {displayMovies.length === 0 ? <div className="no-movies">No movies to display!</div>:null}
        </div>
      </div>
    );
  }
}

export default App;
