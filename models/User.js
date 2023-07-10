'use strict'

class User{
    constructor(firstName,lastName,username,password,category="business",pageSize=5){
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.category = category;
        this.pageSize = pageSize;
    }
    
}

class Task{
    constructor(task,owner,isDone){
        this.task = task;
        this.owner = owner;
        this.isDone = isDone;
    }
}