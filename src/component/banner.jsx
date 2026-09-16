export default function Banner({ width }) {
  const isMobile = width <= 540
  const isTablet = width <= 760

  return (
    <>
      <div className="container mt-4 font-inter">
        <div className="row text-white pb-4 pb-md-5">
          <div className="col-12">
            <div
              className={isMobile ? "text-inter text-center" : "text-inter"}
              style={{
                fontSize: isMobile ? 28 : isTablet ? 44 : 80,
                marginTop: isMobile ? 120 : 180,
                fontWeight: 500,
                lineHeight: 1.15,
                paddingLeft: isMobile ? 8 : 0,
                paddingRight: isMobile ? 8 : 0,
              }}
            >
              <div>
                Asset Digital Untuk Kemajuan Olah Raga Indonesia
              </div>
            </div>
            <div
              className={
                isMobile
                  ? "mt-3 text-center font-14 px-2"
                  : "mt-4 pb-4 pe-5 font-30"
              }
            >
              Koin Kripto Olahraga Pertama di Indonesia!
            </div>
            <div
              className={
                isMobile
                  ? "mt-4 d-flex w-100 px-2 gap-2"
                  : "mt-5 d-flex w-100"
              }
            >
              <a
                href="#about"
                className={
                  isMobile
                    ? "btn text-white w-100 d-flex align-items-center justify-content-center"
                    : "btn me-4 px-4 text-white d-flex align-items-center justify-content-center"
                }
                style={{
                  backgroundColor: "#252525",
                  borderRadius: 25,
                  width: isMobile ? undefined : 160,
                  fontWeight: 500,
                  fontSize: isMobile ? 15 : 18,
                  height: 45,
                  textDecoration: "none",
                }}
              >
                About
              </a>
              <a
                href="#presale"
                className={
                  isMobile
                    ? "btn text-white w-100 d-flex align-items-center justify-content-center"
                    : "btn me-4 px-4 text-white d-flex align-items-center justify-content-center"
                }
                style={{
                  backgroundColor: "#d91f2d",
                  borderRadius: 25,
                  width: isMobile ? undefined : 160,
                  fontWeight: 500,
                  fontSize: isMobile ? 15 : 18,
                  height: 45,
                  textDecoration: "none",
                }}
              >
                Buy Now!
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
