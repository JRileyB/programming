import * as React from 'react'
import './header.scss'

function generateLinks() {
    return [
        <a href="/home">Home</a>,
        <a href="/resume">Resume</a>,
        <a href="/portfolio">Portfolio</a>,
        <a href="/about">About</a>,
        <a href="/contact">Contact</a>
    ]
}

const Header = () => {
    return (
        <header className={'header'}>
            <img src="/assets/img/logovector.svg" alt="Riley & Kirsten Bateman Logo" />
            <div></div>
            <div className={'linksBig'}>
                {generateLinks()}
            </div>
            <div className={'linksSmall'}>
                {generateLinks()}
            </div>
        </header>
    )
}

export default Header
