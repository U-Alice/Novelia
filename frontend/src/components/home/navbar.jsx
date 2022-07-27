import { useContext, useEffect } from "react";
import { userContext } from "../userContext";
import Cookies from "js-cookie";

function Navbar() {
  const name = Cookies.get("userName")
  const profile = localStorage.getItem("profile")
  return (
    <div className="navbar">
      <div>
        <a href="">Novelia</a>
      </div>
      <div>
        <Link to="/list">
        My List 
        </Link>
        <a href="">Romance</a>
        <a href="">Contact</a>
        <a href="">Adventure </a>
      </div>
      <div className="navImage">
        <p className="name">{name}</p>
        <img src={profile} alt="profileImage" />
      </div>
    </div>
  );
}

export default Navbar;
