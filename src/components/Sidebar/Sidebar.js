import React, { Component } from "react";
import { connect } from "react-redux";

import SidebarOption from "./SidebarOption";

import { removeFavoriteMovie } from "../../actions/MoviesActions";

class Sidebar extends Component {
  removeMovieFromFavorites = id => {
    this.props.removeFavoriteMovie(id);
  };

  render() {
    const { movieFavorites } = this.props;

    return (
      <div id="sidebar">
        <div className="sidebar-scroll">
          <div className="sidebar-content">
            <div className="sidebar-title">
              <strong>Movie</strong> Search Engine
            </div>
            <ul className="sidebar-nav">
              <li className="sidebar-header">Fav List</li>
              {movieFavorites && movieFavorites.length > 0 ? (
                movieFavorites.map(movie => {
                  return (
                    <SidebarOption
                      key={movie.id}
                      id={movie.id}
                      title={movie.original_title}
                      img={movie.poster_path}
                      removeFavorites={this.removeMovieFromFavorites}
                    />
                  );
                })
              ) : (
                <span className="fav-no-content">No favorite movies saved</span>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movieFavorites: state.movies.movieFavorites
  };
}

export default connect(mapStateToProps, {
  removeFavoriteMovie
})(Sidebar);
