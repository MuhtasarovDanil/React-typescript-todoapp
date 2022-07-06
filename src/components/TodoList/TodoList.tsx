import {FC} from 'react'
import classes from './todolist.module.sass'
import TodoItem from '../TodoItem/TodoItem'
import {observer} from 'mobx-react-lite'
import ITodo from '../../types/ITodo'

interface TodoListProps {
  taskData: ITodo[]
}

const TodoList: FC<TodoListProps> = observer(({taskData}) => {
  return (
    <ul
      className={classes.todo}
      style={{marginTop: '50px'}}
    >
      {taskData.map(todo =>
        <TodoItem
          todoItem={todo}
          key={todo.id}
        />
      )}
    </ul>
  )
})

export default TodoList