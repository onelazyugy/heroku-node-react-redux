const mongoose = require('mongoose');
const { Schema }  = mongoose;//es6 destructure syntax similar to ==> const Schema = mongoose.Schema

const userSchema = new Schema({
    googleId: String
});

//mongoose.model here is to load the users collection onto mongoose
//'users' is the collection name, it has a schema called userSchema
mongoose.model('users', userSchema); 