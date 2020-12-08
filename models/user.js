const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
   name: String,
   email: String,
   avatarURL: String,
   memory: {
       type: Schema.Types.ObjectId,
       ref: 'Memory'
      },
   googleId: String, 
},{timestamps: true})

module.exports = mongoose.model('User', userSchema);