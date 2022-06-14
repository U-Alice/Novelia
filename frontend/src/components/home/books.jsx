function Books() {
  return (
    <div>
      <div className="top3">
        <div className="heading">
          <h3>TOP 3 this summer </h3>
        </div>
        <div className="top3Books">
          <div className="topBooks">
            <div>
              <p>Name</p>
              <p>Author Name</p>
              <p>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </p>
            </div>
            <div>
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/51UGKY9Wi4L._SX330_BO1,204,203,200_.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="topBooks">
            <div>
              <p>Name</p>
              <p>Author Name</p>
              <p>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </p>
            </div>
            <div>
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/51UGKY9Wi4L._SX330_BO1,204,203,200_.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="topBooks">
            <div>
              <p>Name</p>
              <p>Author Name</p>
              <p>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </p>
            </div>
            <div>
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/51UGKY9Wi4L._SX330_BO1,204,203,200_.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="buy" id="buy">
        <div id="text">
          <h1>Read on Novelia anytime on our app</h1>
        </div>
        <div id="cards">
          <div className="app">
          <i class="fa-brands fa-google-play app-icon"></i>
            <div>
            <p>Download on the</p>
            <h3>Apple Store </h3>
            </div>
          </div>
          <div className="app">
            <i class="fa-brands fa-apple app-icon"></i>
            <div>
            <p>Download on the</p>
            <h3>Apple Store </h3>
            </div>
          </div>
          <div>
            <img src="phone.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Books;
