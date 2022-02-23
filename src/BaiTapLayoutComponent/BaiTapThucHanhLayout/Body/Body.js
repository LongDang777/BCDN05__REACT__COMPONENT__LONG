import React, { Component } from 'react'
import Banner from './Banner/Banner.js'
import ItemList from './Item/ItemList.js'


export default class Body extends Component {
  render() {
    return (
      <section id='body'>
          <Banner/>
          <ItemList/>
      </section>
    )
  }
}
