import React, { Fragment } from "react";
import Header from "./Header";
import './Home.css';
import prideimg from './../../assets/1.png'
import ingredients from './../../assets/2.png';
import Data from "../../Data";
import {Carousel} from 'react-bootstrap';
import item1 from './../../assets/item.jpg'
import item2 from './../../assets/item2.jpg'

const blogitem = Data.map((item) => {
    return(
        <div className="col-md-4">
            <div className="box">
              <img src={item.img}></img>
              <h5>{item.title}</h5>
              <span>{item.time}</span>
              <h6>{item.price}</h6>
              </div>
              <button><a href="#">Order Now</a></button>
        </div>
    )
})

const Home = () => {
    return(
        <Fragment>
          <Header></Header>
          <section className="numbers">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h2>1287+</h2>
                        <h6>SAVINGS</h6>
                    </div>
                    <div className="col-md-3">
                        <h2>5786+</h2>
                        <h6>PHOTOS</h6>
                    </div>
                    <div className="col-md-3">
                        <h2>1440+</h2>
                        <h6>ROCKETS</h6>
                    </div>
                    <div className="col-md-3">
                        <h2>7110+</h2>
                        <h6>GLOBES</h6>
                    </div>
                </div>
            </div>
          </section>
          <section className="pride">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={prideimg} title="prideimg"></img>
                    </div>
                    <div className="col-md-6">
                        <h2>We pride ourselves on making real food from the best ingredients.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                        <button><a href="#">Learn More</a></button>
                    </div>
                </div>
            </div>
          </section>
          <section className="ingredients">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>We make everything by hand with the best possible ingredients.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <ul>
                            <li>Etiam sed dolor ac diam volutpat.</li>
                            <li>Erat volutpat aliquet imperdiet.</li>
                            <li>purus a odio finibus bibendum.</li>
                        </ul>
                        <button>
                            <a href="#">Learn More</a>
                        </button>
                    </div>
                    <div className="col-md-6">
                        <img src={ingredients} alt="ingredients"></img>
                    </div>
                </div>
            </div>
          </section>
          <section className="paralex">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2>When a man's stomach is full it makes no<br></br> difference whether he is rich or poor.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio<br></br>finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                        <a href="#">Watch Our Story</a>
                    </div>
                </div>
            </div>
          </section>
          <section className="blogs">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <h2>Explore Our Foods</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet<br></br> leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and<br></br> Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                    </div>
                </div>
                <div className="row">
                    {blogitem}
                </div>
            </div>
          </section>
          <section className="sliderx">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <h2>Testimonials</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <Carousel>
                            <Carousel.Item>
                                <img src={item1}></img>
                                <Carousel.Caption>
                                  <p>"Far far away, behind the word mountains, far from the countrice<br></br>Vokalia and Consonantia, there live the blind texts."</p>
                                  <span>Maccy Doe - Front End</span>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={item2}></img>
                                <Carousel.Caption>
                                  <p>"Far far away, behind the word mountains, far from the countrice<br></br>Vokalia and Consonantia, there live the blind texts. Separated they<br></br>live far from the countries Vokalia."</p>
                                  <span>Simab Dave - Web Designer</span>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
          </section>
        </Fragment>
    )
}

export default Home;