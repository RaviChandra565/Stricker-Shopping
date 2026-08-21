import React, { Component } from 'react'
import './App.css'
import Header, { Header2 } from './components/Header'
import Home from './components/Home'
import Footer from './components/footer/Footer'
import './index.css'


export class App extends Component {
  render() {
    return (
      <>
      <div>App</div>
      <Header/>
      <Home />
      <Footer/>
      {/* <Header2/> */}
      
      </>
    )
  }
}

export default App