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
        <a href=""><i class="fa-solid fa-house-chimney-window"></i>  </a>
        <a href="/publish"><i class="fa-solid fa-plus"></i></a>
        <a href="/list"><i class="fa-solid fa-align-center"></i></a>
        <a href="/chat"><i class="fa-regular fa-message"></i> </a>
      </div>
      <div className="navImage">
        <p className="name">{name}</p>
        <img src={profile} alt="profileImage" />
      </div>
    </div>
  );
}

export default Navbar;
