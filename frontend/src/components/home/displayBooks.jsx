import { useState, useEffect } from "react";
function DisplayBooks() {
  const [trendingBooks, setTrending] = useState([]);
  const [scienceBooks, setScienceBooks] = useState([]);
  const [romance, setRomance] = useState([]);
  const [horror, setHorror] = useState([]);

  const token = localStorage.getItem("token");
  const GetBooks = async () => {
    await fetch("http://localhost:4001/getBooks", {
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
  };
  const science = async () => {
    await fetch("http://localhost:4001/getByGenre?genre=science", {
      method: "GET",
      headers: {
        "authorization": `Bearer ${token}`,
      }
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setScienceBooks(data.books);
      });
  };
  const romanceBooks = async () => {
    await fetch("http://localhost:4001/getByGenre?genre=romance", {
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
  };
  const horrorBooks = async () => {
    await fetch("http://localhost:4001/getByGenre?genre=horror", {
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

  useEffect(() => {
    GetBooks();
    romanceBooks();
    horrorBooks();
    science();
  }, []);

  return (
    <div>
      <div className="heading">
        <h2>Trending Now</h2>
      </div>
      <div className="list">
        {trendingBooks.map((item) => {
          return (
            <div className="listItem">
              <div className="image">
                <img src={item.imgUrl} alt="preview image" />
              </div>
              <div>
                <p>{item.title}</p>
                <button>View Summary</button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="heading">
        <h2>Science</h2>
      </div>
      <div className="list">
        {scienceBooks.map((item) => {
          return (
            <div className="listItem">
              <div className="image">
                <img src={item.cover} alt="preview image" />
              </div>
              <div>
                <p>{item.name}</p>
                <button>View Summary</button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="heading">
        <h3>Romance</h3>
      </div>
      <div className="list">
        {romance.map((item) => {
          return (
            <div className="listItem">
              <div className="image">
                <img src={item.cover} alt="preview image" />
              </div>
              <div>
                <p>{item.name}</p>
                <button>View Summary</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="heading">
        <h2>Horror</h2>
      </div>
      <div className="list">
        {horror.map((item) => {
          return (
            <div className="listItem">
              <div className="image">
                <img src={item.cover} alt="preview image" />
              </div>
              <div>
                <p>{item.name}</p>
                <button>View Summary</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default DisplayBooks;
