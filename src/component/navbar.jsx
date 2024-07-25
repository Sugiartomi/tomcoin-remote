import { useEffect, useRef, useState } from "react"
import { List } from "react-bootstrap-icons"

import imgLogoKonkoin from "../asset/logo-konkoin.svg"
import imgLogoNavbar from "../asset/logoNavbar.svg"

export default function Navbar() {
  //   const [innerWidth, setInnerWidth] = useState(window.innerWidth)

  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)
  const updateDimensions = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }
  useEffect(() => {
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  const [y, setY] = useState(0)

  const updateY = () => {
    setY(window.scrollY)
  }
  useEffect(() => {
    window.addEventListener("scroll", updateY)
    return () => window.removeEventListener("scroll", updateY)
  }, [])

  return (
    <>
      <nav
        className={
          width >992 ?
          y > 100
            ? "navbar navbar-expand-lg text-inter fixed-top navbar-2"
            : "navbar navbar-expand-lg text-inter fixed-top navbar-1" : "navbar navbar-expand-lg text-inter navbar-1"
        }
      >
        <div className="container my-2">
          <a className="navbar-brand" href="#">
            <div className="d-flex align-items-center">
              <img
                src={imgLogoNavbar}
                className="me-3"
                style={{ height: 50, margin : width <=992 ? "30px 0 -100px 30px" : "" }}
                alt=""
              />
            </div>
          </a>

          {width <= 992 ? (
            ""
          ) : (
            // <>
            //   <button
            //     className="border-0"
            //     type="button"
            //     data-bs-toggle="collapse"
            //     data-bs-target="#navbarNav"
            //     aria-controls="navbarNav"
            //     aria-expanded="false"
            //     aria-label="Toggle navigation"
            //     style={{
            //       color: "transparent",
            //       backgroundColor: "transparent",
            //       fontSize: 30,
            //     }}
            //   >
            //     <span className=" border-0 text-white">
            //       <List />
            //     </span>
            //   </button>
            //   <div
            //     className="collapse  navbar-collapse text-white mt-5"
            //     id="navbarNav"
            //   >
            //     <ul className="navbar-nav">
            //       <li className="nav-item">
            //         <a
            //           className="nav-link active  text-white"
            //           aria-current="page"
            //           href="#home"
            //         >
            //           HOME
            //         </a>
            //       </li>
            //       <li className="nav-item  mt-2 text-white">
            //         <a className="nav-link text-white" href="#about">
            //           ABOUT
            //         </a>
            //       </li>
            //       <li className="nav-item  mt-2">
            //         <a className="nav-link text-white" href="#roadmap">
            //           ROADMAP
            //         </a>
            //       </li>
            //       <li className="nav-item mt-2 mb-4">
            //         <a className="nav-link  text-white" href="#presale">
            //           PRE-SALE
            //         </a>
            //       </li>
            //     </ul>
            //   </div>
            // </>
            <div
              className="collapse  navbar-collapse d-flex justify-content-end text-white"
              id="navbarNav"
            >
              <ul className="navbar-nav text-white">
                <li className="nav-item">
                  <a
                    className="nav-link active text-white px-4"
                    aria-current="page"
                    href="#home"
                  >
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white px-4" href="#about">
                    ABOUT
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white px-4" href="#roadmap">
                    ROADMAP
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#presale">
                    PRESALE
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
