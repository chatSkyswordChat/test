"use client"
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://apidev.nooxs.com/api/productlinktivity/1');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{pokemonData.data[0].title}</h2>
      <h3>Abilities:</h3>
      <ul>
        {pokemonData.data.map((data, index) => (
          <li key={index}>{data.product_linktivity_id}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
