import { useState } from "react";

function UploadImage() {
  const [file, setFile] = useState();
  const [imageUrl, setImageUrl] = useState("");
  const token = localStorage.getItem("token");
  const handleFileChange = (e) => {
    const image = e.target.files[0];
    setFile(image);
    previewFile(image);
  };
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const images = reader.result;
      setImageUrl(reader.result);
    };
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(imageUrl);
    const formData = new FormData();
    formData.append("files", file);
    // formData.append("upload_preset", "Novelia");
    try {
      fetch("http://localhost:4001/addProfile", {
        method: "POST",
        body: JSON.stringify({data: imageUrl}),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.NjJhNWYwNzM0MWQyMjc4NGEwZDI3YTc1.gYlmT0YKnUivDWeaoE1VgKtbSMLZEyBEUNbn8MUyWsQ`,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="file"
          name="image"
          onChange={handleFileChange}
          multiple
          accept="images/*"
        />
        <button type="submit">UPLOAD</button>
      </form>
    </div>
  );
}
export default UploadImage;
