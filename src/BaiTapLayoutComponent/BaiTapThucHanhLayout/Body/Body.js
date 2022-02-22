import React, { Component } from 'react'
import Banner from './Banner/Banner.js'
import Item from './Item/Item.js'

export default class Body extends Component {
  render() {
    return (
      <section id='body'>
          <Banner/>
          <Item/>
      </section>
    )
  }
}
