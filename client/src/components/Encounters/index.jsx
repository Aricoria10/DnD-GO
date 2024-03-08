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

  return (
    <div className="Encounters">
      <h2>{monster.name}</h2>
      <p>Type: {monster.type}</p>
      <p>Level: {monster.level}</p>
      <p>HP: {monster.hp}</p>
      <form onSubmit={handleFormSubmit}>
        <button type="submit" className="btn btn-primary">
          Start Encounter
        </button>
      </form>
    </div>
  );
};

export default Encounters;
