import axios from "axios";

export default {

  getStories: function() {
    return axios.get("/api/stories");
  },
  getStory: function(id) {
    return axios.get("/api/stories/" + id);
  },
  deleteStory: function(id) {
    return axios.delete("/api/stories/" + id);
  },
  saveStory: function(story) {
    return axios.post("/api/stories", story);
  },

  getApprovedStories: function(id) {
    return axios.get("/api/stories/storypage/");
  },

  approveStory: function(id) {
    return axios.put("/api/stories/" + id);
  }
};
