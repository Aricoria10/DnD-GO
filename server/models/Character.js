const { Schema, model } = require("mongoose");

const characterSchema = new Schema({
  characterAuthor: {
    type: String,
    required: true,
  },
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
    type: Number,
    required: true,
  },
  characterExperience: {
    type: Number,
    required: true,
  }
});

const Character = model("Character", characterSchema);

module.exports = Character;
