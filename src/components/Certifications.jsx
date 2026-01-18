import { useState } from "react";

export default function Certifications() {
  const [activeImg, setActiveImg] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const certificates = [
    {
      title: "Hackathon 8.0",
      issuer: "COER University",
      date: "October 2024",
      img: "/certificates/Hackathon 8.0.jpg",
      desc:
        "Participated in Hackathon 8.0 showcasing rapid problem solving and full-stack development skills.",
      live: "#",
      github: "#",
    },

    // 👉 add more certificates here
  ];

  const visibleCertificates = showAll
    ? certificates
    : certificates.slice(0, 6);

  return (
    <section
      id="certification"
      className="py-28 px-[8%] bg-[radial-gradient(circle_at_top,_#0f172a,_#020617)] text-white"
    >
      {/* TITLE */}
      <h2 className="text-center text-5xl font-semibold mb-4">
        My <span className="text-cyan-400">Certifications</span>
      </h2>

      <p className="text-center text-gray-400 mb-16">
        Verified proof of my technical skills.
      </p>

      {/* GRID → 3 CARDS PER ROW */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {visibleCertificates.map((c, i) => (
          <div
            key={i}
            className="
              relative bg-white/5 backdrop-blur-xl border border-white/10
              rounded-xl p-5
              transition transform duration-300
              hover:-translate-y-1.5
              hover:shadow-[0_0_40px_rgba(0,253,220,0.25)]

              before:content-['']
              before:absolute before:inset-0
              before:bg-[radial-gradient(circle_at_top,_rgba(0,253,220,0.18),_transparent_70%)]
              before:opacity-0
              before:transition-opacity before:duration-300
              hover:before:opacity-100
            "
          >
            {/* HEADER */}
            <div className="flex items-start justify-between mb-3 relative z-10">
              <div>
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="text-sm text-gray-400">{c.issuer}</p>
              </div>
              <span className="text-xs text-purple-600 whitespace-nowrap">
                {c.date}
              </span>
            </div>

            {/* IMAGE */}
            <div className="relative z-10 rounded-lg overflow-hidden border border-white/10 mb-4">
              <img
                src={c.img}
                alt={c.title}
                className="w-full h-32 object-cover"
              />
            </div>

            {/* VIEW CERTIFICATE */}
            <button
              onClick={() => setActiveImg(c.img)}
              className="relative z-10 mx-auto mb-3 px-4 py-1.5 text-xs rounded-full
                         bg-gradient-to-br from-cyan-400 to-purple-600 text-slate-950
                         hover:bg-cyan-400 hover:text-black transition block"
            >
              View Certificate
            </button>

            {/* DESCRIPTION */}
            <p className="relative z-10 text-gray-300 text-sm text-center mb-4 line-clamp-2">
              {c.desc}
            </p>

            {/* ACTION BUTTONS */}
            <div className="relative z-10 flex justify-center gap-3">
              {c.live && (
                <a
                  href={c.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 text-sm rounded-full
                             bg-gradient-to-br from-cyan-400 to-purple-600 text-slate-950
                             hover:bg-cyan-400 hover:text-black transition"
                >
                  Live Demo
                </a>
              )}

              {c.github && (
                <a
                  href={c.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 text-sm rounded-full
                             bg-gradient-to-br from-cyan-400 to-purple-600 text-slate-950
                             hover:bg-cyan-400 hover:text-black transition"
                >
                  GitHub Repo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* VIEW MORE */}
      {certificates.length > 6 && (
        <div className="text-center mt-14">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 rounded-full
                       bg-gradient-to-r from-cyan-400 to-purple-500
                       text-black font-semibold
                       hover:scale-105 transition"
          >
            {showAll ? "Show Less" : "View More"}
          </button>
        </div>
      )}

      {/* MODAL */}
      {activeImg && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md
                     flex items-center justify-center z-50"
          onClick={() => setActiveImg(null)}
        >
          <span className="absolute top-6 right-8 text-3xl cursor-pointer">
            ✕
          </span>
          <img
            src={activeImg}
            alt="Certificate"
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-xl"
          />
        </div>
      )}
    </section>
  );
}
