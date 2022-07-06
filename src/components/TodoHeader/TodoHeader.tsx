import {FC} from 'react'
import Input from '../UI/Input/Input'
import Button, {Colors} from '../UI/Button/Button'
import classes from './todoheader.module.sass'

const TodoHeader: FC = () => {
  return (
    <div className='container'>
      <form className={classes.form} onSubmit={e => e.preventDefault()}>
        <Input placeholder={'Добавить задачу'}/>
        <Button color={Colors.green}>Добавить</Button>
      </form>
    </div>
  )
}

export default TodoHeader