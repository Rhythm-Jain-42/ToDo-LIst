const task = require('../models/task')

const getAllTasks= async (req,res)=>{
  try {
    const Tasks = await task.find({})
    res.status(200).json({Tasks})
  } catch (error) {
    res.status(500).json({msg:error})
  }
}

const createTask= async (req,res)=>{
  try {
    const Task = await task.create(req.body)
    res.status(201).json({Task})
  } catch (error) {
    res.status(500).json({msg:error})
  }
}

const getTask= async (req,res)=>{
  try {
    const {id:taskID} = req.params
    const Task = await task.findOne({_id: taskID})
    if(!Task)
      return res.status(404).json({msg : `No task with id : ${taskID}`})
    res.status(200).json({Task})
  } catch (error) {
    res.status(500).json({msg:error})
  }
}

const updateTask= async (req,res)=>{
  try {
    const {id:taskID}=req.params
    const Task=await task.findOneAndUpdate({_id:taskID},req.body,{new:true, runValidators:true,})
    if(!Task)
      return res.status(404).json({msg : `No task with id : ${taskID}`})
    res.status(200).json({Task})
  } catch (error) {
    res.status(500).json({msg:error})
  }
}

const deleteTask= async (req,res)=>{
  try {
    const {id:taskID} = req.params
    const Task = await task.findOneAndDelete({_id: taskID})
    if(!Task)
      return res.status(404).json({msg : `No task with id : ${taskID}`})
    res.status(200).json({Task})
  } catch (error) {
    res.status(500).json({msg:error})
  }
}

const editTask=(req,res)=>{
  res.send('get all tasks')
}

module.exports={
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}
