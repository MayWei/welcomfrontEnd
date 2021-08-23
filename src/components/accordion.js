import React, { Component } from 'react';
import './accordion.css'

export default class Accordion extends Component {

  state={
	  aa:'',
	  bb:''
  };

  clickHandler=()=>{
    this.props.history.goBack();
  }

  render() {
    return (
      <div className='accord-container'>
        <div className ='accord-sider'>
        <img src={require(`../assets/Nulla.png`).default} alt=''/>
        <p>Sed porda, lorem a sodales rhoneus, neque ligula dictum
        libero, sit amet</p>
        </div>
        <div className="accord-content">
             <div className='header'>LOREN IPSUM</div>
            <div className='item'>Sed porda, lorem a sodales rhoneus, neque ligula dictum
              libero, sit ametSed porda, lorem a sodales rhoneus, neque ligula dictum
              libero, sit amet
            </div>
            <div className='header'>LOREN IPSUM</div>
            <div className='header'>LOREN IPSUM</div>
            <div className='header'>LOREN IPSUM</div>
            <div className='header'>LOREN IPSUM</div>
            <div className='header'>LOREN IPSUM</div>
            <div className='header'>LOREN IPSUM</div>
        </div>
        <div className="navigation">
          <div className='back' onClick={this.clickHandler}>
            <img src={require(`../assets/back.png`).default} alt='back'/>
          </div>
          <div className='next'>
            <img  src={require(`../assets/next.png`).default} alt='back'/>
          </div>
        </div>
      </div>
    )
  }
}
