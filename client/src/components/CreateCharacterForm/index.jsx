// import { useState } from "react";
import { Link } from "react-router-dom";
// import { useMutation } from "@apollo/client";

// import {  QUERY_ME } from "../../utils/queries";

import Auth from "../../utils/auth";

const CharacterForm = () => {
  
  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const { data } = await addThought({
  //       variables: {
  //         thoughtText,
  //         // Run the getProfile() method to get access to the unencrypted token value in order to retrieve the user's username
  //         thoughtAuthor: Auth.getProfile().authenticatedPerson.username,
  //       },
  //     });

  //     setThoughtText("");
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   if (name === "thoughtText" && value.length <= 280) {
  //     setThoughtText(value);
  //     setCharacterCount(value.length);
  //   }
  // };

  return (
    <div>
      <h3>What's on your techy mind?</h3>

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
              <select value={characterGender} onChange={handleChange}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-binary">Non-binary</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <select value={characterRace} onChange={handleChange}>
                <option value="Human">Human</option>
                <option value="Elf">Elf</option>
                <option value="Dwarf">Dwarf</option>
                <option value="Tiefling">Tiefling</option>
              </select>
            </div>
            <div>
              <select value={characterClass} onChange={handleChange}>
                <option value="Cleric">Cleric</option>
                <option value="Fighter">Fighter</option>
                <option value="Rogue">Rogue</option>
                <option value="Wizard">Wizard</option>
              </select>
            </div>
            <button type="submit">Submit</button>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
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
