import {FC} from 'react'
import Button, {Colors} from '../UI/Button/Button'
import ITodo from '../../types/ITodo'
import {observer} from 'mobx-react-lite'
import TodoStore from '../../store/TodoStore'

interface TodoItemProps {
  todoItem: ITodo
}

const TodoItem: FC<TodoItemProps> = observer(({todoItem}) => {
  return (
    <li className='task'>
      <div
        className='task-group'
      >
        <input
          type="checkbox"
          checked={todoItem.isComplete}
          onChange={() => TodoStore.completeTodo(todoItem)}
        />
        <p className='task-group__task'>
          {todoItem.task}
        </p>
      </div>
      <Button
        clickHandler={() => TodoStore.deleteTodo(todoItem.id)}
        color={Colors.red}
      >
        Удалить
      </Button>
    </li>
  )
})

export default TodoItem