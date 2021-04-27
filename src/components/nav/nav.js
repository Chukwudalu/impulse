import React from 'react';
import {Link} from 'react-router-dom';
import {StyledHeader} from './nav.styles'


const Nav = () => {
    return (
        <StyledHeader>
            <div className='nav-container'>
                <Link to='/'><h2>Impulse</h2></Link>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to=''>Features</Link></li>
                        <li><Link to=''>Docs</Link></li>
                    </ul>
                </nav>
            </div>
        </StyledHeader>
    )
}




export default Nav;