const mongoose = require("mongoose");

var demoschema = mongoose.Schema({
    name :{
        type: String,
    },
    email :{
        type: String,
    },
    password:{
        type: String
    }

})
var demo = mongoose.model('demo', demoschema);
module.exports = demo;