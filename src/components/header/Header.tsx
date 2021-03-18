import React from 'react';
import '../header/Header.css';

const Header = (props:any) => {

    return (
        <div className="header1">
            <header>
                <a href="/" className="logo">
                    <img className="logoPic" src={props.pic} alt=""/>
                </a>
                <ul className="header_list">
                    <li className="header_link"><a href="/">Docs</a></li>
                    <li className="header_link"><a href="/">About</a></li>
                    <li className="header_link_list"><a href="/">Characters</a></li>
                </ul>
            </header>
        </div>
    );
}

export default Header;