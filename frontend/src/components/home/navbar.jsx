import { useContext } from "react";
import { userContext } from "../userContext";

function Navbar() {
  const userProfile = useContext(userContext);
  return (
    <div className="navbar">
      <div>
        <a href="">Novelia</a>
      </div>
      <div>
        <a href="">Trending </a>
        <a href="">Romance</a>
        <a href="">Contact</a>
        <a href="">Adventure </a>
      </div>
      <div>
        <a> <i class="fa-solid fa-magnifying-glass"></i> <p>{}</p></a>
        <a><i class="fa-solid fa-circle-user"></i></a>
      </div>
    </div>
  );
}

export default Navbar;
