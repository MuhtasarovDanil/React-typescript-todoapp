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
    }
  ]

  public completedTodos: ITodo[] = []

  public allTasks: ITodo[] = [
    ...this.todos,
    ...this.completedTodos
  ]

  constructor() {
    makeAutoObservable(this)
  }

  addTodo(todoItem: ITodo): void {
    this.todos.push(todoItem)
    this.allTasks.push(todoItem)
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id)
    this.completedTodos = this.completedTodos.filter(todo => todo.id !== id)
    this.allTasks = this.allTasks.filter(todo => todo.id !== id)
  }

  completeTodo(todo: ITodo): void {
    todo.isComplete = !todo.isComplete
    this.getCompleteTodo(todo)
  }

  getCompleteTodo(todo: ITodo): void {
    this.deleteTodo(todo.id)
    todo.isComplete
      ? this.completedTodos.push(todo)
      : this.addTodo(todo)
  }
}

export default new TodoStore()