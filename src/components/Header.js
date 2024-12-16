import React from "react";
import "./Header.css"

function Header() {
    return (
        <header className="Header">
            <img src="https://tecnics.com/wp-content/uploads/2020/03/logo1.png" alt="Company Logo" className="logo" />
            <nav className="Nav">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/profile">Profile</a>
                <a href="/login">sign-in/sign-up</a>
            </nav>
        </header>
    );
}
export default Header;

