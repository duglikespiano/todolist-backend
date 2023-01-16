import express from 'express';
import http from 'http';
import cors from 'cors';
import { DataSource } from 'typeorm';
import {
	connectionType,
	connectionDatabase,
	connectionHost,
	connectionPort,
	connectionUsername,
	connectionPassword,
} from './env.js';

const app = express();

app.use(express.json());
app.use(cors({ origin: '*', optionsSuccessStatus: 200 }));

const server = http.createServer(app);
server.listen(8000, () => {
	console.log('server is listening on port 8000');
});

const myDataSource = new DataSource({
	type: connectionType,
	database: connectionDatabase,
	host: connectionHost,
	port: connectionPort,
	username: connectionUsername,
	password: connectionPassword,
});

myDataSource.initialize().then(() => {
	console.log('Data Source has been initialized');
});

const getAllTodos = async (req, res) => {
	const data = await myDataSource.query(`SELECT * FROM todo`);
	res.json({ data: data });
};

const addTodo = async (req, res) => {
	const { todo, category, toggle } = req.body;
	await myDataSource.query(
		`INSERT INTO todo (todo, category, toggle) VALUES (?, ?, ?)`,
		[todo, category, toggle]
	);

	res.status(201).json({ message: 'todo_added' });
};

const modifyTodo = async (req, res) => {
	const { id, todo, category } = req.body;
	await myDataSource.query(
		`UPDATE todo SET todo =(?) WHERE id =(?) AND category =(?)`,
		[todo, id, category]
	);
	res.status(200).json({ message: 'todo_modified' });
};

const removeTodo = async (req, res) => {
	const { id } = req.body;
	await myDataSource.query(`DELETE FROM todo WHERE id = ?`, [id]);
	res.status(200).json({ message: 'todo_removed' });
};

const modifyCategory = async (req, res) => {
	const { category } = req.body;
	await myDataSource.query(`UPDATE todo SET category =(?)`, [category]);
	res.status(200).json({ message: 'category_name_modified' });
};

const removeAllTodos = async (req, res) => {
	const { category } = req.body;
	myDataSource.query(`DELETE FROM todo WHERE category =(?)`, [category]);
	res.status(200).json({ message: 'category_cleared' });
};

app.get('/todo', getAllTodos);
app.post('/todo', addTodo);
app.patch('/todo', modifyTodo);
app.delete('/todo', removeTodo);

app.patch('/category', modifyCategory);
app.delete('/category', removeAllTodos);
