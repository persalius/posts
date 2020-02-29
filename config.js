const path = require("path");

export default {
    API_URI: process.env.NODE_ENV === "production"
        ? ""
        : "http://localhost:8000/"
};
