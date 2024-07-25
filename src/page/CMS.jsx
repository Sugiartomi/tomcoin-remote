import React, { useEffect, useState } from "react"
import CMSBanner from "./cms-banner"
import CMSCountdown from "./cms-countdown"
import CMSKonkoin from "./cms-konkoin"
import CMSRoadmap from "./cms-roadmap"
import CMSBenefit from "./cms-benefit"
import CMSBento from "./cms-bento"
import CMSMedia from "./cms-media"

export default function CMS() {
  const InputFormData = ({ data }) => {
    return (
      <>
        <div className="font-24 mt-4">{data.name}</div>
        <input
          type={data.type}
          value={data.value}
          name={data.id}
          className="form-control shadow-none mt-2 border-0"
          onChange={data.func}
        />
      </>
    )
  }

  const dataDummy = {
    banner: {
      header: "Mata Uang Digital Untuk Kemajuan Olah Raga Indonesia",
      description: "Koin Kripto Olahraga Pertama di Indonesia!",
      button1: "About",
      button2: "Buy Now",
    },
    countDown: "dummy-date",
    konkoin: {
      header: "Apa itu Konkoin?",
      description:
        "Melalui KONKOIN, setiap orang di mana pun berada, dapat berkontribusi langsung untuk mendukung olahraga di Tanah Air.",
      point: [
        {
          title: "Kontribusi",
          purpose:
            "KONKOIN merupakan kontribusi PT CUAN terhadap olahraga di Indonesia",
        },
        {
          title: "Olahraga",
          purpose:
            "KONKOIN di support oleh beberapa stakeholder di dunia olahraga sehingga koin ini kredibel untuk di pasarkan.",
        },
        {
          title: "Nasional",
          purpose:
            "KONKOIN juga bangga menjadi pioneer dalam dunia crypto olahraga Indonesia yang bisa GO - Internasional",
        },
      ],
    },
    roadmap: {
      header: "Roadmap Konkoin",
      description:
        "KONKOIN Memiliki Lisensi Bappebti & Transaksi cepat dan efisien",
      asset: ["asd-1.svg", "asd-2.svg", "asd-3.svg", "asd-4.svg"],
    },
    benefit: {
      header: "Apa itu Konkoin?",
      point: [
        {
          title: "Kontribusi",
          purpose:
            "KONKOIN merupakan kontribusi PT CUAN terhadap olahraga di Indonesia",
        },
        {
          title: "Olahraga",
          purpose:
            "KONKOIN di support oleh beberapa stakeholder di dunia olahraga sehingga koin ini kredibel untuk di pasarkan.",
        },
        {
          title: "Nasional",
          purpose:
            "KONKOIN juga bangga menjadi pioneer dalam dunia crypto olahraga Indonesia yang bisa GO - Internasional",
        },
      ],
    },
    roadmap: {
      header: "Roadmap Konkoin",
      description:
        "KONKOIN Memiliki Lisensi Bappebti & Transaksi cepat dan efisien",
      asset: ["asd-1.svg", "asd-2.svg", "asd-3.svg", "asd-4.svg"],
    },
  }

  return (
    <>
      <div className="container  text-white" style={{ minHeight: "100vh" }}>
        <div className="fw-bold" style={{ fontSize: 60, marginTop: 50 }}>
          CMS - Konkoin
        </div>
        <div className="row" style={{ marginTop: 25, marginBottom : 100 }}>
          <div className="col-sm-6  px-3 mt-5">
            <CMSBanner />
            <CMSCountdown />
            <CMSRoadmap />
            <CMSBento/>
            <CMSMedia/>
          </div>

          <div className="col-sm-6  px-3 mt-5">
            <CMSKonkoin />
            <CMSBenefit />
          </div>
        </div>
      </div>
    </>
  )
}
