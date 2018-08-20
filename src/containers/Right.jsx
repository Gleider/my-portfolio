import React, { Component } from 'react'
import photo from '../assets/img/photo.png'
import './Right.css'
class Right extends Component {
  render() {
    return (
      <div className='right-info'>
        <img src={photo} alt="my photo" className="my-photo"/>
        <h2 className="my-name">Gleider Mackedanz de Campos</h2>
      </div>
    );
  }
}

export default Right