import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const bgBlack = { backgroundColor: '#000000', color: '#f4f4f4' };

    return (
        <nav className="navbar navbar-expand-lg rounded-1 " style={{backgroundColor:'',color:"black",marginLeft:'-20px'}} >
            <div className="container-fluid">
                <NavLink className=" text-decoretion-none navbar-brand" to='/'>Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className=" text-decoretion-none nav-link active" aria-current="page" to='/'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className=" text-decoretion-none nav-link" to='/auth'>Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className=" text-decoretion-none nav-link" to='/auth-signup'>Sign up</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className=" text-decoretion-none nav-link dropdown-toggle" to='/' id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown link
                            </NavLink>
                            <ul className="dropdown-menu bg-light" aria-labelledby="navbarDropdownMenuLink">
                                <li><NavLink className="text-dark text-decoretion-none dropdown-item bg-light" to='/'>Action</NavLink></li>
                                <li><NavLink className="text-dark text-decoretion-none dropdown-item bg-light" to='/'>Another action</NavLink></li>
                                <li><NavLink className="text-dark text-decoretion-none dropdown-item bg-light" to='/'>Something else here</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;