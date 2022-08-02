import Navbar from "../home/navbar";
import "./profile.css";

function Profile(){
    return (
        <div>
            <Navbar/>
            <div className="mainImage">
                <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3N8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <div className="profileContent">

            <div className="bio">
                <h3>Bio</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum distinctio quae fugit natus accusamus ipsam non, enim libero quas aliquid, laudantium obcaecati? Explicabo dolorem omnis, vel nisi pariatur deleniti doloremque?
                </p>
                <button>Edit Bio</button>
                <h3>Location</h3>
                <p>Paris, France</p>
                <h3>
                    Favorite Tags
                </h3>
                <p>
                    Romance, Horror,
                </p>
            </div>
            <div className="myProfile">
                <div className="sideImage">
                    <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="" />
                    <p>Karry Woodson</p>
                </div>
                <div className="profileDetails">
                    <p id="number">886</p>
                    <p id="text">Followers</p>
                </div>
                <div className="profileDetails">
                    <p id="number">12</p>
                    <p id="text">Reading Lists</p>
                </div>
                <div className="profileDetails">
                    <p id="number">8</p>
                    <p id="text">Books</p>
                </div>
                <div className="myBooks">
                <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3xlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60" alt="" />
                <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3xlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60" alt="" />
                <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3xlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60" alt="" />
                </div>
            </div>
            </div>

        </div>
    )
}
export default Profile;