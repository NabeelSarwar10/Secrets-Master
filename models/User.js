const mongoose = require('mongoose');
const encrypt = require('mongoose-encryption');

const userSchema = new mongoose.Schema({
    
       email: {
           type: String,
           required: true,
           unique: true
       },
       password: {
           type: String,
           required: true
       },
       date: {
           type: Date,
           default: Date.now

       }

});

userSchema.plugin(encrypt, { secret: process.env.secret, encryptedFields: ["password"]});


module.exports = User = mongoose.model('user', userSchema);