const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mommyfailsstories",
  {
    useMongoClient: true
  }
);

const storySeed = [
  {
    name: "chris",
    location: "atlanta",
    email: "yangcs907@gmail.com",
    occupation: "web developer",
    bio: "this is a brief bio",
    childAge: "infant",
    story: "this is my story",
    lessons: "these are my lessons",
    waiver: true,
    date: new Date(Date.now())
  }
];

db.storyModel
  .remove({})
  .then(() => db.storyModel.collection.insertMany(storySeed))
  .then(data => {
    console.log(data.insertedIds.length + " story inserted! ");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
