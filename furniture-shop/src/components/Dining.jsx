import React from 'react';
import dining from './dining.json';

function Dining() {
  return (
    <div className="flex flex-wrap justify-center">
      {dining.map((item, index) => (
        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-64 object-cover"
          />
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2">{item.name}</h2>
            <p className="text-gray-700 text-baseline-through">${item.old_price}</p>
            <p className="text-green-600 text-xl font-semibold mt-2">{item.new_price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dining;
