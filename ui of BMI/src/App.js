import React, { useState } from "react";

function App() {
  
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);

  // Step 2: Function to calculate BMI
  const calculateBMI = (e) => {
    e.preventDefault(); // prevent page refresh

    // Step 3: Convert strings to numbers
    const w = parseFloat(weight);
    const h = parseFloat(height);

   
    if (!w || !h || h === 0) {
      alert("Please enter valid height and weight!");
      return;
    }

    // Step 5: Calculate BMI Formula = weight / (height * height)
    const bmiValue = (w / (h * h)).toFixed(2);
    setBmi(bmiValue);
  };

  // Step 6: Reload or reset inputs
  const reload = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-300">
      {/* Main Card */}
      <div className="bg-white shadow-xl rounded-2xl p-8 w-80 text-center border border-gray-200">
        {/* Title */}
        <h1 className="text-2xl font-bold text-blue-700 mb-6 uppercase tracking-wide">
          BMI Calculator
        </h1>

        {/* Form */}
        <form onSubmit={calculateBMI}>
          {/* Weight Field */}
          <div className="flex flex-col items-start mb-4">
            <label
              htmlFor="weight"
              className="text-gray-700 font-semibold mb-1"
            >
              Weight (kg)
            </label>
            <input
              type="number"
              id="weight"
              name="weight"
              placeholder="Enter weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)} // set weight
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Height Field */}
          <div className="flex flex-col items-start mb-6">
            <label
              htmlFor="height"
              className="text-gray-700 font-semibold mb-1"
            >
              Height (m)
            </label>
            <input
              type="number"
              id="height"
              name="height"
              placeholder="Enter height"
              value={height}
              onChange={(e) => setHeight(e.target.value)} // set height
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-3 mb-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-all duration-200"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={reload} // reset inputs
              className="bg-gray-400 hover:bg-gray-500 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-all duration-200"
            >
              Reload
            </button>
          </div>

          {/* Result */}
          <p className="text-gray-700 font-medium">
            Your BMI is:{" "}
            <span className="text-blue-600 font-bold">
              {bmi ? bmi : "null"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;
