import React from 'react';
import roomData from './roomData.json';

function BedRoom() {
  return (
    <div>
      
      <br /><br /><br /><br />
      <h1 className='text-center font-bold text-3xl'>Bed Room</h1>
    <div className="flex flex-wrap justify-center">
      {
        roomData.map((data, i) => (
          <div key={i} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <img src={data.image} alt={data.name} className="w-full h-64 object-cover" />
            <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2">{data.name}</h2>
              <h2 className="font-bold text-xl mb-2">{data.category}</h2>
              <p className="text-gray-700 text-baseline-through">${data.old_price}</p>
              <p className="text-green-600 text-xl font-semibold mt-2">{data.new_price}</p>
            </div>
          </div>
        ))
      }
    </div>
    </div>
  );
}


export default BedRoom;
