const mongoose = require("mongoose"); 

const user = mongoose.model("User", {
    name: String,
    photo: String,
    email: {
        type: String,
        unique: true,
   },
   password: String,
   phone: String,
});


module.exports = User;