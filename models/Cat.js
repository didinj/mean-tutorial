var mongoose = require('mongoose');
var CatSchema = new mongoose.Schema({
  cat_name: String,
  cat_desc: String,
  updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Cat', CatSchema);
