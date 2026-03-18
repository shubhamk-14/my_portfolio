import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const fallbackEmail = "its.shubham@gmail.com";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const openMailtoFallback = () => {
    const subject = formData.subject || "Portfolio contact";
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    const params = new URLSearchParams({
      subject,
      body,
    });
    window.location.href = `mailto:${fallbackEmail}?${params.toString()}`;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    openMailtoFallback();
    setStatus({
      type: "success",
      message: "Opening your email client...",
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      id="contact"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Get In <span className="text-purple">Touch</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Let us build something great together. I am open to freelance,
          full-time roles, and collaborations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-dark-300 rounded-2xl p-8 space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Contact Details</h3>
              <p className="text-gray-400">
                Share your idea or timeline and I will get back quickly.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="h-12 w-12 rounded-full bg-dark-400 flex items-center justify-center text-purple">
                  <FaEnvelope />
                </span>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-gray-200">{fallbackEmail}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="h-12 w-12 rounded-full bg-dark-400 flex items-center justify-center text-pink">
                  <FaPhoneAlt />
                </span>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-gray-200">+91 90000 00000</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="h-12 w-12 rounded-full bg-dark-400 flex items-center justify-center text-blue">
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-gray-200">India</p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-dark-300 rounded-2xl p-8 space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-dark-400 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple"
              />
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-dark-400 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-dark-400 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple"
            />
            <textarea
              rows="5"
              placeholder="Write your message..."
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-dark-400 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple"
            />
            <button
              type="submit"
              className="w-full bg-purple hover:bg-purple-700 transition duration-300 text-white font-semibold rounded-lg py-3"
            >
              Send Message
            </button>
            {status.message ? (
              <p
                className={`text-sm text-center ${
                  status.type === "success" ? "text-green-400" : "text-red-400"
                }`}
              >
                {status.message}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
