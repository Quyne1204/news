'use strict'

function saveToStogare(key,value){
    localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage(key){
    return JSON.parse(localStorage.getItem(key));
}


//User
const users = getFromStorage("userArr") ? getFromStorage("userArr") : [] ;

const userArr = users.map((user)=> parseUser(user));
let userActive = getFromStorage("userActive") ? getFromStorage("userActive") : null;

function parseUser(userData) {
	const user = new User(userData.firstname, userData.lastname, userData.username, userData.password,userData.category,userData.pageSize)
	return user;
}

//Todo
const todos = getFromStorage ("todoArr") ? getFromStorage("todoArr") : [];
const todoArr = todos.map((todo) => parseTask(todo));


function parseTask(taskData) {
	const todo = new Task(taskData.task, taskData.owner, taskData.isDone)
	return todo;
}