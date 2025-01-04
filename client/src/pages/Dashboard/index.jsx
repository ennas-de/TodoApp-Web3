import React, { useEffect, useState } from 'react'
import { Stack, styled} from "@mui/material";
import { getAllTodos } from "./../../smart-contract/blockchain"; 

import Header from "../../components/Dashboard/Header"
import AddTodo from '../../components/Dashboard/AddTodo';
import TodoList from '../../components/Dashboard/TodoList';

const ContentBox = styled("Box")(({theme}) => ({
  marginTop: "0rem",
  padding: '0rem',
  [theme.breakpoints.down("sm")]: {margin: "0px"},
}))

const Dashboard = () => {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    const fetchAllTodos = async () => {
      try {
        const resp = await getAllTodos();
        if (resp) {
          // console.log({resp});
          setTodos(resp)
        }
      } catch (error) {
        console.log({error});
      }
    }

    fetchAllTodos();
  }, [])

  return (
    <ContentBox>
      <Stack sx={{width: "98vw"}}> {/* , height: '100vh' */}
        <Header />
        <Stack direction="column" spacing={3} sx={{margin: "0 auto"}}>
          <Stack sx={{flex: "1 1 auto", paddingTop: 3,  width: '90vw'}}>
              <AddTodo />
          </Stack>
          <Stack spacing={1} sx={{flex: "1 1 auto", py: 2, width: "90vw"}}>
            <TodoList todos={todos}/>
          </Stack>
        </Stack>
      </Stack> 
    </ContentBox>
  )
}

export default Dashboard