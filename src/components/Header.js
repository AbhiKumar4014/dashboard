import React from "react";
import "./Header.css"

function Header() {
    return (
        <header className="Header">
            <img src="https://www.gravitee.io/hubfs/graphql.png" alt="GraphQL" className="logo" />
            <nav className="Nav">
                {/* <a href="/">Home</a> */}
            </nav>
        </header>
    );
}
export default Header;

