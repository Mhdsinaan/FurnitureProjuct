import React from 'react';

function Living() {
  return (
    <div>
      <br /><br /><br /><br />
      <h1 className='text-center font-bold text-3xl'>LIVING</h1>
    <div className="flex flex-wrap justify-center">
      {living.map((data, i) => (
        <div key={i} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
          <img src={data.image} alt={data.name} className="w-full h-64 object-cover" />
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-3">{data.name}</h2>
            <h2 className="font-bold text-xl mb-2">{data.category}</h2>
            <p className="text-gray-500 text-base line-through">${data.old_price}</p> 
            <p className="text-green-600 text-xl font-semibold mt-2">${data.new_price}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Living;
