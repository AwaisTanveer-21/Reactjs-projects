import React, { useEffect, useState } from 'react';

function Catalog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {products.map(p => (
        <div key={p.id} className="bg-white p-4 rounded shadow hover:shadow-lg">
          <img src={p.image} alt={p.title} className="h-40 w-full object-cover mb-2"/>
          <h3 className="font-bold">{p.title}</h3>
          <p>${p.price}</p>
          <button className="mt-2 bg-blue-500 text-white py-1 rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Catalog;
