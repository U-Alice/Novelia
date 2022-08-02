import { useContext, useEffect } from "react";
import { userContext } from "../userContext";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

function Navbar() {
  const name = Cookies.get("userName")
  const profile = localStorage.getItem("profile")
  return (
    <div className="navbar">
      <div>
        <a href="">Novelia</a>
      </div>
      <div class="navbar1">
        <Link to="/list">
      My List
        </Link>
        <Link to="/welcome">Home</Link>

        <Link to="/myBooks">My Books</Link>
        <Link to="/publish">New</Link>

        <div class="dropdown">
          <button class="dropbtn">Genre
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <Link to="/genre?genre=adventure">adventure</Link>
            <Link to="/genre?genre=horror">horror</Link>
            <Link to="/genre?genre=non-fiction">non-fiction</Link>
            <Link to="/genre?genre=romance">Romance</Link>
          </div>
        </div>
      </div>
      <div>
        <p className="name">{Cookies.get("userName")}</p>
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default Navbar;
