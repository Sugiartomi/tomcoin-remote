import axios from "axios"
import { useEffect, useState } from "react"
import { baseurl } from "../config/http"

export default function CMSBento() {

  const handleFile = (e) => {
    const file = e.target.files[0]
    const param = e.target.name

    const formData = new FormData()
    formData.append("image", file)
    formData.append("title", param)
    formData.append("category", "benefit")
    axios
      .post(baseurl+"/upload", formData)
      .then((resp) => console.log(resp))
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <div className="p-4 bg-secondary mt-5" style={{ borderRadius: 25 }}>
        <div className="font-24 fw-bold mt-2">Bento</div>


        <>
          <div className="font-24 mt-4">Background</div>
          <input
            type="file"
            className="form-control shadow-none mt-2 border-0"
            name="background-1-bento"
            onChange={handleFile}
          />
        </>
        <>
          <div className="font-24 mt-4">Image-1</div>
          <input
            type="file"
            className="form-control shadow-none mt-2 border-0"
            name="image-2-bento"
            onChange={handleFile}
          />
        </>
        <>
          <div className="font-24 mt-4">Image-2</div>
          <input
            type="file"
            className="form-control shadow-none mt-2 border-0"
            name="image-2-bento"
            onChange={handleFile}
          />
        </>
        <>
          <div className="font-24 mt-4">Asset-1</div>
          <input
            type="file"
            className="form-control shadow-none mt-2 border-0"
            name="asset-1-bento"
            onChange={handleFile}
          />
        </>
        <>
          <div className="font-24 mt-4">Asset-1</div>
          <input
            type="file"
            className="form-control shadow-none mt-2 border-0"
            name="asset-1-bento"
            onChange={handleFile}
          />
        </>
        <>
          <div className="font-24 mt-4">Asset-2</div>
          <input
            type="file"
            className="form-control shadow-none mt-2 border-0"
            name="asset-2-bento"
            onChange={handleFile}
          />
        </>
        <>
          <div className="font-24 mt-4">Asset-3</div>
          <input
            type="file"
            className="form-control shadow-none mt-2 border-0"
            name="asset-3-bento"
            onChange={handleFile}
          />
        </>
      
      </div>
    </>
  )
}
