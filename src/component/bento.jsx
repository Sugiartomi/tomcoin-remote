// Update
import imgBackgroundPink from "../asset/backgorundPink.svg"
import imgHandphone from "../asset/handphone.svg"
import imgLogoText from "../asset/logoKonkoinText.svg"
import imgAppstore from "../asset/appstore.svg"
import imgGooglePlay from "../asset/google-play.svg"
import img1 from "../asset/1.png"
import img2 from "../asset/2.png"
import img3 from "../asset/3.png"

export default function Bento({ width }) {
  return (
    <>
      <div
        className="container"
        style={{ marginTop: width <= 540 ? -200 : -100 }}
      >
        <div className="row p-0 m-0">
          <div
            className="col"
            style={{
              backgroundImage: `url(${imgBackgroundPink})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: 25,
            }}
          >
            <div className="row">
              <div className="col-6 d-flex justify-content-center">
                <img
                  src={imgHandphone}
                  className="img-fluid"
                  style={{ width: width <= 540 ? "100%": "75%", marginTop: width <= 540 ? 0 : 50 }}
                  alt=""
                />
              </div>
              <div className="col-6">
                <div className="h-75 d-flex justify-content-start align-items-center">
                  <img
                    src={imgLogoText}
                    className={width <= 540 ? "w-100" : "w-100"}
                    style={
                      width <= 540
                        ? { marginTop: 10, marginLeft: -35 }
                        : { marginTop: "10%", marginLeft : "-15%" }
                    }
                    alt=""
                  />
                </div>
                <div
                  className="h-25"
                  style={
                    width <= 540 ? { marginLeft: "-20%", marginTop: "-5%" } : {}
                  }
                >
                  <img
                    src={imgAppstore}
                    className="me-3"
                    style={{ width: width <= 540 ? "45%" : "38%" }}
                    alt=""
                  />
                  <img
                    src={imgGooglePlay}
                    style={{ width: width <= 540 ? "45%" : "38%" }}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row p-0 m-0  mt-3">
          <div
            className={width <= 540 ? "col-6 p-0 pe-2" : "col-sm-4 col-12 ps-0"}
          >
            <img
              src={img1}
              alt=""
              className="img-fluid"
              style={{ borderRadius: 25 }}
            />
          </div>
          <div
            className={width <= 540 ? "col-6 p-0 ps-2" : "col-sm-4 col-12 p-0"}
          >
            <img
              src={img2}
              alt=""
              className="img-fluid"
              style={{ borderRadius: 25 }}
            />
          </div>
          <div
            className={
              width <= 540 ? "col-sm-4 col-12 p-0 mt-3" : "col-sm-4 col-12 pe-0"
            }
          >
            <img
              src={img3}
              alt=""
              className="img-fluid"
              style={width <= 540 ? { borderRadius: 25, objectFit : "cover", maxHeight : 189.59, width : "100%" } : { borderRadius: 25}}
            />
          </div>
        </div>
      </div>
    </>
  )
}
