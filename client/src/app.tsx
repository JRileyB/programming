import * as React from 'react'

const message = 'This is my super cool message'

export default class App extends React.Component<any, any> {
 render() {
     return (
         <div>
         <div>{message}</div>
        <img width={400} src="http://cdn.kickvick.com/wp-content/uploads/2015/09/cutest-bunny-rabbits.jpg" alt="some bunny"/>
        </div> 
    )
 }
}