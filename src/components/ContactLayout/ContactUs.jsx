import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

const ContactInfoItem = ({ icon, title, content }) => (
  <div className="flex items-start gap-4">
    <div className="bg-lime-100 p-3 rounded-full">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

const ContactUs = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("Please fill in all required fields");
      return;
    }

    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      // Navigate to home page
      navigate("/");
    }, 1000);
  };

  return (
    <section className="bg-white font-sans py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-lg mx-auto grid md:grid-cols-2 gap-12 md:gap-16">
        {/* Left Column: Contact Information */}
        <div className="flex flex-col justify-start space-y-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              Send us Message
            </h2>
          </div>
          <div className="space-y-8">
            <ContactInfoItem
              icon={<BsTelephone className="h-6 w-6 text-lime-900" />}
              title="Phone"
              content="+91 8142686499"
            />
            <ContactInfoItem
              icon={<AiOutlineMail className="h-6 w-6 text-lime-900" />}
              title="Email"
              content="pasupuletiniranjan49@example.com"
            />
            <ContactInfoItem
              icon={<IoLocationOutline className="h-6 w-6 text-lime-900" />}
              title="Address"
              content="Rajiv Ram 4th Line, Chimakurthy"
            />
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="bg-white rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name *
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email *
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-auto px-8 py-3 font-semibold text-white bg-lime-500 rounded-md hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 transition-colors disabled:bg-lime-300 disabled:cursor-not-allowed cursor-pointer"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;