import {FC} from 'react'
import Header from './components/Header/Header'
import TodoHeader from "./components/TodoHeader/TodoHeader";

const App: FC = () => {
  return (
    <div>
      <Header/>
      <section>
        <TodoHeader />
      </section>
    </div>
  )
}

export default App