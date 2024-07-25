import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { baseurl } from "../config/http"

export default function Countdown({ width }) {
  const [target, setTarget] = useState(new Date("2025-07-21 23:59").getTime())
  const [dataCountdown, setDataCountdown] = useState([])
  const [stop, setStop] = useState(false)
  const [ready, setReady] = useState(true)

  let now = new Date().getTime()
  let timeleft = target - now
  let days = Math.floor(timeleft / (1000 * 60 * 60 * 24))
  let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((timeleft % (1000 * 60)) / 1000)
  setTimeout(() => {
    setDataCountdown({
      days,
      hours,
      minutes,
      seconds,
    })
  }, 1000)

  useEffect(() => {
    setTimeout(() => {
      setTarget(target - 1)
    }, 1000)
  })

  return (
    <>
      {stop ? (
        ""
      ) : (
        <div
          className="pb-5 d-flex justify-content-center py-4"
          style={{ marginTop: width <= 540 ? 20 : 100 }}
        >
          {ready ? (
            width <= 540 ? (
              <div
                className=" text-white w-100 mx-4"
                style={{
                  padding: "20px 30px 20px 30px",
                  borderRadius: "25px",
                  backgroundColor: "rgb(37, 37, 37, 0.25)",
                }}
              >
                <div className="d-flex w-100">
                  <div
                    className=" text-koni-danger text-center"
                    style={{ width: "25%" }}
                  >
                    <div
                      className="rounded fw-bold"
                      style={{ fontSize: 25, fontWeight: 500 }}
                    >
                      {dataCountdown.days < 10
                        ? "0" + dataCountdown.days
                        : dataCountdown.days}
                    </div>
                    <div className="text-center ">Days</div>
                  </div>
                  <div className="" style={{ width: "25%" }}>
                    <div
                      className="fw-bold text-center"
                      style={{ fontSize: 25, fontWeight: 500 }}
                    >
                      {dataCountdown.hours < 10
                        ? "0" + dataCountdown.hours
                        : dataCountdown.hours}
                    </div>
                    <div className="text-center ">Hour</div>
                  </div>
                  <div className="" style={{ width: "25%" }}>
                    <div
                      className="fw-bold text-center"
                      style={{ fontSize: 25, fontWeight: 500 }}
                    >
                      {dataCountdown.minutes < 10
                        ? "0" + dataCountdown.minutes
                        : dataCountdown.minutes}
                    </div>
                    <div className="text-center ">Minutes</div>
                  </div>
                  <div className="" style={{ width: "25%" }}>
                    <div
                      className="fw-bold text-center"
                      style={{ fontSize: 25, fontWeight: 500 }}
                    >
                      {dataCountdown.seconds < 10
                        ? "0" + dataCountdown.seconds
                        : dataCountdown.seconds}
                    </div>
                    <div className="text-center ">Second</div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className=" text-white"
                style={{
                  padding: "20px 50px 20px 50px",
                  borderRadius: "25px",
                  backgroundColor: "rgb(37, 37, 37, 0.25)",
                }}
              >
                <div className="d-flex font-18  ">
                  <div className="mx-5 text-koni-danger text-center">
                    <div
                      className="rounded"
                      style={{ fontSize: 55, fontWeight: 500 }}
                    >
                      {dataCountdown.days < 10
                        ? "0" + dataCountdown.days
                        : dataCountdown.days}
                    </div>
                    <div className="text-center">Days</div>
                  </div>
                  <div className="mx-5 text-center">
                    <div
                      className="rounded"
                      style={{ fontSize: 55, fontWeight: 500 }}
                    >
                      {dataCountdown.hours < 10
                        ? "0" + dataCountdown.hours
                        : dataCountdown.hours}
                    </div>
                    <div className="text-center">Hour</div>
                  </div>
                  <div className="mx-5 text-center">
                    <div
                      className="rounded"
                      style={{ fontSize: 55, fontWeight: 500 }}
                    >
                      {dataCountdown.minutes < 10
                        ? "0" + dataCountdown.minutes
                        : dataCountdown.minutes}
                    </div>
                    <div className="text-center">Minutes</div>
                  </div>
                  <div className="mx-5 text-center">
                    <div
                      className="rounded"
                      style={{ fontSize: 55, fontWeight: 500 }}
                    >
                      {dataCountdown.seconds < 10
                        ? "0" + dataCountdown.seconds
                        : dataCountdown.seconds}
                    </div>
                    <div className="text-center">Second</div>
                  </div>
                </div>
              </div>
            )
          ) : (
            ""
          )}
        </div>
      )}
    </>
  )
}
