import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      {/* Breadcrumb Section */}
      <div className="px-4 py-2">
        <div className="text-sm text-gray-600">
          <a href="/" className="hover:underline text-green-700">
            Home
          </a>{" "}
          / Contact Us
        </div>
      </div>
      <div className="w-full max-w-5xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-green-700">Contact Us</h1>
        {/* Top Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-center items-center mb-2">
              <svg
                className="w-8 h-8 text-green-700 font-extrabold"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2 12c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10z"
                />
              </svg>
            </div>
            <h4 className="font-medium text-lg">Email Address</h4>
            <p className="text-gray-600">info@example.com</p>
            <p className="text-gray-600">support@example.com</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-center items-center mb-2">
              <svg
                className="w-8 h-8 text-green-700 font-extrabold"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h10M3 14h7m5-6h3m0 4h-2m-1 1v5a2 2 0 01-2 2H7a2 2 0 01-2-2v-5m14-7h-2"
                />
              </svg>
            </div>
            <h4 className="font-medium text-lg">Phone Number</h4>
            <p className="text-gray-600">+88 (800) 123 4567</p>
            <p className="text-gray-600">+99 094 5445 433</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-center items-center mb-2">
              <svg
                className="w-8 h-8 text-green-700 font-extrabold"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 7h16M4 15h16"
                />
              </svg>
            </div>
            <h4 className="font-medium text-lg">Our Address</h4>
            <p className="text-gray-600">82 12th Street, Office 14</p>
            <p className="text-gray-600">Edinburgh, UK</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-center mb-4 text-green-700">
            How Can We Help You?
          </h2>
          <p className="text-justify text-gray-500 mb-8">
            We’re here to help! Whether you have questions about our services,
            need assistance, or simply want to share your feedback, feel free to
            reach out to us. Our team is dedicated to providing prompt and
            reliable support to ensure your experience with us is seamless.
          </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium">
                Your Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                placeholder="Write your message"
              ></textarea>
            </div>
            <div className="col-span-1 md:col-span-2 flex items-center">
              <input
                type="checkbox"
                id="agreement"
                className="h-4 w-4 text-green-600 border-gray-300 rounded"
              />
              <label htmlFor="agreement" className="ml-2 text-sm">
                I agree that my submitted data is being collected and stored.
              </label>
            </div>
            <div className="col-span-1 md:col-span-2">
              <button
                type="submit"
                className="w-full px-6 py-2 text-white bg-green-700 rounded-lg hover:bg-green-600"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
