import React from "react";

const NavBar = (props) => {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <button
          type="button"
          className="btn btn-md btn-outline-info"
          onClick={(event) => {
            props.getList("now_playing");
          }}
        >
          Now Playing
        </button>
      </li>
      <li className="nav-item">
        <button
          type="button"
          className="btn btn-md btn-outline-info"
          onClick={(event) => {
            props.getList("popular");
          }}
        >
          Popular
        </button>
      </li>
      <li className="nav-item">
        <button
          type="button"
          className="btn btn-md btn-outline-info"
          onClick={(event) => {
            props.getList("top_rated");
          }}
        >
          Top Rated
        </button>
      </li>
      <li className="nav-item">
        <button
          type="button"
          className="btn btn-md btn-outline-info"
          onClick={(event) => {
            props.getList("upcoming");
          }}
        >
          Upcoming
        </button>
      </li>
    </ul>
  );
};

export default NavBar;
