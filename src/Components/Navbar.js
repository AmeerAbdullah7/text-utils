import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item AMEER">
            <a className="navbar-brand" href="#">
              {props.title}
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-about" href="#">
              {props.home} <span className="sr-only">(current)</span>
            </a>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/about">
              {props.about}
            </Link>
  </li>*/}
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn- outline-primary my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>

        <div className="d-flex">
          <div
            className="bg-danger rounder mx-2"
            onClick={() => {
              props.toggleMode("danger");
            }}
            style={{ height: "30px", width: "30px" }}
          ></div>
          <div
            className="bg-primary rounder mx-2"
            onClick={() => {
              props.toggleMode("primary");
            }}
            style={{ height: "30px", width: "30px" }}
          ></div>
          <div
            className="bg-success rounder mx-2"
            onClick={() => {
              props.toggleMode("success");
            }}
            style={{ height: "30px", width: "30px" }}
          ></div>
          <div
            className="bg-warning rounder mx-2"
            onClick={() => {
              props.toggleMode("warning");
            }}
            style={{ height: "30px", width: "30px" }}
          ></div>
        </div>

        <div
          className={`form-check form-switch text-${
            props.mode === "light" ? "dark" : "light"
          } `}
        >
          <input
            className="form-check-input"
            onClick={() => props.toggleMode(null)}
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label
            className="form-check-label text-light "
            htmlfor="flexSwitchCheckDefault"
          >
            Enable Da rkmode
          </label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  home: PropTypes.string,
};
/*
Navbar.defaultProps = {
    title: ' haseeb- utils',
    home: ' haeeb - home',
  };*/
