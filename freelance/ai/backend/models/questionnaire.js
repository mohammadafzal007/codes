const mongoose = require('mongoose');

const ResponseSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  responses: { 
    type: Map, 
    of: new mongoose.Schema({
      option: { type: String, required: true },  // Option like A, B, C
      answer: { type: String, required: true }   // Answer text
    }), 
    required: true 
  },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Response', ResponseSchema);
