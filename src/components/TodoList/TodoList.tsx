import {FC} from 'react'
import classes from './todolist.module.sass'
import TodoItem from '../TodoItem/TodoItem'
import {observer} from 'mobx-react-lite'
import TodoStore from '../../store/TodoStore'

const TodoList: FC = observer(() => {
  return (
    <ul className={classes.todo} style={{marginTop: '50px'}}>
      { TodoStore.todos.map( item => <TodoItem todoItem={item} key={item.id} /> )}
    </ul>
  )
})

export default TodoList