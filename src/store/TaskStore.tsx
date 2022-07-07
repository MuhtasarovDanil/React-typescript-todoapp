import {makeAutoObservable} from 'mobx'

class TaskStore {
  public task: string = ''

  constructor() {
    makeAutoObservable(this)
  }

  changeTask(value: string): void {
    this.task = value
  }

  clearTask(): void {
    this.task = ''
  }
}

export default new TaskStore()