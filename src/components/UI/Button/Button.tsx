import {FC, ReactNode} from 'react'

export enum Colors {
  red = 'btn--red',
  green = 'btn--green'
}

interface ButtonProps {
  children: ReactNode,
  color: Colors,
  clickHandler?: () => void,
}

const Button: FC<ButtonProps> = (props) => {
  const classNames: string = ['btn', props.color].join(' ')

  return (
    <button
      onClick={props.clickHandler}
      className={classNames}
    >
      {props.children}
    </button>
  )
}

export default Button