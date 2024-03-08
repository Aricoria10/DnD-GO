import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_XP } from '../../utils/mutations';
import { CHANGE_LEVEL } from '../../utils/mutations';
import Auth from '../../utils/auth';

// Array of options for computer to pick from
var options = ["R", "P", "S"];

var playGame = function() {
  // Ask user for their choice
  var userChoice = window.prompt("Enter R, P, or S:");

  // If user pressed Cancel, immediately end function
  if (!userChoice) {
    return;
  }

  // Convert to uppercase to make comparisons easier
  userChoice = userChoice.toUpperCase();

  // Get random index from array of options
  var index = Math.floor(Math.random() * options.length);
  var computerChoice = options[index]

  // If choices are the same, it's a tie
  if (userChoice === computerChoice) {
    tieFunction();

  // Check every win condition for the player
  } else if (
    (userChoice === "R" && computerChoice === "S") || 
    (userChoice === "P" && computerChoice === "R") || 
    (userChoice === "S" && computerChoice === "P")
  ) {
    winFunction();

  // If above conditions failed, assume player lost
  } else {
    lossFunction()
  };
};

// Run the game for the first time
playGame();

const tieFunction = function(){
    return (
        <h1>
            It's a tie! Choose again.
        </h1>
    )
};

const lossFunction = function(){
    return (
        <h1>
            You lose! Play again?
        </h1>
    )
};

const winFunction = function (){
    return (
        <h1>
            You defeated the {monster.name}!
        </h1>
    )
};
