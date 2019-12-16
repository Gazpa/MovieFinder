import React from "react";

export const MoviePager = props => {
  return (
    <div className="block full">
      <ul className="pager">
        {props.showPreviousButton && (
          <li className="previous">
            <button
              className="btn btn-sm btn-primary"
              onClick={e => props.submitMovieSearch(e, -1)}
            >
              <i className="fa fa-chevron-left"></i>
            </button>
          </li>
        )}
        {props.showNextButton && (
          <li className="next">
            <button
              className="btn btn-sm btn-primary"
              onClick={e => props.submitMovieSearch(e, 1)}
            >
              <i className="fa fa-chevron-right"></i>
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};
