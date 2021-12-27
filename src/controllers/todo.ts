import {Request,Response,NextFunction, RequestHandler} from 'express';
import {Todo} from '../models/todo';
const TODO:Todo[] =[];

export const createTodo = (req:Request,res:Response,next:NextFunction)=>{
    const text = (req.body as {text:string}).text;
    const newToDo = new Todo(Math.random().toString(),text);
    TODO.push(newToDo);
    res.status(201).json({
        message:'Created the todo.',
        createTodo:newToDo
    })
}

export const getTodo = (req:Request,res:Response,next:NextFunction)=>{
    res.json({
        todos:TODO
    })
}

export const updateTodo:RequestHandler<{id:string}> = (req:Request,res:Response,next:NextFunction)=>{
    const todoId = req.params.id;
    const updatedText = (req.body as {text:string}).text;
    const todoIndex = TODO.findIndex((todo)=> todo.id===todoId);
    if(todoIndex <0){
        throw new Error('could not find todo')

    }
}