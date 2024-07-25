import imgLogoKonkoin2 from "../asset/logo-konkoin2.svg"
export default function Konkoin({ width }) {
  return (
    <>
      <div
        className="container-fluid"
        style={{ backgroundImage: "", marginTop: width <= 540 ? -180 : 180 }}
      >
        <div className="container font-inter text-white">
          <div className="row p-0 m-0">
            <div className="col-sm-7 col-12 p-0 m-0">
              <div
                className=""
                style={{ fontSize: width <= 540 ? 35 : 60, fontWeight: 400 }}
              >
                {width <= 540 ? (
                  <>
                    <div className="d-flex justify-content-center align-items-center">
                      <img
                        src={imgLogoKonkoin2}
                        className="img-fluid"
                        alt=""
                        style={{ height: 55 }}
                      />
                    </div>
                    <div className="text-center mt-4">Apa itu Konkoin?</div>
                  </>
                ) : (
                  <>
                    <div>Apa itu Konkoin?</div>
                  </>
                )}
              </div>
              <div
                className={
                  width <= 540 ? "mt-4 font-14 text-center" : "mt-4 font-18"
                }
              >
                Melalui KONKOIN, setiap orang di mana pun berada, dapat
                berkontribusi langsung untuk mendukung olahraga di Tanah Air.
              </div>
            </div>
            {width <= 540 ? (
              ""
            ) : (
              <div className="col-5 d-flex justify-content-end align-items-center">
                <img
                  src={imgLogoKonkoin2}
                  className="img-fluid float-end"
                  alt=""
                  style={{ height: 80 }}
                />
              </div>
            )}
          </div>
          <div>
            <div
              className="bg-white opacity-25 mt-5"
              style={{ height: 2 }}
            ></div>
            <div className="row">
              <div className="col-sm-8">
                <div
                  className={
                    width <= 540
                      ? "d-flex p-4 justify-content-center align-items-start"
                      : "d-flex p-4 py-2"
                  }
                >
                  <div
                    className={
                      width < 540
                        ? "text-koni-danger font-22 me-3"
                        : "text-koni-danger font-22 mt-2 fw-bold me-5"
                    }
                  >
                    01
                  </div>
                  <div
                    className="text-white"
                    style={{ fontSize: width <= 540 ? 30 : 80 }}
                  >
                    Kontribusi
                  </div>
                </div>
              </div>
              <div
                className={
                  width <= 540
                    ? "col-12 p-4 pt-0 text-center font-14 mb-3"
                    : "col-4 p-4 text-end font-18"
                }
              >
                <strong>KONKOIN</strong> merupakan kontribusi{" "}
                <strong>PT CUAN</strong> terhadap olahraga di Indonesia
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white opacity-25" style={{ height: 2 }}></div>
            <div className="row">
              <div className="col-sm-8">
                <div
                  className={
                    width <= 540
                      ? "d-flex p-4 justify-content-center align-items-start"
                      : "d-flex p-4 py-2"
                  }
                >
                  <div
                    className={
                      width < 540
                        ? "text-koni-danger font-22 me-3"
                        : "text-koni-danger font-22 mt-2 fw-bold me-5"
                    }
                  >
                    02
                  </div>
                  <div
                    className="text-white"
                    style={{ fontSize: width <= 540 ? 30 : 80 }}
                  >
                    Olahraga
                  </div>
                </div>
              </div>
              <div
                className={
                  width <= 540
                    ? "col-12 p-4 pt-0 text-center font-14 mb-3"
                    : "col-4 p-4 text-end font-18"
                }
              >
                <strong>KONKOIN</strong> di support oleh beberapa stakeholder di
                dunia olahraga sehingga koin ini kredibel untuk di pasarkan.
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white opacity-25" style={{ height: 2 }}></div>
            <div className="row">
              <div className="col-sm-8">
                <div
                  className={
                    width <= 540
                      ? "d-flex p-4 justify-content-center align-items-start"
                      : "d-flex p-4 py-2"
                  }
                >
                  <div
                    className={
                      width < 540
                        ? "text-koni-danger font-22 me-3"
                        : "text-koni-danger font-22 mt-2 fw-bold me-5"
                    }
                  >
                    03
                  </div>
                  <div
                    className="text-white"
                    style={{ fontSize: width <= 540 ? 30 : 80 }}
                  >
                    Nasional
                  </div>
                </div>
              </div>
              <div
                className={
                  width <= 540
                    ? "col-12 p-4 pt-0 text-center font-14 mb-3"
                    : "col-4 p-4 text-end font-18"
                }
              >
                <strong>KONKOIN</strong> juga bangga menjadi pioneer dalam dunia
                crypto olahraga Indonesia yang bisa GO - Internasional
              </div>
            </div>
          </div>
          <div className="bg-white opacity-25" style={{ height: 2 }}></div>
        </div>
      </div>
    </>
  )
}
