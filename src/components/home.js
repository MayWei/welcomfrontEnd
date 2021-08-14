import React, { Component } from 'react';
import './home.css'
import SiderHome from './siderHome';
import Sidertopic1 from './sidertopic1';

const topics=['1','2','3','4','5']
export default class Home extends Component {

  clickHandler=(index)=>{
    console.log(this.props);
    this.props.history.push(`/topics/${index+1}`);
  }

  homeClickHandler=()=>{
    this.props.history.push(`/home`)
  }

  render() {
    const id = this.props.match.params.id;
    let sider;
    if(id){
      if(id==='1'){
        sider=<Sidertopic1/>
      }else{
        sider=null;
      }
    }else{
      sider= <SiderHome />;
    }

    let img; 

    if(id){
      if(id==='1'||id==='2'){
        img=<img className='home-topic' src={require(`../assets/topic${id}.png`).default} alt='topic'/>;
      }else{
        img=null;
      }      
    }else{
      img=<img className='home-topic' src={require(`../assets/topic0.png`).default} alt='topic'/>;
    }
    
    return (
      <div className='home-wrapper'>
        <div className='sider'>
          {sider}
        </div> 
        <div className='content'>
          {img}
        </div> 
        <div className='footer'>
          <div onClick={this.homeClickHandler}>Home</div>
          {
            topics.map((topic,index)=>(<div key={topic} 
                  onClick={()=>this.clickHandler(index)}>
              {`Topic${topic}`}
            </div>))
          }
        </div>
      </div>
    )
  }
}