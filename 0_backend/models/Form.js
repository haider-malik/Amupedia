const mongoose = require("mongoose");
const { Schema } = mongoose;

// A schema, basically a format in which data will be stored in the database when entered by the user
const FormSchema = new Schema({
	firstname: {
		type: String,
		required: true,
	},
	lastname: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
  },
  phone: {
    type: Number,
  },
	address: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required:true,
  }
});

const User = mongoose.model("form", FormSchema);
module.exports = User;
