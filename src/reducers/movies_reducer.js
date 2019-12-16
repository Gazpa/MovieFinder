import {
  FETCH_MOVIES,
  ADD_FAVORITE_MOVIE,
  REMOVE_FAVORITE_MOVIE
} from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return { ...state, movieResults: action.payload };
    case ADD_FAVORITE_MOVIE:
      let movieFavorites = state.movieFavorites
        ? [...state.movieFavorites]
        : [];

      //We take out the movie from favs in case the new one has newer data, and avoid duplicate
      movieFavorites = movieFavorites.filter(movie => {
        return movie.id !== action.payload.id;
      });

      let newList = [...movieFavorites, action.payload];

      return { ...state, movieFavorites: newList };

    case REMOVE_FAVORITE_MOVIE:
      let movieFavoritesList = state.movieFavorites
        ? [...state.movieFavorites]
        : [];

      //We take out the movie from favs in case the new one has newer data, and avoid duplicate
      movieFavoritesList = movieFavoritesList.filter(movie => {
        return movie.id !== action.payload;
      });

      return { ...state, movieFavorites: movieFavoritesList };

    default:
      return state;
  }
}
