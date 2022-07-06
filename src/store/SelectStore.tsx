import {makeAutoObservable} from 'mobx'
import ISelect from '../types/ISelect'

class SelectStore {
  public options: ISelect[] = [
    {value: 'all', text: 'Все задачи'},
    {value: 'active', text: 'Незваершенные задачи'},
    {value: 'inactive', text: 'Завершенные задачи'}
  ]

  public selectedOption: string = 'all'

  constructor() {
    makeAutoObservable(this)
  }

  getSelectedSort(sort: string): void {
    console.log(sort)
    this.selectedOption = sort
  }
}

export default new SelectStore()