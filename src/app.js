import React, {Component} from 'react'
import Card from './Card'
import data from './data/data'
import './style.scss'

// Class App component
class App extends Component {

    constructor( props ) {
        super( props );
        this.state = {
          slides: data.slides,
          slide: data.slides[0]
        }
    }

    nextSlide = () => {
      const newIndex = this.state.slide.index+1
      this.setState({
        slide: data.slides[newIndex]
      })
    }
    prevSlide = () => {
      const newIndex = this.state.slide.index-1
      this.setState({
        slide: data.slides[newIndex]
      })
    }
    currentSlide = (slideIndex) => {
      const newIndex = slideIndex
      this.setState({
        slide: data.slides[newIndex]
      })
    }

    loopSlides = () => {
      const currentIndex = this.state.slide.index
      const newIndex = this.state.slide.index+1
      const SlidesLength = data.slides.length-1
      this.setState({
        slide: (currentIndex < SlidesLength )? data.slides[newIndex] : data.slides[0]
      })
    }

    stopSlideLooper = () => {
      clearInterval(this.timerID);
    }

    startSlideLooper = () => {
      this.timerID = setInterval(
        () => this.loopSlides(),
          1500
      );
    }

    componentDidMount() {
      this.timerID = setInterval(
        () => this.loopSlides(),
          1600
      );
    }

    render() {
      const { slides, slide } = this.state
      return (

        <div className="display-container">
          <div className={`slider active-slide-${slide.index}`}>
            <div className="slider-wrapper"
            style={{
              "transform": `translateX(-${slide.index*100/slides.length}%)`
            }}>
              <>
              {slides.map(slide =>
                <Card
                key={slide.index}
                slide={slide}
                 />
              )}
              </>
           </div>
        </div>

        <div className="slider-controls"
                      onMouseOver={() => this.stopSlideLooper() }
                      onMouseOut={() => this.startSlideLooper()}>
        <button className="button display-left"
        onClick={ () => this.prevSlide() }
        disabled={slide.index===0}
        >&#10094;</button>

        <div className="indicators">
          <div className="indicatiors-wrapper">
            {slides.map(slide =>
              <span key={slide.index}
              className={`indicator `+((slide.index===this.state.slide.index) ? `active-slide`:'')}
              onClick={ () => this.currentSlide(slide.index) }></span>
             )}
          </div>
        </div>

        <button className="button display-right"
        onClick={ () => this.nextSlide() }
        disabled={slide.index===data.slides.length-1}
        >&#10095;</button>
        </div>
      </div>
     )
   }
 }
export default App
