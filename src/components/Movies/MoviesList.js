import React from "react";
import { ImageComp } from "../common/ImageComp";

const IMG_URL = process.env.REACT_APP_MOVIE_API_POSTER_URL;

const MoviesList = props => {
  let displayMovies =
    props.movies && props.movies.results && props.movies.results.length > 0;

  return (
    <>
      {displayMovies
        ? props.movies.results.map(movie => {
            return (
              <div className="row" key={movie.id}>
                <div className="col-sm-2">
                  <ImageComp
                    alt={movie.original_title}
                    className={"poster"}
                    src={`${IMG_URL}${movie.poster_path}`}
                  />
                </div>
                <div className="col-sm-2">
                  {`Title: ${movie.original_title}`}
                </div>
                <div className="col-sm-7">{`Overview: ${movie.overview}`}</div>
                <div className="col-sm-1">
                  <div className="btn-group btn-group-xs">
                    <button
                      onClick={() => props.addToFavorites(movie)}
                      className="btn btn-primary"
                    >
                      <i className="fa fa-floppy-o"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        : "No matches found"}
    </>
  );
};

export default MoviesList;
