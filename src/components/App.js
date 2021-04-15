import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
//import './App.css';

class App extends React.Component {
  componentDidMount(){
    const {store} = this.props;
    store.subscribe(()=> {  // once after action is dispatched subscription callback is called
      console.log("Updated");
      this.forceUpdate(); // not recomended
    })
    // make API call to get the movies
    // dispatch an action to add the movies to the store
    this.props.store.dispatch({
      type: "ADD_MOVIES",
      movies: data
    })
    
    console.log("state",this.props.store.getState());
  }
  render() {
    console.log("rendered");
    const movies = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>

          <div className="list">
          {movies.map((movie,index) => (
            <MovieCard movie={movie} key={`movies-${index}`}/>
          ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
