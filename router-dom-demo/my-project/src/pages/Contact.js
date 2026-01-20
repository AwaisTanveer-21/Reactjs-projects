import React from 'react';

function Contact() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form className="flex flex-col gap-3 max-w-md mx-auto">
        <input type="text" placeholder="Name" className="border px-2 py-1 rounded"/>
        <input type="email" placeholder="Email" className="border px-2 py-1 rounded"/>
        <textarea placeholder="Message" className="border px-2 py-1 rounded"></textarea>
        <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Send</button>
      </form>
    </div>
  );
}

export default Contact;
