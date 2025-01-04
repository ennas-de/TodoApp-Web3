import React from 'react'
import {TableCell, TableRow, IconButton, Checkbox} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {completeTodo, deleteTodo } from "./../../smart-contract/blockchain"; 


const TodoItem = ({todo}) => {
    const markAsCompleted = async (todoId) => {
        try {
            await completeTodo(todoId);
            alert("Task marked as completed.")
        } catch (error) {
            alert("Failed to mark task as completed.")
        }
    }

    const removeTodo = async (todoId) => {
        try {
            await deleteTodo(todoId)
            alert("Task deleted successfully.")
        } catch (error) {
            alert("Failed to delete task.")
        }
    } 

  return (
    <TableRow key={todo.id} sx={{ '&:last-child td, &:last-child th': {border: 0}}}>
        <TableCell  component="th" scope="row">{todo.taskDescription}</TableCell>
        <TableCell align="right">
        <   Checkbox onClick={() => markAsCompleted(todo.id)} />
        </TableCell>
        <TableCell align="right">
            <IconButton arial-label="delete" size="large" onClick={() => removeTodo(todo.id)} >
                <DeleteIcon sx={{color: "red"}}/>
            </IconButton>
        </TableCell>
    </TableRow>
  )
}

export default TodoItem