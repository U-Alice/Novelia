import Books from "./books";

function Body() {
  return (
    <div className="body">
      <div className="top">
        <div>
          <h1>Find all novels for all genres</h1>
          <p>
            Not sure what to read! discover your taste and enjoy over 1 thousand
            book samples and their sources, join our community to discover more.
          </p>
        </div>
        <div className="images">
          <img
            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1524697191i/39900826.jpg"
            alt=""
          />
          <img
            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631282611i/55148022.jpg"
            alt=""
            className="secondImage"
          />
        </div>
      </div>
    </div>
  );
}
export default Body;
