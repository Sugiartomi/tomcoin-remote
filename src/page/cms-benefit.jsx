import axios from "axios"
import { useEffect, useState } from "react"
import { baseurl } from "../config/http"

export default function CMSBenefit() {
  const [dataBenefit, setDataBenefit] = useState([])
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

  useEffect(() => {
    axios
      .get(baseurl+"/benefit")
      .then(({ data }) => {
        setDataBenefit(data[0])
      })
      .catch((err) => console.log(err))
  }, [])

  const handleEditBenefit = (data) => {
    let { id, header } = data
    axios
      .put(baseurl+"/benefit", {
        id,
        header,
      })
      .then((response) => {
        console.log(response)
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <div className="p-4 bg-secondary mt-5" style={{ borderRadius: 25 }}>
        <div className="font-24 fw-bold mt-2">Benefit</div>

        <>
          <div className="font-24 mt-4">Header</div>
          <input
            type="text"
            className="form-control shadow-none mt-2 border-0"
            value={dataBenefit.header}
            onChange={(e) =>
              setDataBenefit({ ...dataBenefit, header: e.target.value })
            }
          />
        </>
        <>
          <div className="font-24 mt-4">Asset-1</div>
          <input
            type="file"
            className="form-control shadow-none mt-2 border-0"
            name="asset-1-benefit"
            onChange={handleFile}
          />
        </>
        <>
          <div className="font-24 mt-4">Asset-2</div>
          <input
            type="file"
            className="form-control shadow-none mt-2 border-0"
            name="asset-2-benefit"
            onChange={handleFile}
          />
        </>
        <>
          <div className="font-24 mt-4">Asset-3</div>
          <input
            type="file"
            className="form-control shadow-none mt-2 border-0"
            name="asset-3-benefit"
            onChange={handleFile}
          />
        </>
        <>
          <div className="font-24 mt-4">Asset-4</div>
          <input
            type="file"
            className="form-control shadow-none mt-2 border-0"
            name="asset-4-benefit"
            onChange={handleFile}
          />
        </>
        <div className="d-flex justify-content-end">
          <div
            className="btn btn-dark mt-4"
            onClick={() => handleEditBenefit(dataBenefit)}
          >
            Update
          </div>
        </div>
      </div>
    </>
  )
}
