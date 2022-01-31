function IntroSlider() {
  return (
    <div className="intro-slider-container">
      <div
        className="owl-carousel owl-simple owl-light owl-nav-inside"
        data-toggle="owl"
        data-owl-options='{"nav": false}'
      >
        <div
          className="intro-slide"
          style={{
            backgroundImage:
              'url(assets/images/demos/demo-2/slider/slide-1.jpg)',
          }}
        >
          <div className="container intro-content">
            <h3 className="intro-subtitle">Bedroom Furniture</h3>
            <h1 className="intro-title">
              Find Comfort <br />
              That Suits You.
            </h1>

            <a href="category.html" className="btn btn-primary">
              <span>Shop Now</span>
              <i className="icon-long-arrow-right"></i>
            </a>
          </div>
        </div>

        <div
          className="intro-slide"
          style={{
            backgroundImage:
              'url(assets/images/demos/demo-2/slider/slide-2.jpg)',
          }}
        >
          <div className="container intro-content">
            <h3 className="intro-subtitle">Deals and Promotions</h3>
            <h1 className="intro-title">
              Ypperlig <br />
              Coffee Table <br />
              <span className="text-primary">
                <sup>$</sup>49,99
              </span>
            </h1>

            <a href="category.html" className="btn btn-primary">
              <span>Shop Now</span>
              <i className="icon-long-arrow-right"></i>
            </a>
          </div>
        </div>

        <div
          className="intro-slide"
          style={{
            backgroundImage:
              'url(assets/images/demos/demo-2/slider/slide-3.jpg)',
          }}
        >
          <div className="container intro-content">
            <h3 className="intro-subtitle">Living Room</h3>
            <h1 className="intro-title">
              Make Your Living Room <br />
              Work For You.
              <br />
              <span className="text-primary">
                <sup className="text-white font-weight-light">from</sup>
                <sup>$</sup>9,99
              </span>
            </h1>

            <a href="category.html" className="btn btn-primary">
              <span>Shop Now</span>
              <i className="icon-long-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>

      <span className="slider-loader text-white"></span>
    </div>
  );
}

export default IntroSlider;
