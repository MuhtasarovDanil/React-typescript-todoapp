import { FC} from 'react'
import classes from './select.module.sass'
import ISelect from '../../../types/ISelect'
import {observer} from 'mobx-react-lite'
import SelectStore from "../../../store/SelectStore";

interface SelectProps {
  options: ISelect[],
  value: string,
}

const Select: FC<SelectProps> = observer((props) => {
  return (
    <select
      onChange={e => SelectStore.getSelectedSort(e.target.value)}
      className={classes.select}
      style={{margin: '20px auto'}}
      value={props.value}>
      {props.options.map(option =>
        <option key={option.value} value={option.value}>{option.text}</option>
      )}
    </select>
  )
})

export default Select