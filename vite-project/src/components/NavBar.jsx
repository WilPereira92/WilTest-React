import NavBarStyles from '../styles/NavBar.module.css'
const NavBar = () => {
  return (
    <div className={NavBarStyles.container}>
        <h1 className={NavBarStyles.titleApp}>Mi ToDoListApp</h1>
        <ul className={NavBarStyles.listUl}>
            <li>Home</li>
            <li>About us</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default NavBar