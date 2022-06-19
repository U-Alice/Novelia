import { useState } from "react"

function UploadImage(){
    const [file, setFile] = useState("")
    const token = localStorage.getItem("token")
    const handleFileChange = (e) => {
      setFile(e.target.files[0])
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        const formData = new FormData()
        fetch("http://localhost:4001/addProfile",{
            method: "POST",
            body:formData,
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
    }
    return(
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="file" name="image" onChange={handleFileChange}/>
                <button type="submit">UPLOAD</button>
            </form>
        </div>
    )
}
export default UploadImage;