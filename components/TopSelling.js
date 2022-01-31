import GridProduct from './GridProduct';
import TopSellingProducts from './TopSellingProducts';

function TopSelling() {
  return (
    <div className="container">
      <div className="heading heading-center mb-3">
        <h2 className="title">Top Selling Products</h2>

        <ul
          className="nav nav-pills nav-border-anim justify-content-center"
          role="tablist"
        >
          <li className="nav-item">
            <a
              className="nav-link active"
              id="top-all-link"
              data-toggle="tab"
              href="#top-all-tab"
              role="tab"
              aria-controls="top-all-tab"
              aria-selected="true"
            >
              All
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="top-fur-link"
              data-toggle="tab"
              href="#top-fur-tab"
              role="tab"
              aria-controls="top-fur-tab"
              aria-selected="false"
            >
              Furniture
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="top-decor-link"
              data-toggle="tab"
              href="#top-decor-tab"
              role="tab"
              aria-controls="top-decor-tab"
              aria-selected="false"
            >
              Decoration
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="top-light-link"
              data-toggle="tab"
              href="#top-light-tab"
              role="tab"
              aria-controls="top-light-tab"
              aria-selected="false"
            >
              Lighting
            </a>
          </li>
        </ul>
      </div>

      <div className="tab-content">
        <div
          className="tab-pane p-0 fade show active"
          id="top-all-tab"
          role="tabpanel"
          aria-labelledby="top-all-link"
        >
          <div className="products">
            <div className="row justify-content-center">
              <TopSellingProducts products={[1, 2, 3, 4, 5]} />
            </div>
          </div>
        </div>
        <div
          className="tab-pane p-0 fade"
          id="top-fur-tab"
          role="tabpanel"
          aria-labelledby="top-fur-link"
        >
          <div className="products">
            <div className="row justify-content-center">
              <TopSellingProducts products={[1, 2, 3]} />
            </div>
          </div>
        </div>
        <div
          className="tab-pane p-0 fade"
          id="top-decor-tab"
          role="tabpanel"
          aria-labelledby="top-decor-link"
        >
          <div className="products">
            <div className="row justify-content-center">
              <TopSellingProducts products={[1, 2, 3]} />
            </div>
          </div>
        </div>
        <div
          className="tab-pane p-0 fade"
          id="top-light-tab"
          role="tabpanel"
          aria-labelledby="top-light-link"
        >
          <div className="products">
            <div className="row justify-content-center">
              <TopSellingProducts products={[1, 2, 3]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSelling;
