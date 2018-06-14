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

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '57c4610dbb35fcbf6fda1154'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('5b2272c9a45cd118e4b4f283').then((todo) => {
	console.log(todo);
});