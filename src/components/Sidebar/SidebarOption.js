import React from "react";
import { ImageComp } from "../common/ImageComp";

const IMG_URL = process.env.REACT_APP_MOVIE_API_POSTER_URL;

const SidebarOption = props => {
  return (
    <li>
      <div className="fav-img-wrapper">
        <ImageComp
          alt={props.title}
          className={"poster-mini"}
          src={`${IMG_URL}${props.img}`}
        />
      </div>
      <div className="fav-title-wrapper">{props.title}</div>
      <div className="fav-btn-wrapper">
        <button
          onClick={() => props.removeFavorites(props.id)}
          className="btn btn-primary"
        >
          <i className="fa fa-times"></i>
        </button>
      </div>
    </li>
  );
};

export default SidebarOption;
