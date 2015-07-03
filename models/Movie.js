var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var MovieSchema = new Schema({
	name: String,
	alias: [String],
	publish: Date,
	create_date: Date
});

var Movie = mongodb.mongoose.model("Movie", MovieSchema);
var MovieDAO = function(){};

module.export = new MovieDAO();