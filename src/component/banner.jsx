import axios from "axios"
import { useEffect, useState } from "react"
import { baseurl } from "../config/http"

export default function Banner({ width }) {


  return (
    <>
   
        <div className="container mt-4 font-inter">
          <div className="row text-white pb-5">
            <div className="col-12">
              <div
                className={
                  width <= 540 ? " text-inter text-center" : " text-inter"
                }
                style={{
                  fontSize: width <= 540 ? 35 : width <= 760 ? 50 : 80,
                  marginTop: 200,
                  fontWeight: 500,
                  lineHeight: 1.15,
                }}
              >
                <div>Asset Digital Untuk
                Kemajuan Olah Raga Indonesia</div>
              </div>
              <div
                className={
                  width <= 540
                    ? "mt-4 text-center font-14"
                    : "mt-4 pb-4 pe-5 font-30"
                }
              >
              Koin Kripto Olahraga Pertama di Indonesia!
              </div>
              <div className="mt-5 d-flex w-100">
                <div
                  className={
                    width <= 540
                      ? "btn ms-3 me-2 text-white w-100"
                      : "btn me-4 px-4 text-white"
                  }
                  style={{
                    backgroundColor: "#252525",
                    borderRadius: 25,
                    width: width < 540 ? "" : 160,
                    fontWeight: 500,
                    fontSize: 18,
                    height: 45,
                  }}
                >
                  About
                </div>
                <div
                  className={
                    width <= 540
                      ? "btn me-3 text-white w-100"
                      : "btn me-4 px-4 text-white"
                  }
                  style={{
                    backgroundColor: "#d91f2d",
                    borderRadius: 25,
                    width: width < 540 ? "" : 160,
                    fontWeight: 500,
                    fontSize: 18,
                    height: 45,
                  }}
                >
                  Buy Now!
                </div>
              </div>
            </div>
          </div>
        </div>
   
    </>
  )
}
