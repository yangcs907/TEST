import React, { Component } from "react";
import API from "../utils/API";
import "../index.css";

class StoryControl extends Component {
  state = {
    name: [],
    location: "",
    email: "",
    occupation: "",
    bio: "",
    childAge: "",
    story: "",
    lessons: "",
    waiver: false,
    terms: false
  };

componentDidMount() {
  this.loadStories();
};

loadStories = () => {
  API.getStories()
    .then(res =>
      this.setState({ name: res.data })
    )
    .catch(err => console.log(err));
};

deleteStory = id => {
  API.deleteStory(id)
    .then(res => this.loadStories())
    .catch(err => console.log(err));
};

approveStory = id => {
  API.approveStory(id)
    .then(res => this.loadStories())
    .catch(err => console.log(err));
  };

unapproveStory = id => {
  API.unapproveStory(id)
    .then(res => this.loadStories())
    .catch(err => console.log(err));
};

  render() {

    return (
      <div>
        {this.state.name.map(name => (
          <div className="storyControl">
           <p>Name: {name.name}</p>
           <p>Location: {name.location}</p>
           <p>Occupation: {name.occupation}</p>
           <p>Bio: {name.bio}</p>
           <p>Child Age: {name.childAge}</p>
           <p>Story: {name.story}</p>
           <p>Lessons: {name.lessons}</p>
           <p>{name.approved}</p>
           <p>Date: {name.date}</p>
           <button onClick={() => this.deleteStory(name._id)}>Delete Story</button>
           <button onClick={() => this.approveStory(name._id)}>Approve Story</button>
          </div>
        ))}
      </div>
    )
  };
};

export default StoryControl;
