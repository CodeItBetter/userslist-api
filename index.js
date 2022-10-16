const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const { json } = require('body-parser');
const { nanoid } = require('nanoid');

dotenv.config({ path: './config.env' });

const app = express();

app.use(cors());
app.use(json());

let userData = [
	{
		id: nanoid(),
		name: 'Mike',
		email: 'mike@gmail.com',
		address: 'No:24 ABC street',
		phoneNumber: 1234567890,
	},
	{
		id: nanoid(),
		name: 'Steve',
		email: 'steve@gmail.com',
		address: 'No:24 ABC street',
		phoneNumber: 1234567890,
	},
	{
		id: nanoid(),
		name: 'Max',
		email: 'max@gmail.com',
		address: 'No:24 ABC street',
		phoneNumber: 1234567890,
	},
	{
		id: nanoid(),
		name: 'Jonathan',
		email: 'jon@gmail.com',
		address: 'No:24 ABC street',
		phoneNumber: 1234567890,
	},
	{
		id: nanoid(),
		name: 'Nancy',
		email: 'nancy@gmail.com',
		address: 'No:24 ABC street',
		phoneNumber: 1234567890,
	},
];
app.get('/', (req, res) => res.send('hello'));

app.get('/user', (req, res) => res.send(userData));

app.post('/user', (req, res) => {
	const user = { name: req.body.name,
		email: req.body.email,
		address: req.body.address,
		phoneNumber: req.body.phoneNumber,
		id: nanoid() };
	userData.push(user);
	return res.send(user);
});

app.delete('/user/:id', (req, res) => {
	const id = req.params.id;
	const index = userData.findIndex((user) => user.id == id);
	if (index > -1) {
		userData.splice(index, 1);
	}

	res.send(userData);
});

const PORT = 7000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.green.bold));


// app.listen(process.env.PORT || 3000, function(){
// 	console.log(`Express server listening on port %d in %s mode ${PORT}`);
//   });