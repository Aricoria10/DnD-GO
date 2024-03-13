import { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const CharacterForm = () => {
  const [characterName, setCharacterName] = useState("");
  const [characterGender, setCharacterGender] = useState("Male");
  const [characterRace, setCharacterRace] = useState("Human");
  const [characterClass, setCharacterClass] = useState("Cleric");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "characterName":
        setCharacterName(value);
        break;
      case "characterGender":
        setCharacterGender(value);
        break;
      case "characterRace":
        setCharacterRace(value);
        break;
      case "characterClass":
        setCharacterClass(value);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      // Your addCharacter logic goes here
    } catch (err) {
      console.error(err);
      setError("An error occurred while submitting the form.");
    }
  };

  return (
    <div>
      <h3>Make your Adventurer!</h3>

      {Auth.loggedIn() ? (
        <>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div>
              <input
                value={characterName}
                name="characterName"
                onChange={handleChange}
                type="text"
                placeholder="CharacterName"
              />
            </div>
            <div>
              <select
                value={characterGender}
                name="characterGender"
                onChange={handleChange}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-binary">Non-binary</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <select
                value={characterRace}
                name="characterRace"
                onChange={handleChange}
              >
                <option value="Human">Human</option>
                <option value="Elf">Elf</option>
                <option value="Dwarf">Dwarf</option>
                <option value="Tiefling">Tiefling</option>
              </select>
            </div>
            <div>
              <select
                value={characterClass}
                name="characterClass"
                onChange={handleChange}
              >
                <option value="Cleric">Cleric</option>
                <option value="Fighter">Fighter</option>
                <option value="Rogue">Rogue</option>
                <option value="Wizard">Wizard</option>
              </select>
            </div>
            <button type="submit">Submit</button>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to make your character. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default CharacterForm;