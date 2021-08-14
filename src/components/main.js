import React, { Component } from 'react';
import globe from '../assets/globe.png'
import name from '../assets/lorem.png'
import logo from '../assets/logo.png'
import playbar from '../assets/playbar.png'
import btn from '../assets/group.svg';
import './main.css'

export default class Main extends Component {

  clickHandler = ()=>{
    this.props.history.push('/home')
  }
  render() {
    console.log(this.props)
    return (
    <div className='main-wrapper'>
      <div className='name-wrapper'>
        <img className='img' src={name} alt='name'/>
      </div>
      <div className='log-wrapper'>
        <img className='img' src={logo} alt='logo'/>
      </div>
      <div className='btn-wrapper' onClick={this.clickHandler}> 
        <img className='img' src={btn} alt='btn'/>       
      </div>
      <div className='img-wrapper'>
        <img className='img globe' src={globe} alt='globe'/>
      </div>
      <div className='bar-wrapper'> 
        <img className='bar' src={playbar} alt='play'/>
      </div>
    </div>
    )
  }
}