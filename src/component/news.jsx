const NEWS_ITEMS = [
  {
    title: "Presale Konkoin Dibuka",
    date: "9 Aug 2024",
    excerpt:
      "Token olahraga pertama di Indonesia, KONKOIN, resmi membuka presale terbatas melalui website dan aplikasi.",
    image:
      "https://img.inews.id/media/600/files/inews_new/2024/08/09/konkoin.jpg",
    url: "https://www.inews.id/sport/all-sport/token-olahraga-konkoin-dibuka-presale-begini-cara-belinya",
  },
  {
    title: "Emas Pertama Veddriq",
    date: "9 Aug 2024",
    excerpt:
      "Veddriq Leonardo persembahkan emas pertama Indonesia di Olimpiade Paris lewat panjat tebing nomor speed putra.",
    image:
      "https://img.antaranews.com/cache/1200x800/2024/08/09/CjkinzN007014_20240809_CBMFN0A001.JPG",
    url: "https://www.antaranews.com/berita/4249319/veddriq-persembahkan-emas-pertama-indonesia-di-olimpiade-paris",
  },
  {
    title: "Dua Emas di Tanggal Cantik",
    date: "9 Aug 2024",
    excerpt:
      "Indonesia rebut dua emas Olimpiade Paris 2024 pada 8/8 lewat Veddriq Leonardo dan Rizki Juniansyah.",
    image:
      "https://akcdn.detik.net.id/visual/2024/08/09/olympics-2024-weightlifting-8_169.jpeg?w=1200",
    url: "https://www.cnnindonesia.com/olahraga/20240809085222-178-1131052/rebut-2-emas-olimpiade-indonesia-ciamik-di-tanggal-cantik",
  },
  {
    title: "Persija Menang 3-0",
    date: "10 Aug 2024",
    excerpt:
      "Hattrick Gustavo Almeida bawa Persija menang telak atas Barito Putera di pekan pertama BRI Liga 1 di JIS.",
    image:
      "https://cdn0-production-images-kly.akamaized.net/h1jlM7wRVSQxViatALdWNKM5bXY=/0x0:5162x2903/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4914522/original/092971100_1723298317-202408010AA_Persija_Jakarta_Vs_Barito_Putera-12.jpg",
    url: "https://www.bola.com/indonesia/read/5669612/hasil-bri-liga-1-persija-menang-telak-atas-barito-putera-hattrick-gustavo-almeida-bikin-jakmania-bersorak-terus-di-jis",
  },
  {
    title: "Tiga Medali Olimpiade",
    date: "11 Aug 2024",
    excerpt:
      "Indonesia resmi raih tiga medali di Olimpiade 2024: dua emas dan satu perunggu dari tiga cabang berbeda.",
    image:
      "https://akcdn.detik.net.id/visual/2024/08/09/rizki-juniansyah-rebut-emas-angkat-besi-olimpiade-2024-paris-1_169.jpeg?w=1200",
    url: "https://www.cnnindonesia.com/olahraga/20240811185206-178-1131793/indonesia-resmi-raih-tiga-medali-di-olimpiade-2024",
  },
]

export default function News({ width }) {
  const isMobile = width <= 540
  const cardWidth = isMobile ? 280 : 400

  return (
    <>
      <div
        className="container"
        style={{
          fontSize: isMobile ? 28 : width <= 760 ? 40 : 55,
          marginTop: isMobile ? 64 : 200,
          fontWeight: 400,
        }}
      >
        <div className="d-flex justify-content-between align-items-center gap-2">
          <div className="text-white">Latest News</div>
          <a
            href="https://www.cnnindonesia.com/olahraga"
            target="_blank"
            rel="noopener noreferrer"
            className="text-koni-danger text-nowrap"
            style={{
              textDecoration: "underline",
              fontSize: isMobile ? 14 : 20,
            }}
          >
            See All
          </a>
        </div>
      </div>
      <div className="container" style={{ marginTop: isMobile ? 16 : 50 }}>
        <div
          className="scrollbar-none overflow-scroll"
          style={{ overflowY: "hidden", WebkitOverflowScrolling: "touch" }}
        >
          <div style={{ width: "max-content", paddingBottom: 8 }}>
            {NEWS_ITEMS.map((item) => (
              <div
                key={item.url}
                className="card border-0 me-3"
                style={{
                  width: cardWidth,
                  display: "inline-block",
                  backgroundColor: "transparent",
                  verticalAlign: "top",
                }}
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div
                    style={{
                      height: isMobile ? 150 : 200,
                      borderRadius: "25px 25px 0 0",
                      overflow: "hidden",
                      backgroundColor: "#252525",
                    }}
                  >
                    <img
                      src={item.image}
                      className="img-fluid h-100 w-100"
                      style={{
                        objectFit: "cover",
                        borderRadius: "25px 25px 0 0",
                      }}
                      alt={item.title}
                    />
                  </div>
                </a>
                <div
                  className="bg-koni-secondary text-white"
                  style={{
                    minHeight: isMobile ? 150 : 180,
                    borderRadius: "0 0 25px 25px",
                  }}
                >
                  <div className="p-3 p-md-4">
                    <div className="d-flex justify-content-between align-items-start gap-2">
                      <div
                        className="fw-bold"
                        style={{ fontSize: isMobile ? 16 : 20, lineHeight: 1.25 }}
                      >
                        {item.title}
                      </div>
                      <div
                        className="text-nowrap"
                        style={{ fontSize: isMobile ? 12 : 14, opacity: 0.85 }}
                      >
                        {item.date}
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-end mt-3 gap-3">
                      <div style={{ fontSize: isMobile ? 12 : 14, lineHeight: 1.4 }}>
                        {item.excerpt}
                      </div>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-nowrap"
                        style={{ textDecoration: "underline" }}
                      >
                        read
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
