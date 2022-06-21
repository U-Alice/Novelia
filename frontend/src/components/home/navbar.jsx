import { useContext } from "react";
import { userContext } from "../userContext";

function Navbar() {
  const {getProfile, profile, userDetails} = useContext(userContext);
  console.log(profile.profile);
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
        <a> <i class="fa-solid fa-magnifying-glass"></i> <img src={profile.profile.image}/></a>
        <a><i class="fa-solid fa-circle-user"></i></a>
      </div>
    </div>
  );
}

export default Navbar;
