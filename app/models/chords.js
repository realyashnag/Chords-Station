var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var chordsSchema = mongoose.Schema({
    song: {type:  Schema.Types.ObjectId},
    chordsData: {type: String},
    rating: {type: String, enum: ['Barely Relevant', 'Relevant', 'Sounds Workable', 'On Point', 'Perfect']},
    _added: {type: Date, default: Date.now()},
    _author: {type: String, default:"Yash Nag"},
    _authorEmail: {type: String, default: "arenracyil@gmail.com"},
    _approved: {type: Boolean, default: false}
});

module.exports = mongoose.model('chords', chordsSchema);
