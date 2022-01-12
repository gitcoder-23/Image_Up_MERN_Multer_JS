'use strict';
const mongoose = require('mongoose');

module.exports = () => {
  // mongoose.connect('mongodb://localhost/upload-files-database', {
  mongoose
    .connect(
      'mongodb+srv://nextecomm-21:nextecomm-21@cluster0.rplce.mongodb.net/nextjs_ecommerce_app?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
      }
    )
    .then(() => console.log('Connected to Mongodb......'));
};
