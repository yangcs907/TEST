import React, { Component } from "react";
import API from "../utils/API";
import "../index.css";

class StoryPage extends Component {
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
  this.loadApproved();
};

loadApproved = () => {
  API.getApprovedStories()
    .then(res =>
      this.setState({ name: res.data })
    )
    .catch(err => console.log(err));
};

deleteStory = id => {
  API.deleteStory(id)
    .then(res => this.loadApproved())
    .catch(err => console.log(err));
};

  render() {

    return (
      <div>
        {this.state.name.map(name => (
          <h4>
           {name.name} from {name.location}
           <p>{name.occupation}</p>
           <p>{name.bio}</p>
           <p>{name.childAge}</p>
           <p>{name.story}</p>
           <p>{name.lessons}</p>
           <p>{name.approved}</p>
           <p>{name.date}</p>
           <button onClick={() => this.deleteStory(name._id)}>Delete Story</button>
         </h4>

        ))}
      </div>
    )
  };
};

export default StoryPage;
