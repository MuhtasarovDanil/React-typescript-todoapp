import {FC, useState} from 'react'
import Input from '../UI/Input/Input'
import Button, {Colors} from '../UI/Button/Button'
import classes from './todoheader.module.sass'
import TodoStore from '../../store/TodoStore'
import Select from '../UI/Select/Select'
import SelectStore from '../../store/SelectStore'
import {observer} from 'mobx-react-lite'

const TodoHeader: FC = observer(() => {
  /* TODO: MOBX STATES */
  const [task, setTask] = useState('')

  return (
    <div className='container'>
      <form
        className={classes.form}
        onSubmit={e => e.preventDefault()}>
        <Input
          value={task}
          placeholder={'Добавить задачу'}
          onChangeHandler={e => setTask(e.target.value)}
        />
        <Button
          clickHandler={() => {
              const newTask = {id: Date.now(), task: task, isComplete: false}
              TodoStore.addTodo(newTask)
              setTask('')
            }
          }
          color={Colors.green}>
          Добавить
        </Button>
      </form>
      <Select
        options={SelectStore.options}
        value={SelectStore.selectedOption}
      />
    </div>
  )
})

export default TodoHeader