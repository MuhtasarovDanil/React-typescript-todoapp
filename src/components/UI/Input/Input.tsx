import {FC, ChangeEvent} from 'react'

interface InputProps {
  placeholder: string,
  type?: string,
  value?: string,
  additionalClass?: string,
  onChangeHandler?: (e: ChangeEvent<HTMLInputElement>) => void,
}

const Input: FC<InputProps> = (props) => {
  const classNames: string = ['input', props.additionalClass ?? ''].join(' ')

  return (
    <input
      value={props.value}
      className={classNames}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChangeHandler}
    />
  )
}

export default Input