const mongoose = require('mongoose');

console.log(process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/bragboardDB');

mongoose.connect(
  process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/bragboardDB',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
