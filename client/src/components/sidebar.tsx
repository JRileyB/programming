import * as React from 'react'
import './sidebar.scss'

const Sidebar = () => {
    return (
        <div className={'sidebar'}>
            <a href="/">
                <img src="/assets/img/facebook.png" alt=""/>
            </a>
            <a href="/">
                <img src="/assets/img/linkedin.png" alt=""/>
            </a>
            <a href="/">
                <img src="/assets/img/email.png" alt=""/>
            </a>
        </div>
    )

}

export default Sidebar