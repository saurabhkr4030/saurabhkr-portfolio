import { useState } from "react";
import { data } from "../data/data";
import { Briefcase, Code } from "lucide-react";

export default function Journey() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? data.projects
    : data.projects.slice(0, 6);

  return (
    <section
      id="projects"
      className="py-28 px-[8%] bg-[radial-gradient(circle_at_top,_#0f172a,_#020617)] text-white"
    >
      {/* TITLE */}
      <h2 className="text-center text-5xl font-semibold mb-4">
        Professional <span className="text-cyan-400">Journey</span>
      </h2>

      <p className="text-center text-gray-400 mb-16">
        A timeline of my professional growth, featuring meaningful experiences and projects that define my technical journey..
      </p>

      {/* EXPERIENCE */}
      <div className="mb-24">
        <div className="flex items-center gap-3 text-xl mb-8">
          <span className="w-1 h-7 bg-cyan-400 shadow-[0_0_15px_rgba(0,253,220,0.8)]" />
          <Briefcase className="text-cyan-400" size={22} />
          <h3>Journey</h3>
        </div>

        <div className="relative pl-12 border-l border-cyan-400/40">
          <span className="absolute -left-[9px] top-3 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(0,253,220,1)]" />

          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10
              rounded-xl p-5
              transition transform duration-300
              hover:-translate-y-1.5
              hover:shadow-[0_0_40px_rgba(0,253,220,0.25)]

              before:content-['']
              before:absolute before:inset-0
              before:bg-[radial-gradient(circle_at_top,_rgba(0,253,220,0.18),_transparent_70%)]
              before:opacity-0
              before:transition-opacity before:duration-300
              hover:before:opacity-100">
            <h4 className="text-lg font-semibold">
              {data.experience.role} @ {data.experience.company}
            </h4>
            <p className="text-cyan-400 text-sm my-2">
              {data.experience.duration}
            </p>

            <ul className="list-disc pl-5 text-gray-300 space-y-1">
              {data.experience.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <div>
        <div className="flex items-center gap-3 text-xl mb-10">
          <span className="w-1 h-7 bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
          <Code className="text-cyan-400" size={22} />
          <h3>Key Projects</h3>
        </div>

        <div className="grid gap-10 grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
          {visibleProjects.map((project, i) => (
            <div
              key={i}
              className="relative bg-white/5 backdrop-blur-xl border border-white/10
              rounded-xl p-5
              transition transform duration-300
              hover:-translate-y-1.5
              hover:shadow-[0_0_40px_rgba(0,253,220,0.25)]

              before:content-['']
              before:absolute before:inset-0
              before:bg-[radial-gradient(circle_at_top,_rgba(0,253,220,0.18),_transparent_70%)]
              before:opacity-0
              before:transition-opacity before:duration-300
              hover:before:opacity-100"
            >
              <h4 className="text-xl font-semibold">{project.title}</h4>
              <p className="text-cyan-400 text-sm my-2">{project.tech}</p>
              <p className="text-gray-300 mb-4">{project.desc}</p>

              <div className="flex gap-4">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 text-sm rounded-full
                             bg-gradient-to-br from-cyan-400 to-purple-600 text-slate-950
                             hover:bg-cyan-400 hover:text-black transition"
                  >
                    Live Demo
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
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
        {data.projects.length > 6 && (
          <div className="text-center mt-14">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold shadow-lg hover:scale-105 transition"
            >
              {showAll ? "Show Less" : "View More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
