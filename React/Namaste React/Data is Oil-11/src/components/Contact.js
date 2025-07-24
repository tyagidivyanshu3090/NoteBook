import React from "react";

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gray-50 p-6">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-md w-full">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Get in Touch!
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Have questions or feedback? We'd love to hear from you.
        </p>
        <div className="space-y-4">
          <p className="text-gray-700 text-md">
            📧 **Email:** support@yourcompany.com
          </p>
          <p className="text-gray-700 text-md">📞 **Phone:** +91 98765 43210</p>
          <p className="text-gray-700 text-md">
            📍 **Address:** 123 Foodie Lane, Khatauli, Uttar Pradesh, India
          </p>
        </div>
        <button className="mt-8 px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition duration-300 ease-in-out shadow-md">
          Send us a message
        </button>
      </div>
    </div>
  );
}

export default Contact;
