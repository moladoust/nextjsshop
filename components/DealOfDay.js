function DealOfDay() {
  return (
    <div className="bg-light deal-container pt-5 pb-3 mb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="deal">
              <div className="deal-content">
                <h4>Limited Quantities</h4>
                <h2>Deal of the Day</h2>

                <h3 className="product-title">
                  <a href="product.html">POÄNG</a>
                </h3>

                <div className="product-price">
                  <span className="new-price">$149.00</span>
                  <span className="old-price">Was $240.00</span>
                </div>

                <div className="deal-countdown" data-until="+10h"></div>

                <a href="product.html" className="btn btn-primary">
                  <span>Shop Now</span>
                  <i className="icon-long-arrow-right"></i>
                </a>
              </div>
              <div className="deal-image">
                <a href="product.html">
                  <img
                    src="assets/images/demos/demo-2/deal/product-1.jpg"
                    alt="image"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="banner banner-overlay banner-overlay-light text-center d-none d-lg-block">
              <a href="#">
                <img
                  src="assets/images/demos/demo-2/banners/banner-5.jpg"
                  alt="Banner"
                />
              </a>

              <div className="banner-content banner-content-top banner-content-center">
                <h4 className="banner-subtitle">The Best Choice</h4>
                <h3 className="banner-title">AGEN</h3>
                <div className="banner-text text-primary">$49.99</div>
                <a href="#" className="btn btn-outline-gray banner-link">
                  Shop Now<i className="icon-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DealOfDay;
