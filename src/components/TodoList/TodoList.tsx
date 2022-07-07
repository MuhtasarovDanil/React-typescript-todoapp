import {FC} from 'react'
import TodoItem from '../TodoItem/TodoItem'
import {observer} from 'mobx-react-lite'
import ITodo from '../../types/ITodo'

interface TodoListProps {
  taskData: ITodo[]
}

const TodoList: FC<TodoListProps> = observer(({taskData}) => {
  return (
    <ul
      className='todo'
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