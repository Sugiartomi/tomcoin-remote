import Marquee from "react-fast-marquee"

import imgKonkoinGray from "../asset/konkoin-gray.svg"
export default function MediaPartner({ width }) {
  return (
    <>
    
      <div
        className="container"
        style={{ marginTop: width <= 540 ? 100 : 250 }}
      >
        <div className="font-30 text-center text-white fw-bold mb-5">
          Media Partner
        </div>
      
        <Marquee pauseOnHover={true} style={{ margin: "0 50px 0 50px", zIndex :0 }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Coop_logo.svg/800px-Coop_logo.svg.png" style={{ maxWidth: 250 }} className="img-fluid me-5" alt="" />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Kompas.svg/680px-Kompas.svg.png"
            style={{ maxWidth: 250 }}
            className="img-fluid me-5"
            alt=""
          />
          <img
            src="https://lh3.googleusercontent.com/proxy/4yBXRUo4kQTuJjWJGLI0jCimPNVpJLLHtD_X-8HPqg8pyjAXQIaycfiNrf7LyxBiUXGMD8DcvDjA9JwbSXsdJQuK"
            className="img-fluid me-5"
            style={{ maxWidth: 250 }}
            alt=""
          />
          <img
            src="https://zeevector.com/wp-content/uploads/Huawei-Logo-PNG-Colour@zeevector.com_.png"
            className="img-fluid me-5"
            style={{ maxWidth: 250 }}
            alt=""
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Kinsta_logo.png/1200px-Kinsta_logo.png"
            className="img-fluid me-5"
            style={{ maxWidth: 250 }}
            alt=""
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Celebrations_logo.svg/800px-Celebrations_logo.svg.png"
            className="img-fluid me-5"
            style={{ maxWidth: 250 }}
            alt=""
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/New_Firebase_logo.svg/749px-New_Firebase_logo.svg.png?20240515004533 "
            className="img-fluid me-5"
            style={{ maxWidth: 250 }}
            alt=""
          />
        </Marquee>
      </div>
    </>
  )
}
