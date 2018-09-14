import axios from "axios";


export default {
    // Gets all users
    getUsers: function() {
        return axios.get("http://localhost:8080/api/user");
    },
    // Get the user with a given id
    getUser: function(id) {
        return axios.get("http://localhost:8080/api/user/" + id);
    },
    // Delete a User with a given id
    deleteUser: function(id) {
        return axios.delete("http://localhost:8080/api/user/" + id);
    },
    // Save a User to the database
    saveUser: function(data) {
        return axios.post("http://localhost:8080/api/user", data)
    }
};