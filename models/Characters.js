const mongoose = require("mongoose");

const CharactersSchema = new mongoose.Schema({
    id: Number, 
    name: String,
    image: String,
    gender: String,
    hairColor: String, 
    occupation: String, 
    firstEpisode: String, 
    voicedBy: String, 
    url: String, 
    wikiUrl: String, 
    relatives: Object, 
});

const Characters = mongoose.model("Characters", CharactersSchema);

module.exports = Characters;