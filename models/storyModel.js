const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storySchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  email: { type: String, required: true },
  occupation: { type: String, required: true },
  bio: { type: String, required: true },
  childAge: { type: String, required: true },
  story: { type: String, required: true },
  lessons: { type: String, required: true },
  waiver: { type: Boolean, required: true },
  date: { type: Date, default: Date.now },
  approved: { type: Boolean }
});

const storyModel = mongoose.model("storyModel", storySchema);

module.exports = storyModel;
