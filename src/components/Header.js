import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-300">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Boro mia</Link>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Home</Link>
                <Link to="/login" className="btn btn-ghost normal-case text-xl">Login</Link>
                <Link to="/register" className="btn btn-ghost normal-case text-xl">Register</Link>
            </div>
        </div>
    );
};

export default Header;