import Marquee from "react-fast-marquee"

import logoLiputan6 from "../asset/media/liputan6.svg"
import logoAntara from "../asset/media/antaranews.svg"
import logoInews from "../asset/media/inews.svg"
import logoTribun from "../asset/media/tribunnews.svg"
import logoTvone from "../asset/media/tvone.svg"
import logoKompas from "../asset/media/kompas.svg"

const MEDIA_PARTNERS = [
  { name: "Liputan6", logo: logoLiputan6, href: "https://www.liputan6.com/tag/konkoin" },
  { name: "ANTARA", logo: logoAntara, href: "https://www.antaranews.com/berita/4234803/koni-gandeng-pengembang-kripto-majukan-industri-olahraga" },
  { name: "iNews", logo: logoInews, href: "https://www.inews.id/sport/all-sport/token-olahraga-konkoin-dibuka-presale-begini-cara-belinya" },
  { name: "Tribunnews", logo: logoTribun, href: "https://www.tribunnews.com/sport/2024/08/03/dukung-sport-industry-lewat-aset-digital-koni-edukasi-para-atlet-hingga-komunitas-olahraga" },
  { name: "tvOne", logo: logoTvone, href: "https://www.tvonenews.com/berita/nasional/233129-aset-kripto-baru-tema-olahraga-marciano-norman-soroti-kesejahteraan-atlet-indonesia" },
  { name: "Kompas", logo: logoKompas, href: "https://www.kompas.com" },
]

export default function MediaPartner({ width }) {
  const isMobile = width <= 540
  const logoStyle = {
    height: isMobile ? 36 : 48,
    width: "auto",
    maxWidth: isMobile ? 150 : 200,
    objectFit: "contain",
  }

  const items = [...MEDIA_PARTNERS, ...MEDIA_PARTNERS]

  return (
    <>
      <div
        className="container"
        style={{ marginTop: isMobile ? 64 : 180, overflow: "hidden" }}
      >
        <div
          className="text-center text-white fw-bold mb-4 mb-md-5"
          style={{ fontSize: isMobile ? 22 : 30 }}
        >
          Media Partner
        </div>

        <Marquee pauseOnHover={true} gradient={false} style={{ zIndex: 0 }}>
          {items.map((partner, index) => (
            <a
              key={`${partner.name}-${index}`}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="d-inline-flex align-items-center justify-content-center mx-4 mx-md-5"
              style={{
                height: isMobile ? 56 : 72,
                padding: isMobile ? "8px 14px" : "10px 18px",
                borderRadius: 12,
                background: "rgba(255,255,255,0.06)",
                textDecoration: "none",
              }}
              title={partner.name}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                style={logoStyle}
              />
            </a>
          ))}
        </Marquee>
      </div>
    </>
  )
}
