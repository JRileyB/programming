import * as React from 'react'
import Header from './components/header'
import Body from './components/body'

import './styles.scss'

export default class App extends React.Component<any, any> {
 render() {
     return (
         <div className={'main'}>
             <Header />
             <Body />
        </div> 
    )
 }
}