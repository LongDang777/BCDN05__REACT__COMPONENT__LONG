import React, { Component } from 'react'
import Header from '../../BaiTapLayoutComponent/BaiTapThucHanhLayout/Header/Header.js'
import Body from '../../BaiTapLayoutComponent/BaiTapThucHanhLayout/Body/Body.js'
import Footer from '../../BaiTapLayoutComponent/BaiTapThucHanhLayout/Footer/Footer.js'

export default class HomePage extends Component {
  render() {
    return (
      <div className='HomePage'>
          <Header/>
          <Body/>
          <Footer/>
      </div>
    )
  }
}
