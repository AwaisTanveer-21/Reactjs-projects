import React from 'react';

function Login() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Login</h1>
      <form className="flex flex-col gap-3">
        <input type="email" placeholder="Email" className="border px-2 py-1 rounded"/>
        <input type="password" placeholder="Password" className="border px-2 py-1 rounded"/>
        <button className="bg-green-500 text-white py-2 rounded hover:bg-green-600">Login</button>
      </form>
    </div>
  );
}

export default Login;
