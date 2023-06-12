
import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import { Link } from 'react-router-dom'


export default function Navigation() {
    const { theme, toggle, dark } = useContext(ThemeContext)
    return (
        <>
            <nav>
                <div className='topnav' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                    <Link to='/'>Home</Link>
                    <Link to='/news'>News</Link>
                    <Link to='/contact'>Contact</Link>



                    <div className='switch-mode' onClick={toggle}
                        style={{
                            backgroundColor: theme.backgroundColor,
                            color: theme.color,
                            outline: 'none',
                            cursor: 'pointer',
                        }} data-testid="toggle-theme-btn"
                    >
                        Switch Nav to {!dark ? 'Dark' : 'Light'} mode
                    </div>

                </div>
            </nav >

        </>
    )
}
