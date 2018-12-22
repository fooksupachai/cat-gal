import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import './service.js';

class Cat extends Component {

  render() {
    
    const IMAGES =
    [{
            src: "../../images/1.jpg",
            thumbnail: "../../images/1.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            caption: "cat 1"
            },
            {
              src: "../../images/2.jpg",
              thumbnail: "../../images/2.jpg",
              thumbnailWidth: 320,
              thumbnailHeight: 174,
              caption: "cat 2"
            },
            {
              src: "../../images/3.jpg",
              thumbnail: "../../images/3.jpg",
              thumbnailWidth: 320,
              thumbnailHeight: 174,
              caption: "cat 3"
            },
            {
              src: "../../images/4.jpg",
              thumbnail: "../../images/4.jpg",
              thumbnailWidth: 320,
              thumbnailHeight: 174,
              caption: "cat 4"
            },
            {
              src: "../../images/5.jpg",
              thumbnail: "../../images/5.jpg",
              thumbnailWidth: 320,
              thumbnailHeight: 174,
              caption: "cat 5"
            },
            {
              src: "../../images/6.jpg",
              thumbnail: "../../images/6.jpg",
              thumbnailWidth: 320,
              thumbnailHeight: 174,
              caption: "cat 6"
            },
            {
              src: "../../images/7.jpg",
              thumbnail: "../../images/7.jpg",
              thumbnailWidth: 320,
              thumbnailHeight: 174,
              caption: "cat 7"
            },
            {
              src: "../../images/8.jpg",
              thumbnail: "../../images/8.jpg",
              thumbnailWidth: 320,
              thumbnailHeight: 174,
              caption: "cat 8"
            },
            {
              src: "../../images/9.jpg",
              thumbnail: "../../images/9.jpg",
              thumbnailWidth: 320,
              thumbnailHeight: 174,
              caption: "cat 9"
            },
            {
              src: "../../images/10.jpg",
              thumbnail: "../../images/10.jpg",
              thumbnailWidth: 320,
              thumbnailHeight: 174,
              caption: "cat 10"
            },
            {
              src: "../../images/11.jpg",
              thumbnail: "../../images/11.jpg",
              thumbnailWidth: 320,
              thumbnailHeight: 174,
              caption: "cat 11"
            },
            {
              src: "../../images/12.jpg",
              thumbnail: "../../images/12.jpg",
              thumbnailWidth: 320,
              thumbnailHeight: 174,
              caption: "cat 12"
            },
            {
              src: "../../images/13.jpg",
              thumbnail: "../../images/13.jpg",
              thumbnailWidth: 320,
              thumbnailHeight: 174,
              caption: "cat 13"
            },
            {
              src: "../../images/14.jpg",
              thumbnail: "../../images/14.jpg",
              thumbnailWidth: 320,
              thumbnailHeight: 174,
              caption: "cat 14"
            },
            {
              src: "../../images/15.jpg",
              thumbnail: "../../images/15.jpg",
              thumbnailWidth: 320,
              thumbnailHeight: 174,
              caption: "cat 15"
  }]
    
    return (
      <div >
           <Gallery images={IMAGES}/>
      </div>
    );
  }
}

export default Cat;
