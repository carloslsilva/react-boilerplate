import { Link } from 'react-router-dom'
import styles from './Layout.module.scss'

const Layout = ({ children }) => (
  <>
    <Nav />
    <main>{children}</main>
  </>
)

export default Layout

const Nav = () => (
  <nav className={styles.nav}>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/another'>Another</Link>
      </li>
    </ul>
  </nav>
)
