import React from "react";
import { IoSettings } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import { PiChatsCircleBold } from "react-icons/pi";


function Services() {
  return (
    <div className="py-4 px-4 bg-white">
      {/* Heading Section */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900 uppercase">
          Our Services
        </h1>
        <p className="text-gray-600 mt-2">
          Empower your business with automation and AI-driven solutions.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Box 1 */}
        <div className="border rounded-xl shadow-md hover:shadow-xl p-6 flex flex-col justify-center items-center text-center transition-transform duration-500 hover:scale-105">
          <IoSettings className="text-5xl text-blue-500 mb-4" />
          <h2 className="font-bold text-2xl mb-2 text-gray-800">
            AI Workflow Automation
          </h2>
          <p className="text-gray-600">
            Automate repetitive tasks and connect your tools seamlessly.
          </p>
        </div>

        {/* Box 2 */}
        <div className="border rounded-xl shadow-md hover:shadow-xl p-6 flex flex-col justify-center items-center text-center transition-transform duration-500 hover:scale-105">
          <PiChatsCircleBold className="text-5xl text-green-500 mb-4" />
          <h2 className="font-bold text-2xl mb-2 text-gray-800">
            AI Voice & Chat Agents
          </h2>
          <p className="text-gray-600">
            Build intelligent agents that interact with your customers 24/7.
          </p>
        </div>

        {/* Box 3 */}
        <div className="border rounded-xl shadow-md hover:shadow-xl p-6 flex flex-col justify-center items-center text-center transition-transform duration-500 hover:scale-105">
          <FaWhatsapp className="text-5xl text-purple-500 mb-4" />
          <h2 className="font-bold text-2xl mb-2 text-gray-800">
            WhatsApp & Instagram Bots
          </h2>
          <p className="text-gray-600">
            Automate conversations with smart, personalized messaging.
          </p>
        </div>

        {/* Box 4 */}
        <div className="border rounded-xl shadow-md hover:shadow-xl p-6 flex flex-col justify-center items-center text-center transition-transform duration-500 hover:scale-105">
        
          <FaCloud className="text-5xl text-orange-500 mb-4"/>
          <h2 className="font-bold text-2xl mb-2 text-gray-800">
            Data Analytics & Reporting
          </h2>
          <p className="text-gray-600">
            Turn raw data into actionable insights using AI-powered dashboards.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
