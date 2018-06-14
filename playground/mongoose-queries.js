const {
	ObjectID
} = require('mongodb');

const {
	mongoose
} = require('./../server/db/mongoose');
const {
	Todo
} = require('./../server/models/todo');

const {
	User
} = require('./../server/models/user');

// var id = '5b21a2966534130dbc33db46';

// if (!ObjectID.isValid(id)) {
// 	console.log('ID not valid');
// }

// Todo.findOne({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

User.findById('5b218f583c389b132c381829').then((user) => {
	if (!user) {
		return console.log('Unable to find user');
	}

	console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
	console.log(e);
})