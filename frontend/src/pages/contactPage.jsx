import React from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaSms } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-500 flex items-center justify-center px-6 py-10">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-md w-full">
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-500 to-indigo-600 p-6 text-center">
          <h1 className="text-3xl font-bold text-white">Get in Touch</h1>
          <p className="text-gray-200 mt-2">We’re here to help you 24/7</p>
        </div>

        {/* Contact Options */}
        <div className="p-6">
          <p className="text-gray-600 text-center mb-6">
            Reach out to us through any of the following methods:
          </p>

          <div className="space-y-4">
            {/* Call */}
            <button
              className="flex items-center justify-between w-full px-4 py-3 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition-transform transform hover:scale-105"
              onClick={() => (window.location.href = "tel:+123456789")}
            >
              <FaPhoneAlt className="text-2xl" />
              <span className="text-lg">Call Us</span>
            </button>

            {/* Email */}
            <button
              className="flex items-center justify-between w-full px-4 py-3 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 transition-transform transform hover:scale-105"
              onClick={() => (window.location.href = "mailto:support@example.com")}
            >
              <FaEnvelope className="text-2xl" />
              <span className="text-lg">Email Us</span>
            </button>

            {/* WhatsApp */}
            <button
              className="flex items-center justify-between w-full px-4 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-transform transform hover:scale-105"
              onClick={() => (window.location.href = "https://wa.me/123456789")}
            >
              <FaWhatsapp className="text-2xl" />
              <span className="text-lg">Chat on WhatsApp</span>
            </button>

            {/* SMS */}
            <button
              className="flex items-center justify-between w-full px-4 py-3 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition-transform transform hover:scale-105"
              onClick={() => (window.location.href = "sms:+123456789")}
            >
              <FaSms className="text-2xl" />
              <span className="text-lg">Send a Message</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 text-center p-4">
          <p className="text-gray-500 text-sm">
            © 2025 Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
