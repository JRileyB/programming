import * as React from 'react'
import './header.scss'


const Header = () => {
return (
    <header className={'header'}>
        <img src="/assets/img/logovector.svg" alt="Riley & Kirsten Bateman Logo"/>
        <div>Our fancy pants website</div>
        <div className={'links'}>
            <a href="/home">Home</a>
            <a href="/resume">Resume</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </div>
    </header>
)

}

export default Header
