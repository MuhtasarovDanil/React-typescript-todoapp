import {makeAutoObservable} from 'mobx'
import ITodo from '../types/ITodo'

class TodoStore {
  public todos: ITodo[] = [
    {
      id: 1,
      isComplete: false,
      task: 'Create react app'
    },
    {
      id: 2,
      isComplete: false,
      task: 'Second task'
    },
  ]

  constructor() {
    makeAutoObservable(this)
  }

  addTodo(todoItem: ITodo): void {
    this.todos.push(todoItem)
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  completeTodo(todo: ITodo): void {
    todo.isComplete = !todo.isComplete
  }
}

export default new TodoStore()