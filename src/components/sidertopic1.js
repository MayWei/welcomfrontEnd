import React, { Component } from 'react';
import logo from '../assets/logo.png'
import name from '../assets/lorem.png'
import './siderHome.css'
import { withRouter } from 'react-router-dom';

class siderTopic1 extends Component {

  clickHandler=()=>{
    this.props.history.push('/accordion');
  }
  render() {
    console.log(this.props)
    return (
      <div>
          <div className='logo-container'>
            <img src={logo} alt='logo'/>
          </div>
          <div className='name-container'>
            <img src={name} alt='name'/>
          </div>
          <p>
          Sed porda, lorem a sodales rhoneus, neque ligula dictum
        libero, sit amet
          </p>
          <p>
          Sed porda, lorem a sodales rhoneus, neque ligula dictum
        libero, sit amet
          </p>
          <p>
          Sed porda, lorem a sodales rhoneus, neque ligula dictum
        libero, sit amet
          </p>
          
      </div>
    )
  }
}

export default withRouter(siderTopic1)