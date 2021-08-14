import React, { Component } from 'react';
import logo from '../assets/logo.png'
import name from '../assets/lorem.png'
import './siderHome.css'
import { withRouter } from 'react-router-dom';

class siderHome extends Component {

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
          <button 
          onClick={this.clickHandler}
          >begin</button>
          
      </div>
    )
  }
}

export default withRouter(siderHome)