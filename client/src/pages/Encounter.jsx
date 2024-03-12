import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Game from "../components/Game";

const Encounter = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://floating-headland-95050.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json",
          {
            params: {
              location: "28.1164832,-80.6590457", // Replace with actual latitude and longitude
              radius: 1000, // in meters
              type: "restaurant", // Specify the type of places you want to search for
              key: "AIzaSyAREc5G26pYeKRvU3WItAY7isaJey0VA4g", // Replace with your actual API key
            },
          }
        );
        setPlaces(response.data.results);
        let environment = places[0].types[0];
        getMonster(environment);
      } catch (error) {
        console.error("Error fetching nearby places:", error);
      }
    };

    fetchData();
  }, []);

  const getMonster = async (environment, i) => {
    let monsterChoice;
    try {
      const response = await axios.get(
        "https://floating-headland-95050.herokuapp.com/https://api.open5e.com/monsters/?cr=3"
      );
      const monsterList = response.data.results;
      const mappedMonsters = monsterList.map((monster, i) => ({
        name: monster.name,
        environments: monster.environments,
      }))
      monsterChoice = mappedMonsters
      console.log(monsterChoice[i]);
    } catch (error) {
      console.error("Error fetching monster:", error);
    }
    // console.log(monsterChoice.environment);
    if (environment === "restaurant") {
      // const filteredMonsters = monsterChoice.filter(checkMonster)
      // function checkMonster(monsterChoice) {
      //   return monsterChoice.enviroment === "Jungle"
      // }
      // Math.floor(Math.random(filteredmonsters[i]))
      // console.log(filteredMonsters);
    }
  };

  return (

    <div>
      <h2>Nearby Places</h2>
      <ul>
        {places.map((place) => (
          <li key={place.id}>
            <strong>{place.name}</strong>
            <p>{place.vicinity}</p>
            <p>{place.types[0]}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>

      
        <div>
        <Game />
        </div>
      
                      
    </div>
    
  );
};

export default Encounter;
