import axios from "axios";

import {
  FETCH_MOVIES,
  ADD_FAVORITE_MOVIE,
  REMOVE_FAVORITE_MOVIE
} from "./types";

const ROOT_URL = `${process.env.REACT_APP_MOVIE_API}search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`;

export function fetchMovies(searchText, page) {
  let searchPage = parseInt(page, 10);
  let searchPageFilter = searchPage > 0 ? `&page=${searchPage}` : "";
  let searchTextSpaces = searchText.split(" ").join("%20");

  return function(dispatch) {
    axios
      .get(
        `${ROOT_URL}&language=en-US&query=${searchTextSpaces}&page=1&include_adult=false${searchPageFilter}`
      )
      .then(response => {
        dispatch({
          type: FETCH_MOVIES,
          payload: response.data
        });
      });
  };
}

export function addFavoriteMovie(movie) {
  return {
    type: ADD_FAVORITE_MOVIE,
    payload: movie
  };
}

export function removeFavoriteMovie(id) {
  return {
    type: REMOVE_FAVORITE_MOVIE,
    payload: id
  };
}
