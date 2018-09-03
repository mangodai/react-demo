import React, {Component} from 'react'
import logo from './logo.svg'
import './app.css'

export default class App extends Component{
    render() {
        return(
            <div className='app'>
                <img src={logo} alt="App-Logo"/>
                <p>Hello DaiChao</p>
            </div>
        )
    }
}