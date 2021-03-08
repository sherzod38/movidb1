import { Link } from 'react-router-dom';

import './Header.scss'

const Header = ({sidebarState, setSidebarState}) => {
    return (
        <div className="header">
            <div className="containers">
                <button onClick={() => setSidebarState(!sidebarState)}>menu</button>
                <Link className='header-link' to="/">Home Page</Link>
                <Link className='header-link' to="/populars">Popular Movies</Link>
                <Link className='header-link' to="/movies">Movies</Link>  
            </div>
            
            
        </div>
    )
}

export default Header;