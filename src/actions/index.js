
// action types as variables
export const ADD_MOVIES = 'ADD_MOVIES';

// action creators for returning an action
export function addMovies (movies){
    return{
        type: ADD_MOVIES,
        movies: movies
    }
}