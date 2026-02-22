// components/ContactForm.tsx (CSR Component)
"use client";

import axios from "axios";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface ContactFormProps {
  translatedStrings: {
    contactUs: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    sendMessage: string;
    successMessage: string;
    errorMessage: string;
    errorAlert: string;
  };
}

const ContactForm: React.FC<ContactFormProps> = ({ translatedStrings }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/contact-form/create/",
        formData
      );
      if (response.status === 201) {
        alert(translatedStrings.successMessage);
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error(translatedStrings.errorMessage, error);
      alert(translatedStrings.errorAlert);
    }
  };

  return (
    <motion.div
      className="mb-8 w-full max-w-md rounded-lg bg-slate-200 p-8 shadow-lg dark:bg-slate-700 md:mb-0"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="mb-6 text-3xl font-bold text-black dark:text-white">
        {translatedStrings.contactUs}
      </h2>
      <form onSubmit={handleSubmit}>
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <label
            htmlFor="name"
            className="block text-sm font-medium text-black dark:text-white"
          >
            {translatedStrings.name}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-slate-100 px-3 py-2 text-black focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            placeholder={translatedStrings.namePlaceholder}
          />
        </motion.div>

        <motion.div
          className="mb-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <label
            htmlFor="email"
            className="block text-sm font-medium text-black dark:text-white"
          >
            {translatedStrings.email}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-slate-100 px-3 py-2 text-black focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            placeholder={translatedStrings.emailPlaceholder}
          />
        </motion.div>

        <motion.div
          className="mb-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <label
            htmlFor="message"
            className="block text-sm font-medium text-black dark:text-white"
          >
            {translatedStrings.message}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-slate-100 px-3 py-2 text-black focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            placeholder={translatedStrings.messagePlaceholder}
            rows="4"
          />
        </motion.div>

        <motion.button
          type="submit"
          className="w-full rounded-md bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          {translatedStrings.sendMessage}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
