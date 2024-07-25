import {
  Home02Icon,
  InfoCircleIcon,
  Map01Icon,
  Ticket01Icon,
} from "@untitled-theme/icons-react"

import imgLogoKonkoin from "../asset/logo-konkoin.svg"

export default function BottomNavbar() {
  return (
    <>
      <div
        className="pb-2 bg-koni-secondary "
        style={{
          height: 78,
          width: "100vw",
          borderTop: "1.5px solid rgba(128, 128, 128, 0.25)",
          position: "fixed",
          bottom: 0,
        }}
      >
        <div className="d-flex align-items-center justify-content-evenly h-100">
          {/* HOME */}

          <div
            style={{ width: "20%" }}
            className="h-100 d-flex align-items-center"
          >
            <a
              className="d-flex justify-content-center align-items-center w-100 text-bottom-navbar"
              style={{ flexDirection: "column", textDecoration : "none" }}
              
              href="#home"
            >
              <div
                className="mx-auto d-block img-fluid mt-1"
                style={{ height: "0.75cm" }}
              >
                <Home02Icon />
              </div>
              <div className=" font-12 mt-2 fw-bold">Home</div>
            </a>
          </div>

          <div
            style={{ width: "20%" }}
            className="h-100 d-flex align-items-center"
          >
            <a
              className="d-flex justify-content-center align-items-center w-100 text-bottom-navbar"
              style={{ flexDirection: "column", textDecoration : "none" }}
              href="#about"
            >
              <div
                className="mx-auto d-block img-fluid mt-1"
                style={{ height: "0.75cm" }}
              >
                <InfoCircleIcon />
              </div>
              <div className=" font-12 mt-1 fw-bold mt-2">About</div>
            </a>
          </div>
          <div
            style={{ marginTop: -40, width: "20%" }}
            className="h-100 d-flex align-items-center"
          >
            <a
              className="d-flex justify-content-center align-items-center w-100"
              style={{ flexDirection: "column" }}
              href="#home"
            >
              <img
                src={imgLogoKonkoin}
                alt=""
                className="mx-auto d-block img-fluid mt-1"
                style={{ height: "1.6cm" }}
              />
            </a>
          </div>

          <div
            style={{ width: "20%" }}
            className="h-100 d-flex align-items-center"
          >
            <a
              className="d-flex justify-content-center align-items-center w-100 text-bottom-navbar"
              style={{ flexDirection: "column", textDecoration : "none" }}
              href="#roadmap"
            >
              <div
                className="mx-auto d-block img-fluid mt-1 "
                style={{ height: "0.75cm" }}
              >
                <Map01Icon />
              </div>
              <div className=" font-12 mt-1 fw-bold mt-2">Roadmap</div>
            </a>
          </div>

          <div
            style={{ width: "20%" }}
            className="h-100 d-flex align-items-center"
          >
            <a
              className="d-flex justify-content-center align-items-center w-100 text-bottom-navbar"
              style={{ flexDirection: "column", textDecoration : "none" }}
              href="#presale"
            >
              <div
                className="mx-auto d-block img-fluid mt-1 "
                style={{ height: "0.75cm" }}
              >
                <Ticket01Icon />
              </div>
              <div className=" font-12 mt-1 fw-bold mt-2">Presale</div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
