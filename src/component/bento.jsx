import imgBackgroundPink from "../asset/backgorundPink.svg"
import imgHandphone from "../asset/handphone.svg"
import imgLogoText from "../asset/logoKonkoinText.svg"
import imgAppstore from "../asset/appstore.svg"
import img1 from "../asset/1.png"
import img2 from "../asset/2.png"
import img3 from "../asset/3.png"

const APP_STORE_URL = "https://apps.apple.com/id/app/konkoin/id6618158091"

export default function Bento({ width }) {
  const isMobile = width <= 540

  return (
    <>
      <div
        className="container"
        style={{ marginTop: isMobile ? -80 : -100 }}
      >
        <div className="row m-0">
          <div
            className="col"
            style={{
              backgroundImage: `url(${imgBackgroundPink})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: 25,
              overflow: "hidden",
            }}
          >
            <div className="row align-items-center">
              <div className="col-6 d-flex justify-content-center">
                <img
                  src={imgHandphone}
                  className="img-fluid"
                  style={{
                    width: isMobile ? "100%" : "75%",
                    marginTop: isMobile ? 12 : 50,
                  }}
                  alt="Konkoin app"
                />
              </div>
              <div className="col-6 d-flex flex-column align-items-center justify-content-center text-center py-3 py-md-4">
                <img
                  src={imgLogoText}
                  className="img-fluid"
                  style={{
                    width: isMobile ? "88%" : "72%",
                    maxWidth: 320,
                  }}
                  alt="Konkoin"
                />
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 mt-md-4 d-inline-block"
                  aria-label="Download Konkoin on the App Store"
                >
                  <img
                    src={imgAppstore}
                    style={{
                      width: isMobile ? 120 : 160,
                      maxWidth: "100%",
                    }}
                    alt="Download on the App Store"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="row"
          style={{
            marginTop: isMobile ? 12 : 20,
            marginLeft: isMobile ? -8 : -12,
            marginRight: isMobile ? -8 : -12,
          }}
        >
          {[
            { src: img1, alt: "Karya Anak Bangsa" },
            { src: img2, alt: "Potensi transaksi kripto olahraga" },
            { src: img3, alt: "Pilihannya berubah atau punah" },
          ].map((item, index) => (
            <div
              key={item.alt}
              className={isMobile && index < 2 ? "col-6" : isMobile ? "col-12" : "col-md-4"}
              style={{
                paddingLeft: isMobile ? 8 : 12,
                paddingRight: isMobile ? 8 : 12,
                marginTop: isMobile && index === 2 ? 12 : 0,
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="img-fluid w-100"
                style={{
                  borderRadius: 25,
                  display: "block",
                  ...(isMobile && index === 2
                    ? { objectFit: "cover", maxHeight: 200 }
                    : {}),
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
