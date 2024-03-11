import { Link } from "react-router-dom";


const Encounters = ({ monster }) => {
  const handleAttack = (monster) => {
    // Handle attack logic here
    console.log("Attacking", monster);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleAttack(monster);
  };

  const getEncounter = (event) => {
    fetch(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAREc5G26pYeKRvU3WItAY7isaJey0VA4g&libraries=places"
    );
    var map;
    var service;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = parseFloat(position.coords.latitude);
        let lng = parseFloat(position.coords.longitude);

        //pass position to the map
        initialize(lat, lng);
      });
    } else {
      handleLocationError();
    }

    function initialize(lat, lng) {
      var map = new google.maps.LatLng(lat, lng);

      var request = {
        location: { lat: latitude, lng: longitude },
        radius: "16000",
        type: string,
      };

      service = new google.maps.places.PlacesService(map);
      service.nearbySearch(request, callback);
    }

    function callback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        var enviroment = results[i[0].types[0]];
        summonMonster(enviroment);
      }
    }

    function summonMonster(enviroment) {
      var requestUrl = `https://api.open5e.com/search/?cr=1`;
      fetch(requestUrl)
      .then(function (response) {
        return response.json();
        })
      if (enviroment == bakery) {
        console.log("bakery");
      }
      else {
        console.log("not bakery");
      }
    }
  };

  return (
    <div className="Encounters">
      <h2>{monster.name}</h2>
      <p>Type: {monster.type}</p>
      <p>Level: {monster.level}</p>
      <p>HP: {monster.hp}</p>
      <form onSubmit={handleFormSubmit}>
        <button
          type="submit"
          className="btn btn-primary"
          onSubmit={getEncounter}
        >
          Start Encounter
        </button>
      </form>
    </div>
  );
};

export default Encounters;
