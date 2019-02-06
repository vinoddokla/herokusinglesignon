const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
		id: { type: String, unique: false, required: false},
		displayName: { type: String, unique: false, required: false},
		provider: { type: String, unique: false, required: false},
		_json: { 
			name: { type: String, unique: false, required: false}, 
			id: { type: String, unique: false, required: false} 
		}
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);