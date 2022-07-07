import {FC} from 'react'
import ISelect from '../../../types/ISelect'
import {observer} from 'mobx-react-lite'
import SelectStore from '../../../store/SelectStore'

interface SelectProps {
  options: ISelect[],
  value: string,
}

const Select: FC<SelectProps> = observer((props) => {
  return (
    <select
      onChange={e => SelectStore.getSelectedSort(e.target.value)}
      className='select'
      value={props.value}>
      {props.options.map(option =>
        <option key={option.value} value={option.value}>{option.text}</option>
      )}
    </select>
  )
})

export default Select