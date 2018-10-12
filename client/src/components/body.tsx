import * as React from 'react'
import './body.scss'
import Sidebar from './sidebar'

const Body = () => {
  return (
    <div className={"body"}>
      <Sidebar />
      <img src="/assets/img/Gearcolored.jpg" alt="Gear background"/>
    </div>
  )
}

export default Body