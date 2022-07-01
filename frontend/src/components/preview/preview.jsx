import Cookies from "js-cookie";
import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../home/navbar";
import "./preview.css";
function Preview() {
  const useQuery = () => {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  };
  let query = useQuery();
  console.log(query.get("id"));
  const [book, setBook] = useState({});
  const token = Cookies.get("token");
  async function getBook() {
    setBook({});
    const api = await fetch(
      `http://localhost:4001/getBook/${query.get("id")}`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    const data = await api.json();
    setBook(data.book);
    console.log(book);
  }
  useEffect(() => {
    getBook();
  }, []);
  return (
    <div className="preview">
      <Navbar />
      <div className="summary">
        <img
          src={book.imgUrl}
          alt=""
        />
        <div className="summaryDesc">
          <h4>
            {() => {
              console.log(book.title)
              return book.title;  
            }}
          </h4>
          <h6>{book.Author}</h6>
          <div>
            <h1>Summary</h1>
            <p>{book.description}</p>
          </div>
          <div className="details">
            <div>
              <p>Rating</p>
            </div>
            <div>
              <p>Rating</p>
            </div>
            <div>
              <p>Rating</p>
            </div>
            <div>
              <p>Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Preview;
