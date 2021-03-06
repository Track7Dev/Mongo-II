const mongoose = require('mongoose');

// Clear out mongoose's model cache to allow --watch to work for tests:
// https://github.com/Automattic/mongoose/issues/1251
mongoose.models = {};
mongoose.modelSchemas = {};

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/so-posts', { useMongoClient: true });

const PostSchema = new mongoose.Schema({
  soID: {
    type: Number,
    required: true,
    unique: true,
  },
  parentID: Number,
  url: {
    type: String,
    required: true,
  },
  title: String,
  body: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  tags: Array,
  acceptedAnswerID: Number,
  user: Object,
});

module.exports = mongoose.model('Posts', PostSchema);
