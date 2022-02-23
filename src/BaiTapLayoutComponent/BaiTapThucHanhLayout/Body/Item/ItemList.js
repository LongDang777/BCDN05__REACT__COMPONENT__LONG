import React, { Component } from 'react'
import Item from './Item.js'

export default class ItemList extends Component {
  render() {
    return (
      <div className='container px-lg-5'>
          <div className='row'>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          </div>
      </div>
    )
  }
}
