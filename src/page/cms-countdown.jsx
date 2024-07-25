export default function CMSCountdown({ width }) {
  return (
    <>
      <div
        className="pb-5 d-flex justify-content-center py-4"
        style={{ marginTop: 100 }}
      >
        {width <= 540 ? (
          <div
            className=" text-white"
            style={{
              padding: "20px 30px 20px 30px",
              borderRadius: "25px",
              backgroundColor: "rgb(37, 37, 37, 0.25)",
            }}
          >
            <div className="text-center pb-4 font-20 fw-bold">Pre-sale War</div>
            <div className="d-flex">

            <div className="mx-3 text-koni-danger text-center">
              <div className=" p-2 font-18 rounded fw-bold">99</div>
              <div className="text-center mt-2">Days</div>
            </div>
            <div className="mx-3">
              <div className=" p-2 font-18 rounded fw-bold text-center">59</div>
              <div className="text-center mt-2">Hour</div>
            </div>
            <div className="mx-3">
              <div className=" p-2 font-18 rounded fw-bold text-center">21</div>
              <div className="text-center mt-2">Minutes</div>
            </div>
            <div className="mx-3">
              <div className=" p-2 font-18 rounded fw-bold text-center">03</div>
              <div className="text-center mt-2">Second</div>
            </div>
            </div>
          </div>
        ) : (
          <div
            className=" text-white"
            style={{
              padding: "40px 100px 40px 100px",
              borderRadius: "25px",
              backgroundColor: "rgb(37, 37, 37, 0.25)",
            }}
          >
            <div className="text-center pb-4 font-20 fw-bold">Pre-sale War</div>
            <div className="d-flex">
              <div className="mx-5 text-koni-danger text-center">
                <div className=" p-2 font-40 rounded fw-bold">99</div>
                <div className="text-center mt-2">Days</div>
              </div>
              <div className="mx-5 text-center">
                <div className=" p-2 font-40 rounded fw-bold">59</div>
                <div className="text-center mt-2">Hour</div>
              </div>
              <div className="mx-5 text-center">
                <div className=" p-2 font-40 rounded fw-bold">21</div>
                <div className="text-center mt-2">Minutes</div>
              </div>
              <div className="mx-5 text-center">
                <div className=" p-2 font-40 rounded fw-bold">03</div>
                <div className="text-center mt-2">Second</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
