import {FC} from 'react'
import classes from './header.module.sass'

const Header: FC = () => {
  return (
    <header className={classes.header}>
      <div className="container">
        <a href="#" className={classes.logo}>&copy; MuhtasarovDanil</a>
      </div>
    </header>
  )
}

export default Header