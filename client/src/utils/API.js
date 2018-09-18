import axios from "axios";


export default {
    // Gets all users
    getUsers: function() {
        return axios.get("/api/user");
    },
    // Get the user with a given id
    getUser: function(id) {
        return axios.get("/api/user/" + id);
    },
    // Delete a User with a given id
    deleteUser: function(id) {
        return axios.delete("/api/user/" + id);
    },
    // Save a User to the database
    saveUser: function(data) {
        return axios.post("/api/user", data);
    }
};