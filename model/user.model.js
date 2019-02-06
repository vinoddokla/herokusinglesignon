const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
		id: { type: String, unique: false, required: false},
		username: { type: String, unique: false, required: false},
		displayName: { type: String, unique: false, required: false},
		name:
		{ familyName: { type: String, unique: false, required: false},
			givenName: { type: String, unique: false, required: false},
			middleName: { type: String, unique: false, required: false} 
		},
		gender: { type: String, unique: false, required: false},
		profileUrl: { type: String, unique: false, required: false},
		provider: { type: String, unique: false, required: false},
		_raw: {
			name:{type: String, unique: false, required: false},
			id:{type: String, unique: false, required: false}
		},
		_json: { 
			name: { type: String, unique: false, required: false}, 
			id: { type: String, unique: false, required: false} 
		}
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);