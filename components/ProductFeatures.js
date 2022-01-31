import { Fragment } from 'react';

function ProductFeatures() {
  return (
    <Fragment>
      <div className="container">
        <ul
          className="nav nav-pills nav-border-anim nav-big justify-content-center mb-3"
          role="tablist"
        >
          <li className="nav-item">
            <a
              className="nav-link active"
              id="products-featured-link"
              data-toggle="tab"
              href="#products-featured-tab"
              role="tab"
              aria-controls="products-featured-tab"
              aria-selected="true"
            >
              Featured
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="products-sale-link"
              data-toggle="tab"
              href="#products-sale-tab"
              role="tab"
              aria-controls="products-sale-tab"
              aria-selected="false"
            >
              On Sale
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="products-top-link"
              data-toggle="tab"
              href="#products-top-tab"
              role="tab"
              aria-controls="products-top-tab"
              aria-selected="false"
            >
              Top Rated
            </a>
          </li>
        </ul>
      </div>
      <div className="container-fluid">
        <div className="tab-content tab-content-carousel">
          <div
            className="tab-pane p-0 fade show active"
            id="products-featured-tab"
            role="tabpanel"
            aria-labelledby="products-featured-link"
          >
            <div
              className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
              data-toggle="owl"
              data-owl-options='{
                                "nav": false, 
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":5
                                    },
                                    "1600": {
                                        "items":6,
                                        "nav": true
                                    }
                                }
                            }'
            >
              <div className="product product-11 text-center">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-2/products/product-1-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                    <img
                      src="assets/images/demos/demo-2/products/product-1-2.jpg"
                      alt="Product image"
                      className="product-image-hover"
                    />
                  </a>

                  <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-wishlist">
                      <span>add to wishlist</span>
                    </a>
                  </div>
                </figure>

                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product.html">Butler Stool Ladder</a>
                  </h3>
                  <div className="product-price">$251,00</div>
                </div>
                <div className="product-action">
                  <a href="#" className="btn-product btn-cart">
                    <span>add to cart</span>
                  </a>
                </div>
              </div>

              <div className="product product-11 text-center">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-2/products/product-2-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                    <img
                      src="assets/images/demos/demo-2/products/product-2-2.jpg"
                      alt="Product image"
                      className="product-image-hover"
                    />
                  </a>

                  <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-wishlist">
                      <span>add to wishlist</span>
                    </a>
                  </div>
                </figure>

                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product.html">Octo 4240</a>
                  </h3>
                  <div className="product-price">$746,00</div>

                  <div className="product-nav product-nav-dots">
                    <a
                      href="#"
                      className="active"
                      style={{ background: '#1f1e18' }}
                    >
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: '#e8e8e8' }}>
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                </div>
                <div className="product-action">
                  <a href="#" className="btn-product btn-cart">
                    <span>add to cart</span>
                  </a>
                </div>
              </div>

              <div className="product product-11 text-center">
                <figure className="product-media">
                  <span className="product-label label-circle label-new">
                    New
                  </span>
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-2/products/product-3-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                    <img
                      src="assets/images/demos/demo-2/products/product-3-2.jpg"
                      alt="Product image"
                      className="product-image-hover"
                    />
                  </a>

                  <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-wishlist">
                      <span>add to wishlist</span>
                    </a>
                  </div>
                </figure>

                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product.html">Flow Slim Armchair</a>
                  </h3>
                  <div className="product-price">$970,00</div>
                </div>
                <div className="product-action">
                  <a href="#" className="btn-product btn-cart">
                    <span>add to cart</span>
                  </a>
                </div>
              </div>

              <div className="product product-11 text-center">
                <figure className="product-media">
                  <span className="product-label label-circle label-sale">
                    Sale
                  </span>
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-2/products/product-4-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                    <img
                      src="assets/images/demos/demo-2/products/product-4-2.jpg"
                      alt="Product image"
                      className="product-image-hover"
                    />
                  </a>

                  <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-wishlist">
                      <span>add to wishlist</span>
                    </a>
                  </div>
                </figure>

                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product.html">Roots Sofa Bed</a>
                  </h3>
                  <div className="product-price">
                    <span className="new-price">$337,00</span>
                    <span className="old-price">Was $449,00</span>
                  </div>

                  <div className="product-nav product-nav-dots">
                    <a
                      href="#"
                      className="active"
                      style={{ background: '#878883' }}
                    >
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: '#dfd5c2' }}>
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                </div>
                <div className="product-action">
                  <a href="#" className="btn-product btn-cart">
                    <span>add to cart</span>
                  </a>
                </div>
              </div>

              <div className="product product-11 text-center">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-2/products/product-5-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                    <img
                      src="assets/images/demos/demo-2/products/product-5-2.jpg"
                      alt="Product image"
                      className="product-image-hover"
                    />
                  </a>

                  <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-wishlist">
                      <span>add to wishlist</span>
                    </a>
                  </div>
                </figure>

                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product.html">Petite Table Lamp</a>
                  </h3>
                  <div className="product-price">$675,00</div>

                  <div className="product-nav product-nav-dots">
                    <a
                      href="#"
                      className="active"
                      style={{ background: '#74543e' }}
                    >
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: '#e8e8e8' }}>
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                </div>
                <div className="product-action">
                  <a href="#" className="btn-product btn-cart">
                    <span>add to cart</span>
                  </a>
                </div>
              </div>

              <div className="product product-11 text-center">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-2/products/product-6-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                    <img
                      src="assets/images/demos/demo-2/products/product-6-2.jpg"
                      alt="Product image"
                      className="product-image-hover"
                    />
                  </a>

                  <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-wishlist">
                      <span>add to wishlist</span>
                    </a>
                  </div>
                </figure>

                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product.html">Elephant Armchair</a>
                  </h3>
                  <div className="product-price">$457,00</div>
                </div>
                <div className="product-action">
                  <a href="#" className="btn-product btn-cart">
                    <span>add to cart</span>
                  </a>
                </div>
              </div>

              <div className="product product-11 text-center">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-2/products/product-1-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                    <img
                      src="assets/images/demos/demo-2/products/product-1-2.jpg"
                      alt="Product image"
                      className="product-image-hover"
                    />
                  </a>

                  <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-wishlist">
                      <span>add to wishlist</span>
                    </a>
                  </div>
                </figure>

                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product.html">Butler Stool Ladder</a>
                  </h3>
                  <div className="product-price">$251,00</div>
                </div>
                <div className="product-action">
                  <a href="#" className="btn-product btn-cart">
                    <span>add to cart</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane p-0 fade"
            id="products-sale-tab"
            role="tabpanel"
            aria-labelledby="products-sale-link"
          >
            <div
              className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
              data-toggle="owl"
              data-owl-options='{
                                "nav": false, 
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":5
                                    },
                                    "1600": {
                                        "items":6,
                                        "nav": true
                                    }
                                }
                            }'
            >
              <div className="product product-11 text-center">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-2/products/product-5-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                    <img
                      src="assets/images/demos/demo-2/products/product-5-2.jpg"
                      alt="Product image"
                      className="product-image-hover"
                    />
                  </a>

                  <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-wishlist">
                      <span>add to wishlist</span>
                    </a>
                  </div>
                </figure>

                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product.html">Petite Table Lamp</a>
                  </h3>
                  <div className="product-price">$675,00</div>

                  <div className="product-nav product-nav-dots">
                    <a
                      href="#"
                      className="active"
                      style={{ background: '#74543e' }}
                    >
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: '#e8e8e8' }}>
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                </div>
                <div className="product-action">
                  <a href="#" className="btn-product btn-cart">
                    <span>add to cart</span>
                  </a>
                </div>
              </div>

              <div className="product product-11 text-center">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-2/products/product-6-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                    <img
                      src="assets/images/demos/demo-2/products/product-6-2.jpg"
                      alt="Product image"
                      className="product-image-hover"
                    />
                  </a>

                  <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-wishlist">
                      <span>add to wishlist</span>
                    </a>
                  </div>
                </figure>

                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product.html">Elephant Armchair</a>
                  </h3>
                  <div className="product-price">$457,00</div>
                </div>
                <div className="product-action">
                  <a href="#" className="btn-product btn-cart">
                    <span>add to cart</span>
                  </a>
                </div>
              </div>

              <div className="product product-11 text-center">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-2/products/product-1-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                    <img
                      src="assets/images/demos/demo-2/products/product-1-2.jpg"
                      alt="Product image"
                      className="product-image-hover"
                    />
                  </a>

                  <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-wishlist">
                      <span>add to wishlist</span>
                    </a>
                  </div>
                </figure>

                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product.html">Butler Stool Ladder</a>
                  </h3>
                  <div className="product-price">$251,00</div>
                </div>
                <div className="product-action">
                  <a href="#" className="btn-product btn-cart">
                    <span>add to cart</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane p-0 fade"
            id="products-top-tab"
            role="tabpanel"
            aria-labelledby="products-top-link"
          >
            <div
              className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
              data-toggle="owl"
              data-owl-options='{
                                "nav": false, 
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":5
                                    },
                                    "1600": {
                                        "items":6,
                                        "nav": true
                                    }
                                }
                            }'
            >
              <div className="product product-11 text-center">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-2/products/product-2-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                    <img
                      src="assets/images/demos/demo-2/products/product-2-2.jpg"
                      alt="Product image"
                      className="product-image-hover"
                    />
                  </a>

                  <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-wishlist">
                      <span>add to wishlist</span>
                    </a>
                  </div>
                </figure>

                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product.html">Octo 4240</a>
                  </h3>
                  <div className="product-price">$746,00</div>

                  <div className="product-nav product-nav-dots">
                    <a
                      href="#"
                      className="active"
                      style={{ background: '#1f1e18' }}
                    >
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: '#e8e8e8' }}>
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                </div>
                <div className="product-action">
                  <a href="#" className="btn-product btn-cart">
                    <span>add to cart</span>
                  </a>
                </div>
              </div>

              <div className="product product-11 text-center">
                <figure className="product-media">
                  <span className="product-label label-circle label-new">
                    New
                  </span>
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-2/products/product-3-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                    <img
                      src="assets/images/demos/demo-2/products/product-3-2.jpg"
                      alt="Product image"
                      className="product-image-hover"
                    />
                  </a>

                  <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-wishlist">
                      <span>add to wishlist</span>
                    </a>
                  </div>
                </figure>

                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product.html">Flow Slim Armchair</a>
                  </h3>
                  <div className="product-price">$970,00</div>
                </div>
                <div className="product-action">
                  <a href="#" className="btn-product btn-cart">
                    <span>add to cart</span>
                  </a>
                </div>
              </div>

              <div className="product product-11 text-center">
                <figure className="product-media">
                  <span className="product-label label-circle label-sale">
                    Sale
                  </span>
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-2/products/product-4-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                    <img
                      src="assets/images/demos/demo-2/products/product-4-2.jpg"
                      alt="Product image"
                      className="product-image-hover"
                    />
                  </a>

                  <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-wishlist">
                      <span>add to wishlist</span>
                    </a>
                  </div>
                </figure>

                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product.html">Roots Sofa Bed</a>
                  </h3>
                  <div className="product-price">
                    <span className="new-price">$337,00</span>
                    <span className="old-price">Was $449,00</span>
                  </div>

                  <div className="product-nav product-nav-dots">
                    <a
                      href="#"
                      className="active"
                      style={{ background: '#878883' }}
                    >
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: '#dfd5c2' }}>
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                </div>
                <div className="product-action">
                  <a href="#" className="btn-product btn-cart">
                    <span>add to cart</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ProductFeatures;
