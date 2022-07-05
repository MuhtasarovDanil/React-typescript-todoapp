import {FC, ReactNode} from 'react'
import classes from './button.module.sass'

export enum Colors {
  red = 'red',
  green = 'green'
}

interface ButtonProps {
  children: ReactNode,
  color: Colors
}

const Button: FC<ButtonProps> = (props) => {
  /* TODO: REFACTOR */
  const classNames: string[] = [classes.btn, props.color]

  return (
    <button className={classNames.join(' ')}>
      {props.children}
    </button>
  )
}

export default Button