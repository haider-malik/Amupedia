// Connecting to mongodb database
const mongoose = require("mongoose");
const mongoURI =
	"mongodb://localhost:27017/amupedia?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const connectToMongo = () => {
	mongoose.connect(mongoURI, () => {
		console.log("Connected to mongoDB Successfully");
	});
};

//Exporting the function to create mongodb database
module.exports = connectToMongo;
