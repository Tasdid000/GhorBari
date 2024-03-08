import React, { Component } from 'react';
import './bannerslider.css'; // Import your CSS file

class BannerSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0,
        };
    }

    componentDidMount() {
        // Set up auto-slide interval when the component mounts
        this.autoSlideInterval = setInterval(this.handleNextSlide, 3000); // Adjust the interval duration (in milliseconds) as needed
    }

    componentWillUnmount() {
        // Clear the auto-slide interval when the component unmounts
        clearInterval(this.autoSlideInterval);
    }

    handleDotClick = (index) => {
        this.setState({ currentSlide: index });
    };

    handleNextSlide = () => {
        this.setState((prevState) => ({
            currentSlide: (prevState.currentSlide + 1) % this.props.slides.length,
        }));
    };

    handlePrevSlide = () => {
        this.setState((prevState) => ({
            currentSlide: (prevState.currentSlide - 1 + this.props.slides.length) % this.props.slides.length,
        }));
    };

    render() {
        const { currentSlide } = this.state;
        const { slides } = this.props;

        const sliderStyle = {
            backgroundImage: `url(${require(`../images/${slides[currentSlide].image}`).default})`,
        };

        return (
            <div className="banner-slider" style={sliderStyle} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <div className="slider-content">
                    <h2>{slides[currentSlide].text}</h2>
                </div>
                <div className="slider-dots">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            onClick={() => this.handleDotClick(index)}
                            className={currentSlide === index ? 'active' : ''}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default BannerSlider;
