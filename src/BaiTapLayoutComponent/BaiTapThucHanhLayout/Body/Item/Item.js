import React, { Component } from 'react'

export default class Item extends Component {
  cardImg = "https://picsum.photos/500/325"
  render() {
    return (
      <div className='item container px-lg-5'>
        <div className='row gx-lg-5'>
          <div className='col-lg-3 mb-5 text-center'>
            <div className="card border-0 h-100" >
              <img src={this.cardImg} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary mt-lg-4">Find Our Moment</a>
              </div>
            </div>
          </div>
          <div className='col-lg-3 mb-5 text-center'>
            <div className="card border-0 h-100" >
              <img src={this.cardImg} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary mt-lg-4">Find Our Moment</a>
              </div>
            </div>
          </div>
          <div className='col-lg-3 mb-5 text-center'>
            <div className="card border-0 h-100" >
              <img src={this.cardImg} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary mt-lg-4">Find Our Moment</a>
              </div>
            </div>
          </div>
          <div className='col-lg-3 mb-5 text-center'>
            <div className="card border-0 h-100" >
              <img src={this.cardImg} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary mt-lg-4">Find Our Moment</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
