const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const characterSchema = new Schema({
  characterName: {
    type: String,
    required: "Add your Character Name",
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  characterGender: {
    type: String,
    required: true,
    trim: true,
  },
  characterRace: {
    type: String,
    required: true,
  },
  characterClass: {
    type: String,
    required: true,
  },
  characterLevel: {
    type: Int,
    required: true,
  }
});

const Character = model("Character", characterSchema);

module.exports = Character;
