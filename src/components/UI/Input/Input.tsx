import {FC, ChangeEvent} from 'react'
import classes from './input.module.sass'

interface InputProps {
  placeholder: string,
  type?: string,
  value?: string,
  additionalClass?: string,
  onChangeHandler?: (e: ChangeEvent<HTMLInputElement>) => void,
}

const Input: FC<InputProps> = (props) => {
  const classNames: string[] = [classes.input, props.additionalClass ?? '']

  return (
    <input value={props.value} className={classNames.join('')} type={props.type} placeholder={props.placeholder}
           onChange={props.onChangeHandler}/>
  )
}

export default Input