export default function CMSBanner({ width }) {
  return (
    <>
      <div className="container mt-4 font-montserrat">
        <div className="row text-white pb-5">
          <div className="col-12 col-lg-9">
            <div
              className="fw-bold text-montserrat"
              style={{
                fontSize: width <= 540 ? 30 : width <= 760 ? 40 : 50,
                marginTop: 200,
              }}
            >
              {width <= 540 ? (
                <div> MATA UANG DIGITAL UNTUK KEMAJUAN OLAH RAGA INDONESIA</div>
              ) : (
                <>
                <div> MATA UANG DIGITAL UNTUK </div>
                <div> KEMAJUAN OLAH RAGA INDONESIA </div>
                </>
              )}
            </div>
            <div className="mt-4 pb-4 pe-5 font-30 fw-bold">
              Koin Kripto Olahraga Pertama di Indonesia
            </div>
            <div className="mt-5 d-flex w-100">
              <div
                className={
                  width <= 540
                    ? "btn me-3 py-3 text-white fw-bold w-100"
                    : "btn me-3 py-3 px-5 text-white fw-bold"
                }
                style={{ backgroundColor: "#252525", borderRadius: 25 }}
              >
                About
              </div>
              <div
                className={
                  width <= 540
                    ? "btn me-3 py-3 text-white fw-bold w-100"
                    : "btn me-3 py-3 px-5 text-white fw-bold"
                }
                style={{ backgroundColor: "#d91f2d", borderRadius: 25 }}
              >
                Buy Now!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
