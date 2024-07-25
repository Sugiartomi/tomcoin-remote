import { useNavigate } from "react-router"
import Navbar from "../component/navbar"

// Image

import imgBackgroung1 from "../asset/banner-moon-3.svg"

import imgLogoKonkoin from "../asset/logoNavbar.svg"

import imgBackgroundEarth from "../asset/banner-earth.svg"
import Banner from "../component/banner"
import Countdown from "../component/countdown"
import Konkoin from "../component/konkoin"
import Roadmap from "../component/roadmap"
import Takeonomic from "../component/takeonomic"
import Bento from "../component/bento"
import { useEffect, useState } from "react"
import News from "../component/news"
import MediaPartner from "../component/media"
import BottomNavbar from "../component/bottom-navbar"

export default function LandingPage() {
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

  return (
    <>
      <div className="" id="home">
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(37,37,37,0), #080808),url(${imgBackgroung1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: 1000,
            marginTop: -30,
          }}
        >
          <Navbar />
          <Banner width={width} />
          <Countdown width={width} />
        </div>
        <div id="about">
          <Konkoin width={width} />
        </div>
        <div id="roadmap">
          <Roadmap width={width} />
        </div>

        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(37,37,37,0), #080808),url(${imgBackgroundEarth})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: width <= 540 ? "top" : "",
            height: 1200,
          }}
        >
          <Takeonomic width={width} />
        </div>

        <div id="presale">
          <Bento width={width} />
        </div>

        <News width={width} />

        <MediaPartner width={width} />

        <div
          className="container"
          style={{ marginTop: 100, paddingBottom: width <= 540 ? 0 : 150 }}
        ></div>

        <div
          className="bg-koni-danger"
          style={{ height: 80, marginBottom: width <= 992? 78 : 0 }}
        >
          <div
            className={
              width <= 540
                ? "container text-center h-100"
                : "container d-flex align-items-center h-100 justify-content-between"
            }
          >
            <img
              src={imgLogoKonkoin}
              className="img-fluid"
              style={{ width: 200 }}
              alt=""
            />
            <div className="text-white">Konkoin © 2024. All Right reserved</div>
          </div>
        </div>
      </div>
      { width <= 992?  <BottomNavbar /> : ""}
     
    </>
  )
}
