import { Fragment } from 'react';
import GridProduct from './GridProduct';
import ProductFeaturesProducts from './ProductFeaturesProducts';

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
              <ProductFeaturesProducts products={[1, 2, 3, 4, 5]} />
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
              <ProductFeaturesProducts products={[1, 2, 3]} />
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
              <ProductFeaturesProducts products={[1, 2, 3, 4]} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ProductFeatures;
