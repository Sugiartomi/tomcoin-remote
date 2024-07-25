import axios from "axios"
import { useEffect, useState } from "react"
import { baseurl } from "../config/http"

export default function CMSMedia() {
  const [media, setMedia] = useState([])
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

  const handleAdd = () => {
    let arr = [...media]
    arr.push([])
    setMedia(arr)
  }

  const handleDelete = (index) => {
    let arr = [...media]
    delete arr[index]
    let test = arr.filter((e) => e !== undefined)
    console.log(test)
    setMedia(test)
  }

  console.log(media)

  return (
    <>
      <div className="p-4 bg-secondary mt-5" style={{ borderRadius: 25 }}>
        <div className="font-24 fw-bold mt-2">Media Partner</div>

        {media.length == 0 ? (
          <div>
            <div className="font-24 mt-4">Click Add untuk menambah item</div>
          </div>
        ) : (
          media.map((e, i) => {
            const param = `asset-${i + 1}-media`
            return (
              <div>
                <div className="font-24 mt-4">Media-{i + 1}</div>
                <div className="d-flex align-items-center">
                  <input
                    type="file"
                    className="form-control shadow-none mt-2 border-0"
                    name={param}
                    onChange={handleFile}
                  />
                  <div className="mx-3 pointer" onClick={() => handleDelete(i)}>
                    X
                  </div>
                </div>
              </div>
            )
          })
        )}

        <div className="d-flex justify-content-end">
          <div className="btn btn-dark mt-4" onClick={() => handleAdd()}>
            Add
          </div>
        </div>
      </div>
    </>
  )
}
