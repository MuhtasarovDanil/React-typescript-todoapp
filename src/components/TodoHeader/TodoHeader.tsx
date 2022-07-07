import {FC} from 'react'
import Input from '../UI/Input/Input'
import Button, {Colors} from '../UI/Button/Button'
import TodoStore from '../../store/TodoStore'
import Select from '../UI/Select/Select'
import SelectStore from '../../store/SelectStore'
import TaskStore from '../../store/TaskStore'
import {observer} from 'mobx-react-lite'

const TodoHeader: FC = observer(() => {
  const submitTask = (): void => {
    const newTodoItem = {id: Date.now(), task: TaskStore.task, isComplete: false}

    TodoStore.addTodo(newTodoItem)
    TaskStore.clearTask()
  }

  return (
    <div className='container'>
      <form
        className='form'
        onSubmit={e => e.preventDefault()}>
        <Input
          value={TaskStore.task}
          placeholder={'Добавить задачу'}
          onChangeHandler={e => TaskStore.changeTask(e.target.value)}
        />
        <Button
          clickHandler={submitTask}
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