import imgLogoKonkoin2 from "../asset/logo-konkoin2.svg"
import imgRoadmap3 from "../asset/roadmap-imp-1.svg"
import imgRoadmap4 from "../asset/roadmap-imp-2.svg"
import imgRoadmap1 from "../asset/roadmap-imp-3.svg"
import imgRoadmap2 from "../asset/roadmap-imp-4.svg"

export default function Roadmap({ width }) {
  return (
    <>
      <div
        className="container font-inter text-white"
        style={{ marginTop: 200 }}
      >
        {width <= 540 ? (
          <>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src={imgLogoKonkoin2}
                className="img-fluid float-end"
                alt=""
                style={{ height: 55 }}
              />
            </div>
          
              <div className=" text-center p-0 mt-4">
                <div
                  className=""
                  style={{ fontSize: width <= 540 ? 35 : 55, fontWeight: 400 }}
                >
                  Roadmap Konkoin
                </div>
                <div className="mt-4">
                  <div>
                    <strong>KONKOIN</strong> Memiliki Lisensi Bappebti &
                    Transaksi cepat dan efisien
                  </div>
                </div>
              </div>
            
          </>
        ) : (
          <div className="row p-0 m-0">
            <div className="col-7 p-0 m-0">
              <div
                className=""
                style={{ fontSize: width <= 540 ? 35 : 55, fontWeight: 400 }}
              >
                Roadmap Konkoin
              </div>
              <div className={ width <= 540 ? "mt-4 font-14" : "mt-4"}>
                <div>
                  <strong>KONKOIN</strong> Memiliki Lisensi Bappebti & Transaksi
                  cepat dan efisien
                </div>
              </div>
            </div>
            <div className="col-5 d-flex justify-content-end align-items-center">
              <img
                src={imgLogoKonkoin2}
                className="img-fluid float-end"
                alt=""
                style={{ height: 80 }}
              />
            </div>
          </div>
        )}

        <div>
          <div className=" row mt-5">
            <div className="col-sm-6">
              <img
                src={imgRoadmap1}
                className="img-fluid roadmap"
                style={{ borderRadius: 25 }}
                alt=""
              />
            </div>
            <div className={width <= 540 ? "col-sm-6 mt-3" : "col-sm-6"}>
              <img
                src={imgRoadmap2}
                className="img-fluid roadmap"
                style={{ borderRadius: 25 }}
                alt=""
              />
            </div>
            <div className={ width <= 540 ? "col-sm-6 mt-3" : "col-sm-6 mt-4"}>
              <img
                src={imgRoadmap3}
                className="img-fluid roadmap"
                style={{ borderRadius: 25 }}
                alt=""
              />
            </div>
            <div className={ width <= 540 ? "col-sm-6 mt-3" : "col-sm-6 mt-4"}>
              <img
                src={imgRoadmap4}
                className="img-fluid roadmap"
                style={{ borderRadius: 25 }}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* <div>

       
        <div className="row p-0 m-0 mt-5">
          <div
            className={width <= 540 ? "col-12 mb-4" : "col-6 p-0 m-0 pe-3 pb-3"}
          >
            <div
              className=" bg-koni-danger"
              style={{ height: 180, borderRadius: 25 }}
            >
              <div className="d-flex h-100">
                <div
                  className=" h-100 d-flex align-items-end justify-content-center"
                  style={{ width: "33%", fontSize: 100, marginTop: 35 }}
                >
                  01
                </div>
                <div className="p-4" style={{ width: "66%" }}>
                Pre sale <strong>Sekarang</strong> - 21 Juli 2024
                </div>
              </div>
            </div>
          </div>
          <div
            className={width <= 540 ? "col-12 mb-4" : "col-6 p-0 m-0 ps-3 pb-3"}
          >
            <div
              className=" bg-koni-secondary"
              style={{ height: 180, borderRadius: 25 }}
            >
              <div className="d-flex h-100">
                <div
                  className=" h-100 d-flex align-items-end justify-content-center"
                  style={{ width: "33%", fontSize: 100, marginTop: 35 }}
                >
                  02
                </div>
                <div className="p-4" style={{ width: "66%" }}>
                Launching <strong>KONKOIN</strong> di Ibu Kota Nusantara – 21 Juli 2024
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row p-0 m-0">
          <div
            className={width <= 540 ? "col-12 mb-4" : "col-6 p-0 m-0 pe-3 pt-3"}
          >
            <div
              className=" bg-koni-secondary"
              style={{ height: 180, borderRadius: 25 }}
            >
              <div className="d-flex h-100">
                <div className="p-4" style={{ width: "66%" }}>
                Run with Influencer 10 kota. Juli - September
                </div>
                <div
                  className=" h-100 d-flex align-items-end justify-content-center"
                  style={{ width: "33%", fontSize: 100, marginTop: 35 }}
                >
                  03
                </div>
              </div>
            </div>
          </div>
          <div className={width <= 540 ? "col-12" : "col-6 p-0 m-0 ps-3 pt-3"}>
            <div
              className=" bg-koni-secondary"
              style={{ height: 180, borderRadius: 25 }}
            >
              <div className="d-flex h-100">
                <div className="p-4" style={{ width: "66%" }}>
                <strong>COINFEST</strong> 2024 Bali

                </div>
                <div
                  className=" h-100 d-flex align-items-end justify-content-center"
                  style={{ width: "33%", fontSize: 100, marginTop: 35 }}
                >
                  04
                </div>
              </div>
            </div>
          </div>
        </div>
        </div> */}
      </div>
    </>
  )
}
