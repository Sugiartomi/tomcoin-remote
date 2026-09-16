import Navbar from "../component/navbar"

// Image

import imgBackgroung1 from "../asset/banner-moon-3.svg"

import imgLogoKonkoin from "../asset/logoNavbar.svg"

import imgBackgroundEarth from "../asset/banner-earth.svg"
import Banner from "../component/banner"
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
  const updateDimensions = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  const isMobile = width <= 540
  const isTablet = width <= 992

  return (
    <>
      <div className="" id="home">
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(37,37,37,0), #080808),url(${imgBackgroung1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            minHeight: isMobile ? 620 : isTablet ? 720 : 860,
            marginTop: -30,
            paddingBottom: isMobile ? 48 : 80,
          }}
        >
          <Navbar />
          <Banner width={width} />
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
            backgroundPosition: isMobile ? "top" : "center",
            minHeight: isMobile ? "auto" : 1200,
            paddingBottom: isMobile ? 40 : 0,
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
          style={{ marginTop: isMobile ? 48 : 100, paddingBottom: isMobile ? 24 : 150 }}
        ></div>

        <div
          className="bg-koni-danger"
          style={{
            minHeight: isMobile ? 110 : 80,
            marginBottom: isTablet ? 78 : 0,
            padding: isMobile ? "16px 0" : 0,
          }}
        >
          <div
            className={
              isMobile
                ? "container text-center d-flex flex-column align-items-center justify-content-center h-100 gap-2"
                : "container d-flex align-items-center h-100 justify-content-between"
            }
          >
            <img
              src={imgLogoKonkoin}
              className="img-fluid"
              style={{ width: isMobile ? 160 : 200 }}
              alt="Konkoin"
            />
            <div className="text-white" style={{ fontSize: isMobile ? 13 : 16 }}>
              Konkoin © 2024. All Right reserved
            </div>
          </div>
        </div>
      </div>
      {isTablet ? <BottomNavbar /> : null}
    </>
  )
}
