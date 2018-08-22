import React from 'react'
import './Right.css'
import photo from '../assets/img/photo.png'

export default props =>
  <React.Fragment>
    <img src={photo} alt="just me" className="my-photo"/>
    <h2 className="my-name">Gleider Mackedanz de Campos</h2>
  </React.Fragment>