import React, { Component } from 'react'
import Image from './Image'
import './Right.css'
import Content from './Content'
class Right extends Component {
  render() {
    return (
      <div className='right-info'>
        <Image />
        <Content />
      </div>
    );
  }
}

export default Right