import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled} from '@mui/material';
import TodoItem from "./TodoItem";


const StyledBox = styled("Box")(({theme}) => ({
  textAlign: 'center',
  padding: '0rem',
  marginTop: '0rem',
  width: '95vw',
  alignContent: 'center'
}))

const TodoList = ({todos}) => {
  return (
    <StyledBox>
        <h1> Todo Tasks</h1>
        <TableContainer>
          <Table sx={{ minWidth: 650}} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell align="right">Completed</TableCell>
                <TableCell align="right">Remove</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {
                  todos.length > 0 ? (
                    todos.map((todo) => (
                      <TodoItem todo={todo}/>
                    ))
                  ) : (
                    <p>No todo task yet!</p> 
                  )
                }
            </TableBody>

          </Table>
        </TableContainer>
      </StyledBox>
  )
}

export default TodoList