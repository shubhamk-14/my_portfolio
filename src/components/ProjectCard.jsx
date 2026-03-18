
import React from "react";

const ProjectCard = ({ title, description, image, tech = [], icons = [], demo, code }) => {
  return (
    <div className="bg-dark-300 rounded-2xl overflow-hidden border border-dark-400 hover:-translate-y-2 hover:shadow-xl transition duration-300 group">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-60 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between gap-4 mb-3">
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="flex items-center gap-2 text-purple">
            {icons.map((Icon, index) => (
              <Icon key={`${title}-icon-${index}`} className="w-5 h-5" />
            ))}
          </div>
        </div>
        <p className="text-gray-400 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1 bg-dark-400 rounded-full text-xs text-gray-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 text-sm">
          {demo && demo !== "#" ? (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="text-purple hover:text-purple-300 transition"
            >
              Live Demo
            </a>
          ) : null}
          {code && code !== "#" ? (
            <a
              href={code}
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              View Code
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
