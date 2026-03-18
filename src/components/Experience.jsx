import React from "react";
import { motion } from "framer-motion";
import { workData } from "../assets/assets";

const colorMap = {
  purple: { dot: "bg-purple", text: "text-purple" },
  pink: { dot: "bg-pink", text: "text-pink" },
  blue: { dot: "bg-blue", text: "text-blue" },
};

const Experience = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      id="experience"
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-purple">Experience</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Roles and responsibilities that shaped my journey
        </p>

        <div className="max-w-3xl mx-auto border-l border-dark-400 pl-6 space-y-10">
          {workData.map((item, index) => {
            const colors = colorMap[item.color] || colorMap.purple;
            return (
              <motion.div
                key={`${item.role}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative"
              >
                <span
                  className={`absolute -left-3 top-2 h-3 w-3 rounded-full ${colors.dot}`}
                  aria-hidden="true"
                />
                <div className="bg-dark-300 rounded-2xl p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-xl font-semibold">{item.role}</h3>
                    <span className={`text-sm font-medium ${colors.text}`}>
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-gray-400">{item.company}</p>
                  <p className="text-gray-300 mt-4">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
