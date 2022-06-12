import { useState } from "react";
function DisplayBooks() {
  const [books, setBooks] = useState([]);
  const GetBooks = async () => {
    await fetch("http://localhost:4001/getBooks", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBooks(data.books);
      });
  };
  GetBooks();
  return (
    <div>
      <div className="heading">
        <h1>Trending Now</h1>
      </div>
      <div className="list">
        {books.map((item) => {
          return  (
            <div className="listItem">
            <div className="image">
              <img src={item.imgUrl} alt="preview image" />
            </div>
            <div>
              <p>{item.title}</p>
              <button>View Summary</button>
            </div>
          </div>
          )
        })}

       
      </div>
    </div>
  );
}
export default DisplayBooks;
