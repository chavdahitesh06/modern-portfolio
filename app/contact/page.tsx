'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/animations";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import Navbar from "../../components/navbar";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setSubmitMessage("An error occurred. Please try again later.");
    }

    setIsSubmitting(false);
  };

  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <section className="py-20 bg-gray-900 text-white pt-28">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16 ">
            <h2 className="text-3xl md:text-4xl font-bold from-blue-500 to-purple-600 mb-4 ">Contact</h2>
            <p className="text-xl text-gray-400">
              Let's connect! I promise my email inbox is bug-free.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <motion.form
              variants={fadeIn}
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              {/* Name Field */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-100 absolute transition-all duration-300 transform -translate-y-6 scale-75 origin-top-left"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-4 focus:outline-none transform transition-all duration-300"
                />
              </div>
              
              {/* Email Field */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 absolute transition-all duration-300 transform -translate-y-6 scale-75 origin-top-left"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-4 focus:outline-none transform transition-all duration-300"
                />
              </div>

              {/* Message Field */}
              <div className="relative">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 absolute transition-all duration-300 transform -translate-y-6 scale-75 origin-top-left"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-4 focus:outline-none transform transition-all duration-300"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50 transform hover:scale-105"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>

              {/* Submit Message Feedback */}
              {submitMessage && (
                <motion.p
                  className={`text-center ${
                    submitMessage.includes("successfully")
                      ? "text-green-500"
                      : "text-red-500"
                  } transition-all duration-300`}
                >
                  {submitMessage}
                </motion.p>
              )}
            </motion.form>

            {/* Contact Info */}
            <div className="contact-details mt-12">
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:7046615177" className="text-blue-500">
                  7046615177
                </a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:chavdahitesh902320@gmail.com" className="text-blue-500">
                  chavdahitesh902320@gmail.com
                </a>
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-12 flex justify-center space-x-6">
              <a
                href="mailto:chavdahitesh902320@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-8 h-8" />
              </a>
              <a
                href="https://github.com/chavdahitesh06"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-8 h-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/hiteshchavda06/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-8 h-8" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-8 h-8" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
