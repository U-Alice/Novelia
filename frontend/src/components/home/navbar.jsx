import { useContext } from "react";
import { userContext } from "../userContext";
import Cookies from "js-cookie";

function Navbar() {
  const [name, setName] = Cookies.get("userName")
  const { profile, userDetails } = useContext(userContext);
  console.log(name)
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
      <div className="navImage">
        <p className="name">{name}</p>
        <img src={localStorage.getItem("profile")} alt="profileImage" />
      </div>
    </div>
  );
}

export default Navbar;
