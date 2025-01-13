import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from './DataContext';

function Dining() {
  const { post } = useContext(MyContext);
  const [dining, setDining] = useState([]);

  // Filter the dining items when `post` changes
  useEffect(() => {
    if (post && post.length > 0) {
      const filteredDiningItems = post.filter(item => item.category === 'dining');
      setDining(filteredDiningItems); // Only set dining items
    }
  }, [post]); // Re-run when `post` data changes

  return (
    <div>
      <h1>Dining Products</h1>
      <ul>
        {dining.map((item, i) => (
          <li key={i}>
            <h2>{item.name}</h2>
            <p>Price: {item.new_price}</p>
            <img src={item.image} alt={item.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dining;
