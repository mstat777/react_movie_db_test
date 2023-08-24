import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <h1>ze bingewatcher</h1>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"search"}>Search</Link>
            </nav>
        </header>
    )
}

export default Header;