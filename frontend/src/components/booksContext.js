import { createContext, useState } from "react";
import Cookies from 'js-cookie'

export const booksContext = createContext();
export const BooksProvider = ({ children }) => {

const [trendingBooks, setTrending] = useState([]);
const [scienceBooks, setScienceBooks] = useState([]);
const [romance, setRomance] = useState([]);
const [horror, setHorror] = useState([]);
const token = Cookies.get("token");
  async function retrieveBooks(){
      await fetch("https://novelia.herokuapp.com/topTen", {
        method: "GET",
        headers: {
          "authorization": `Bearer ${token}`,
        }
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setTrending(data.books);
        });
          await fetch("https://novelia.herokuapp.com/getByGenre?genre=science", {
        method: "GET",
        headers: {
          "authorization": `Bearer ${token}`,
        }
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setScienceBooks(data.books);
        });
      await fetch("https://novelia.herokuapp.com/getByGenre?genre=romance", {
        method: "GET",
        headers: {
          "authorization": `Bearer ${token}`,
        }
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => { 
          setRomance(data.books);
        });
      await fetch("https://novelia.herokuapp.com/getByGenre?genre=horror", {
        method: "GET",
        headers: {
          "authorization": `Bearer ${token}`,
        }
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => { 
          setHorror(data.books);
        });
    
  };
    return (
    <booksContext.Provider value={{trendingBooks, romance, scienceBooks, horror, retrieveBooks, retrieveBooks}}>
      {children}
    </booksContext.Provider>
  );
};

