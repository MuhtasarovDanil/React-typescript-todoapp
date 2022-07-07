import {FC} from 'react'
import Header from './components/Header/Header'
import TodoHeader from './components/TodoHeader/TodoHeader'
import TodoList from './components/TodoList/TodoList'
import TaskStore from './store/TodoStore'
import {observer} from 'mobx-react-lite'
import SelectStore from './store/SelectStore'

const App: FC = observer(() => {
  return (
    <div>
      <Header/>
      <section>
        <TodoHeader/>
      </section>
      <div className="container">
        <h2 className="task__title">Список задач</h2>
        {SelectStore.selectedOption === 'all' &&
          <TodoList taskData={TaskStore.allTasks} />
        }

        {SelectStore.selectedOption === 'active'
          ? <TodoList taskData={TaskStore.todos}/>
          : <TodoList taskData={TaskStore.completedTodos}/>
        }
      </div>
    </div>
  )
})

export default App