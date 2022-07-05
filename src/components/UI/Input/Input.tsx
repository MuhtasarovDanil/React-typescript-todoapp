import {FC} from 'react';
import classes from './input.module.sass'

interface InputProps {
  placeholder: string,
  type?: string,
  additionalClass?: string
}

const Input: FC<InputProps> = (props) => {
  const classNames: string[] = [classes.input, props.additionalClass ?? '']

  return (
    <input className={classNames.join('')} type={props.type} placeholder={props.placeholder}/>
  )
}

export default Input