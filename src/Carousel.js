import React, { Component } from 'react';
import './Carousel.css';
import arrowLeft from './icons/ios-arrow-left.svg'
import arrowRight from './icons/ios-arrow-right.svg'

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {

            imageNumber: 1,
            numberOfImages: 4
        };
    
        this.nextImage = this.nextImage.bind(this);
        this.previousImage = this.previousImage.bind(this);
      }
    
    

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }
      
    nextImage () {
    if
    (this.state.imageNumber === this.state.numberOfImages) { 
    this.setState({
        imageNumber: 1
      });
  }
  
  else
  this.setState({
    imageNumber: this.state.imageNumber + 1
  });
}


  previousImage () {
      if 
      (this.state.imageNumber === 1) {
        this.setState({
            imageNumber: this.state.numberOfImages
          });
      }

      else 
      this.setState({
        imageNumber: this.state.imageNumber -1
      });
  }

  goToImage (index) {
    this.setState({
        imageNumber: index + 1
      });
  }

  handleKeyDown = (event) => {
    if(event.keyCode === 37 ){
        this.previousImage()
        }
    else if(event.keyCode === 39 ){
            this.nextImage()
            }    
  }

  render() {

    const url = `../images/carousel${this.state.imageNumber}.jpg`
    const images = [
        {
          thumbnail: '../images/carousel1.jpg'
        },
        {
            thumbnail: '../images/carousel2.jpg'
        },
        {
            thumbnail: '../images/carousel3.jpg'
        },
        {
            thumbnail: '../images/carousel4.jpg'
        }
    ]
        

    return (
      <div className="carousel-wrapper">
      <h1>Garousel.js</h1>
      
            <div className="carousel-image">
            <img src={url} />
        
            </div>
        <div className="carousel-thumbnails">
             

                {images.map((image, index) => {
                  return (
                <div 
                className={
                    'carousel-thumbnail' +     
                    (this.state.imageNumber - 1 === index ? '-active' : '') 
                  }>
                  <img 
                  onClick={() => this.goToImage(index)} 
                  src={image.thumbnail}/>
                </div>  
                      )
                
                        })}
            </div> 
      
        <div className="carousel-controls">
            <img src={arrowLeft} onClick={this.previousImage} />
            <img src={arrowRight} onClick={this.nextImage} />
        </div>
      </div>
    );
  }
}

export default Carousel;
