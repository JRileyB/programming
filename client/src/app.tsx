import * as React from 'react'
import Header from './components/header'
import './styles.css'

export default class App extends React.Component<any, any> {
 render() {
     return (
         <div className={'main'}>
             <Header />
        </div> 
    )
 }
}