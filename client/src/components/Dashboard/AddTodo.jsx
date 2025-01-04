import React, { useState } from 'react'
import { FormControl,TextField} from '@mui/material';
import {createTodo } from "./../../smart-contract/blockchain"; 


const AddTodo = () => {
    const [todoDescription, setTodoDescription] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await createTodo(todoDescription);
            alert("Todo task Created");
            setTodoDescription('');
        } catch (error) {
            console.log({error});
            alert("Error creating new Todo.")
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <FormControl fullWidth >
            <TextField
                size='big'
                type='text'
                label="New Task's Description"
                value={todoDescription}
                onChange={(e) => setTodoDescription(e.target.value)}
                sx={{mb: 1, width: "100%"}}
            />
        </FormControl>
    </form>
  )
}

export default AddTodo