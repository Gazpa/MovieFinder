import React, { Component } from "react";
import { connect } from "react-redux";

import MoviesList from "./MoviesList";

import { fetchMovies, addFavoriteMovie } from "../../actions/MoviesActions";
import { MoviePager } from "./MoviesPager";

class MoviesSearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      searchError: "",
      searchLast: "",
      pageLast: 0
    };
  }

  addMovieToFavorites = movie => {
    this.props.addFavoriteMovie(movie);
  };

  submitMovieSearch = (e, change) => {
    e.preventDefault();
    const page = (this.props.movieResults && this.props.movieResults.page) || 0;
    const nextPage = page + change;

    let searchText = this.state.searchText;

    if (!searchText || searchText === "") {
      this.setState({ searchError: "Please enter a valid search" });
    } else {
      if (
        searchText !== this.state.searchLast ||
        nextPage !== this.state.pageLast
      ) {
        this.setState(
          { searchError: "", searchLast: searchText, pageLast: nextPage },
          () => {
            this.props.fetchMovies(searchText, nextPage);
          }
        );
      }
    }
  };

  render() {
    const { movieResults } = this.props;
    const { pageLast } = this.state;
    const showPager = movieResults && movieResults.total_pages;
    const showNextButton =
      movieResults &&
      movieResults.total_pages > 0 &&
      movieResults.total_pages > pageLast;
    const showPreviousButton =
      movieResults && movieResults.total_pages > 0 && pageLast > 1;

    return (
      <div id="page-content">
        <div className="block">
          <div className="block-title">
            <h2>
              <strong>Search</strong> for a movie
            </h2>
          </div>

          <form
            action="page_forms_general.html"
            method="post"
            onSubmit={() => {
              return false;
            }}
          >
            <div className="form-group">
              <input
                type="text"
                id="searchMovies"
                name="searchMovies"
                className="form-control"
                onChange={({ target }) => {
                  this.setState({ searchText: target.value });
                }}
              />
            </div>
            <div className="form-group form-actions">
              <button
                type="submit"
                className="btn btn-sm btn-primary"
                onClick={e => this.submitMovieSearch(e, 0)}
              >
                <i className="fa fa-arrow-right"></i> Search
              </button>
            </div>
          </form>
        </div>
        {this.props.movieResults ? (
          <MoviesList
            movies={this.props.movieResults}
            addToFavorites={this.addMovieToFavorites}
          />
        ) : (
          this.state.searchError !== "" && (
            <span className="label label-danger">{this.state.searchError}</span>
          )
        )}

        {showPager && (
          <MoviePager
            showPreviousButton={showPreviousButton}
            showNextButton={showNextButton}
            submitMovieSearch={this.submitMovieSearch}
          />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movieResults: state.movies.movieResults
  };
}

export default connect(mapStateToProps, {
  fetchMovies,
  addFavoriteMovie
})(MoviesSearchForm);
