import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        
       <div className=''>
           <h1 className='text-center border border-success'>Hello, {this.props.name}</h1>
       </div>
    )
  }
}
