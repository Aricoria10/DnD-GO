import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Encounter = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://floating-headland-95050.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
          params: {
            location: '28.1164832,-80.6590457', // Replace with actual latitude and longitude
            radius: 1000, // in meters
            type: 'restaurant', // Specify the type of places you want to search for
            key: 'AIzaSyAREc5G26pYeKRvU3WItAY7isaJey0VA4g' // Replace with your actual API key
          }
        });
        setPlaces(response.data.results);
      } catch (error) {
        console.error('Error fetching nearby places:', error);
      }
    };

    fetchData();
  }, []);
  console.log(places)
  return (
    <div>
      <h2>Nearby Places</h2>
      <ul>
        {places.map(place => (
          <li key={place.id}>
            <strong>{place.name}</strong>
            <p>{place.vicinity}</p>
            <p>{place.types[0]}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Encounter;
