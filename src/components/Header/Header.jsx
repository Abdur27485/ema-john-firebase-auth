import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Header = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const handleSignOutUser = () => {
        signOutUser()
            .then(() => {
                console.log('signed Out')
            })
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='header-links-container'>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                {
                    user ?
                        <div className='user-info-nav'>
                            <p>{user.email}</p>
                            <a onClick={handleSignOutUser}>Sign Out</a>
                        </div>
                        :
                        <>
                            <Link to="/login">Login</Link>
                            <Link to='/signup'>Sign Up</Link>
                        </>
                }
            </div>
        </nav>
    );
};

export default Header;