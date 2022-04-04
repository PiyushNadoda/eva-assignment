import classes from './styles/navbar.module.css'
import logo from '../assets/svgs/logo.svg'

const Navbar = () => {
    return(
        <>
            <div className={classes.container}>
                <img src={logo} alt="logo" />
                <div className={classes.navlinks}>
                    <ul>
                        <li>About</li>
                        <li>Events</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <button className={classes['login-btn']}>LOG IN</button>
            </div>
        </>
    )
}

export default Navbar;