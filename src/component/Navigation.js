
// import React from 'react'
// import { useContext } from 'react'
// import { ThemeContext } from './ThemeContext'
// import { Link } from 'react-router-dom'


// export default function Navigation() {
//     const { theme, toggle, dark } = useContext(ThemeContext)
//     return (
//         <>
//             <nav>
//                 <div className='topnav' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
//                     <Link to='/'>Home</Link>
//                     <Link to='/news'>News</Link>
//                     <Link to='/contact'>Contact</Link>



//                     <div className='switch-mode' onClick={toggle}
//                         style={{
//                             backgroundColor: theme.backgroundColor,
//                             color: theme.color,
//                             outline: 'none',
//                             cursor: 'pointer',
//                         }} data-testid="toggle-theme-btn"
//                     >
//                         Switch Nav to {!dark ? 'Dark' : 'Light'} mode
//                     </div>

//                 </div>
//             </nav >

//         </>
//     )
// }

// Lab 4-using materialize

import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavItem, Icon } from 'react-materialize'

export default function Navigation() {
    return (
        <Navbar className='menu'
            alignLinks='left'
            brand={<span className='brand-logo' >Films Card <Icon large right>collections</Icon></span>}
            id='mobile-nav'
            menuIcon={<Icon>menu</Icon>}
        >
            <NavItem> <Link to='/' ><Icon left>home</Icon>Home</Link>
            </NavItem>
            <NavItem> <Link to='/about' ><Icon left>info</Icon>About us</Link>
            </NavItem>
            <NavItem> <Link to='/new' ><Icon left>fiber_new</Icon>News</Link>
            </NavItem>
            <NavItem> <Link to='/contact' ><Icon left>contacts</Icon>Contact</Link>
            </NavItem>
        </Navbar>
    )
}
