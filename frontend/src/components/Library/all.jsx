import Navbar from "../home/navbar";
import LibraryNav from "./LibraryNav";
import "./lib.css";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useState } from "react";

function All() {
  const [list, setList] = useState([]);

  const useQuery = () => {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  };
  let query = useQuery();
  let id = query.get("id");
  const getList = async () => {
    const api = await fetch("https://novelia.herokuapp.com/getList", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    });
    let data = await api.json();
    let books = await data.List
    setList(books);

  };
  useEffect(() => {
    getList()
  }, []);
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <LibraryNav />
      {list.map((item) => {
        return (
        <div className="lib">
          <div className="libImage">
            <img
              src={item.imgUrl}
              alt=""
            />
          </div>
          <div className="description">
            <h3>{item.title}</h3>
            <p>{item.author}</p>
            <p className="descriptionp">{item.description}</p>
            <button>Start Reading</button>
          </div>
        </div>
        )
      })}
    </div>
  );
}
export default All;
