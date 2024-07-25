export default function News({ width }) {
  return (
    <>
      <div
        className="container"
        style={{
          fontSize: width <= 540 ? 35 : width <= 760 ? 40 : 55,
          marginTop: width <= 540 ?100: 200,
          fontWeight : 400
        }}
      >
        <div className="d-flex justify-content-between align-items-center">

        <div className="text-white">Latest News</div>
        <div className="text-koni-danger" style={{ textDecoration : "underline", fontSize : width <= 5400 ? 16 :20}}>See All</div>
        </div>
      </div>
      <div className="container" style={{ marginTop:width <= 540 ? 10:  50 }}>
        <div
          className="scrollbar-none overflow-scroll"
          style={{ overflowY: "hidden" }}
        >
          <div style={{ width: "2500px" }}>
            <div
              className="card border-0 me-3"
              style={{
                width: 400,
                display: "inline-block",
                backgroundColor: "transparent",
              }}
            >
              <div
                className="bg-danger"
                style={{ height: 200, borderRadius: "25px 25px 0 0" }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFOrdFzhz5zYBtYCxqeXSJJj1QFyQdVMgwhw&s"
                  className="img-fluid h-100 w-100"
                  style={{
                    objectFit: "cover",
                    borderRadius: "25px 25px 0 0 ",
                  }}
                  alt=""
                />
              </div>
              <div
                className="bg-koni-secondary text-white"
                style={{ height: 180, borderRadius: "0 0 25px 25px " }}
              >
                <div className="p-4">
                  <div className="d-flex justify-content-between align-items-center ">
                    <div className="fw-bold font-20">News Title</div>
                    <div className="">10 Aug 2024</div>
                  </div>
                  <div className="d-flex justify-content-between align-items-end mt-3">
                    <div className="font-14">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Recusandae cumque, quisquam optio quibusdam quas earum
                      accusantium.
                    </div>
                    <div className="" style={{ textDecoration: "underline" }}>
                      read
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card border-0 me-3"
              style={{
                width: 400,
                display: "inline-block",
                backgroundColor: "transparent",
              }}
            >
              <div
                className="bg-danger"
                style={{ height: 200, borderRadius: "25px 25px 0 0" }}
              >
                <img
                  src="https://vcdn1-english.vnecdn.net/2023/10/10/eften-1696898975-1696898986-4219-1696899042.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=_DgbIC4MePUCDXWjs9-kJA"
                  className="img-fluid h-100 w-100"
                  style={{
                    objectFit: "cover",
                    borderRadius: "25px 25px 0 0 ",
                  }}
                  alt=""
                />
              </div>
              <div
                className="bg-koni-secondary text-white"
                style={{ height: 180, borderRadius: "0 0 25px 25px " }}
              >
                <div className="p-4">
                  <div className="d-flex justify-content-between align-items-center ">
                    <div className="fw-bold font-20">News Title</div>
                    <div className="">10 Aug 2024</div>
                  </div>
                  <div className="d-flex justify-content-between align-items-end mt-3">
                    <div className="font-14">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Recusandae cumque, quisquam optio quibusdam quas earum
                      accusantium.
                    </div>
                    <div className="" style={{ textDecoration: "underline" }}>
                      read
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card border-0 me-3"
              style={{
                width: 400,
                display: "inline-block",
                backgroundColor: "transparent",
              }}
            >
              <div
                className="bg-danger"
                style={{ height: 200, borderRadius: "25px 25px 0 0" }}
              >
                <img
                  src="https://awsimages.detik.net.id/community/media/visual/2021/03/19/dadang-subur-dewa-kipas-1_169.jpeg?w=1200"
                  className="img-fluid h-100 w-100"
                  style={{
                    objectFit: "cover",
                    borderRadius: "25px 25px 0 0 ",
                  }}
                  alt=""
                />
              </div>
              <div
                className="bg-koni-secondary text-white"
                style={{ height: 180, borderRadius: "0 0 25px 25px " }}
              >
                <div className="p-4">
                  <div className="d-flex justify-content-between align-items-center ">
                    <div className="fw-bold font-20">News Title</div>
                    <div className="">10 Aug 2024</div>
                  </div>
                  <div className="d-flex justify-content-between align-items-end mt-3">
                    <div className="font-14">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Recusandae cumque, quisquam optio quibusdam quas earum
                      accusantium.
                    </div>
                    <div className="" style={{ textDecoration: "underline" }}>
                      read
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card border-0 me-3"
              style={{
                width: 400,
                display: "inline-block",
                backgroundColor: "transparent",
              }}
            >
              <div
                className="bg-danger"
                style={{ height: 200, borderRadius: "25px 25px 0 0" }}
              >
                <img
                  src="https://imgx.gridoto.com/crop/66x0:666x458/700x465/photo/gridoto/2017/10/26/176815445.jpg"
                  className="img-fluid h-100 w-100"
                  style={{
                    objectFit: "cover",
                    borderRadius: "25px 25px 0 0 ",
                  }}
                  alt=""
                />
              </div>
              <div
                className="bg-koni-secondary text-white"
                style={{ height: 180, borderRadius: "0 0 25px 25px " }}
              >
                <div className="p-4">
                  <div className="d-flex justify-content-between align-items-center ">
                    <div className="fw-bold font-20">News Title</div>
                    <div className="">10 Aug 2024</div>
                  </div>
                  <div className="d-flex justify-content-between align-items-end mt-3">
                    <div className="font-14">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Recusandae cumque, quisquam optio quibusdam quas earum
                      accusantium.
                    </div>
                    <div className="" style={{ textDecoration: "underline" }}>
                      read
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card border-0 me-3"
              style={{
                width: 400,
                display: "inline-block",
                backgroundColor: "transparent",
              }}
            >
              <div
                className="bg-danger"
                style={{ height: 200, borderRadius: "25px 25px 0 0" }}
              >
                <img
                  src="https://awsimages.detik.net.id/visual/2024/04/22/timnas-indonesia-u-23-dok-pssi-3_169.png?w=650"
                  className="img-fluid h-100 w-100"
                  style={{
                    objectFit: "cover",
                    borderRadius: "25px 25px 0 0 ",
                  }}
                  alt=""
                />
              </div>
              <div
                className="bg-koni-secondary text-white"
                style={{ height: 180, borderRadius: "0 0 25px 25px " }}
              >
                <div className="p-4">
                  <div className="d-flex justify-content-between align-items-center ">
                    <div className="fw-bold font-20">News Title</div>
                    <div className="">10 Aug 2024</div>
                  </div>
                  <div className="d-flex justify-content-between align-items-end mt-3">
                    <div className="font-14">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Recusandae cumque, quisquam optio quibusdam quas earum
                      accusantium.
                    </div>
                    <div className="" style={{ textDecoration: "underline" }}>
                      read
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
