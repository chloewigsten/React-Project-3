require("dotenv").config();
const { MONGODB_URI } = process.env;
const axios = require('axios')

// Add in mongoose
const mongoose = require('mongoose');
mongoose.connect(MONGODB_URI);

// Connection Events
mongoose.connection
  .on("open", () => console.log("This is my awesome amazing connection man"))
  .on("close", () => console.log("Your are disconnected from mongoose :'("))
  .on("error", (error) => console.log(error));

const { Characters } = require('./models')

const seedingData = async () => {
    try {
        const myCharacters = await axios.get('https://bobsburgers-api.herokuapp.com/characters/');
        const allCharacters = myCharacters.data;
        const deletedCharacters = await Characters.deleteMany({})
        const addedCharacters = await Characters.insertMany(allCharacters);
        console.log(deletedCharacters);
        console.log(addedCharacters);
    } catch(err) {
        console.log(err);
    }
}

seedingData();