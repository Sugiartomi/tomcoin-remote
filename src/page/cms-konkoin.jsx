import axios from "axios"
import { useEffect, useState } from "react"
import { baseurl } from "../config/http"

export default function CMSKonkoin() {
  const [dataKonkoin, setDataKonkoion] = useState()
  const [dataPoint, setDataPoint] = useState({
    1: {
      title: "",
      purpose: "",
    },
    2: {
      title: "",
      purpose: "",
    },
    3: {
      title: "",
      purpose: "",
    },
  })
  useEffect(() => {
    axios
      .get(baseurl+"/konkoin")
      .then(({ data }) => {
        let header = data[0].header
        let description = data[0].description
        let point = JSON.parse(data[0].point)
        setDataKonkoion({ header, description })
        setDataPoint({
          0: {
            title: point[0].title,
            purpose: point[0].purpose,
          },
          1: {
            title: point[1].title,
            purpose: point[1].purpose,
          },
          2: {
            title: point[2].title,
            purpose: point[2].purpose,
          },
        })
      })
      .catch((err) => console.log(err))
  }, [])

  const handleEditKonkoin = (data1, data2) => {
    let arrPoint = []
    for (const key in dataPoint) {
      const element = dataPoint[key]
      arrPoint.push(element)
    }
    let result = {
      header: dataKonkoin.header,
      description: dataKonkoin.description,
      point: JSON.stringify(arrPoint),
    }

    console.log(arrPoint)
    axios
      .put(baseurl+"/konkoin", result)
      .then((response) => {
        console.log(response)
      })
      .catch((err) => console.log(err))
  }


  return (
    <div className="p-4 bg-secondary" style={{ borderRadius: 25 }}>
      {dataKonkoin ? (
        <div>
          <div className="font-24 fw-bold mt-2">Konkoin</div>
          <>
            <div className="font-24 mt-4">Header</div>
            <input
              type="text"
              className="form-control shadow-none mt-2 border-0"
              value={dataKonkoin.header}
              onChange={(e) =>
                setDataKonkoion({
                  ...dataKonkoin,
                  header: e.target.value,
                })
              }
            />
            <>
              <div className="font-24 mt-4">Description</div>
              <input
                type="text"
                className="form-control shadow-none mt-2 border-0"
                value={dataKonkoin.description}
                onChange={(e) =>
                  setDataKonkoion({
                    ...dataKonkoin,
                    description: e.target.value,
                  })
                }
              />
              {Object.keys(dataPoint).map((e, i) => {
                return (
                  <>
                    <div className="mt-4">
                      <div className="d-flex">
                        <div className="font-24 mt-4" style={{ width: "33%" }}>
                          Point - {i}
                        </div>
                        <input
                          type="text"
                          className="form-control shadow-none mt-2 border-0"
                          value={dataPoint[i].title}
                          onChange={(e) =>
                            setDataPoint({
                              ...dataPoint,
                              [i]: { ...dataPoint[i], title: e.target.value },
                            })
                          }
                        />
                      </div>
                      <div className="d-flex">
                        <div
                          className="font-24 mt-4"
                          style={{ width: "33%" }}
                        ></div>
                        <textarea
                          type="text-area"
                          className="form-control shadow-none mt-2 border-0"
                          style={{ minHeight: 150 }}
                          value={dataPoint[i].purpose}
                          onChange={(e) =>
                            setDataPoint({
                              ...dataPoint,
                              [i]: { ...dataPoint[i],purpose: e.target.value },
                            })
                          }
                        />
                      </div>
                    </div>
                  </>
                )
              })}
            </>
          </>
          <div className="d-flex justify-content-end">
            <div
              className="btn btn-dark mt-4"
              onClick={() => handleEditKonkoin(dataKonkoin, dataPoint)}
            >
              Update
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}
