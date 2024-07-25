import { PieChart } from "react-minimal-pie-chart"
import imgPieChart from "../asset/pie-chart.svg"

import imgKeuntungan1 from "../asset/keuntungan-3.svg"
import imgKeuntungan2 from "../asset/keuntungan-2.svg"
import imgKeuntungan3 from "../asset/keuntungan-1.svg"
import imgKeuntungan4 from "../asset/keuntungan-4.svg"

export default function Takeonomic({ width }) {
  const dataPieChart = [
    { title: "One", value: 30, color: "#9747ff" },
    { title: "Two", value: 15, color: "#FFFFFF" },
    { title: "Three", value: 30, color: "#d91f2d" },
    { title: "Three", value: 20, color: "#252525" },
  ]
  return (
    <>
      <div
        className="container font-inter text-white"
        style={{ marginTop: width <= 540 ? 200 : 300 }}
      >
        {width <= 540 ? (
          <div
            className=" text-center px-5"
            style={{ fontWeight: 500, fontSize: 35 , lineHeight : 1.2}}
          >
            Keuntungan Memiliki <strong>Konkoin</strong>
          </div>
        ) : (
          ""
        )}
        <div className="row">
          <div className="col-sm-6" style={{ height: "100%" }}>
            {/* <PieChart
              data={dataPieChart}
              lineWidth={52.5}
              animate={true}
              rounded={false}
              startAngle={-30}
              labelPosition={110}
              lengthAngle={360}
              paddingAngle={1}
              background=""
              radius={35}
              style={{ color: "white" }}
              labelStyle={{ fontSize: 3, fontWeight: "bold", whiteSpace: "" }}
            /> */}
            <img
              src={imgPieChart}
              className="img-fluid p-5"
              alt=""
              style={{ marginTop: width <= 540 ? 0 : 100 }}
            />
          </div>

          <div className="col-sm-6">
            {width <= 540 ? (
              ""
            ) : (
              <div className="" style={{ fontSize: 55, fontWeight : 400, lineHeight : 1.2 }}>
                Keuntungan Memiliki Konkoin
              </div>
            )}

            <div
              className={
                width <= 540 ? " h-100 font-inter" : "h-100 font-inter mt-5"
              }
            >
              <div>
                <img
                  src={imgKeuntungan1}
                  className="img-fluid mt-3"
                  style={{ borderRadius: 25 }}
                  alt=""
                />
                <img
                  src={imgKeuntungan2}
                  className="img-fluid mt-3"
                  style={{ borderRadius: 25 }}
                  alt=""
                />
                <img
                  src={imgKeuntungan3}
                  className="img-fluid mt-3"
                  style={{ borderRadius: 25 }}
                  alt=""
                />
                <img
                  src={imgKeuntungan4}
                  className="img-fluid mt-3"
                  style={{ borderRadius: 25 }}
                  alt=""
                />
              </div>

              {/* <div>
                <div
                  className="card py-3 px-4 border-0 text-white"
                  style={{
                    borderRadius: 20,
                    backgroundColor: "rgb(37, 37, 37,0.6)",
                  }}
                >
                  <div className="row">
                    <div className="col-2">
                      <div className="h-100 d-flex justify-content-center align-items-center">
                        <div className="font-40">01</div>
                      </div>
                    </div>
                    <div className="col">
                      <p className="mb-0 fs-18 fw-bold">Investasi</p>
                      <p className="mb-0 fs-14 mt-3">
                        Keuntungan Monetisasi di masa depan & Mampu membiayai
                        aktivitas Komite
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="card py-3 px-4 border-0 mt-3 text-white"
                  style={{
                    borderRadius: 20,
                    backgroundColor: "rgb(217, 31, 45,0.6)",
                  }}
                >
                  <div className="row">
                    <div className="col-2">
                      <div className="h-100 d-flex justify-content-center align-items-center">
                        <div className="font-40">02</div>
                      </div>
                    </div>
                    <div className="col">
                      <p className="mb-0 fs-18 fw-bold">
                        Media Transaksi yang Aman dan Kredibel
                      </p>
                      <p className="mb-0 fs-14 mt-3">
                        Memiliki Lisensi Bappebti & Transaksi cepat dan efisien
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="card py-3 px-4 border-0 mt-3 text-white"
                  style={{
                    borderRadius: 20,
                    backgroundColor: "rgb(151, 71, 255, 0.6)",
                  }}
                >
                  <div className="row">
                    <div className="col-2">
                      <div className="h-100 d-flex justify-content-center align-items-center">
                        <div className="font-40">03</div>
                      </div>
                    </div>
                    <div className="col">
                      <p className="mb-0 fs-18 fw-bold">
                        Perlindungan Maksimal{" "}
                      </p>
                      <p className="mb-0 fs-14 mt-1">
                        Semua aset kripto dan fiat dilindungi oleh keamanan yang
                        terpercaya
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="card py-3 px-4 border-0 mt-3"
                  style={{
                    borderRadius: 20,
                    backgroundColor: "rgb(255, 255, 255,0.6)",
                  }}
                >
                  <div className="row">
                    <div className="col-2">
                      <div className="h-100 d-flex justify-content-center align-items-center">
                        <div className="font-40">04</div>
                      </div>
                    </div>
                    <div className="col">
                      <p className="mb-0 fs-18 fw-bold">
                        Kelola Portofolio Anda
                      </p>
                      <p className="mb-0 fs-14 mt-1">
                        Beli dan jual aset kripto pilihan kamu lalu pantau
                        dengan mudah dan nyaman
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
