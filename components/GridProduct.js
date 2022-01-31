import Link from 'next/link';

function GridProduct({ product }) {
  return (
    <div className="product product-11 text-center">
      <figure className="product-media">
        <Link href="/">
          <a>
            <img
              src="assets/images/demos/demo-2/products/product-10-1.jpg"
              alt="Product image"
              className="product-image"
            />
            <img
              src="assets/images/demos/demo-2/products/product-10-2.jpg"
              alt="Product image"
              className="product-image-hover"
            />
          </a>
        </Link>

        <div className="product-action-vertical">
          <Link href="#">
            <a className="btn-product-icon btn-wishlist">
              <span>add to wishlist</span>
            </a>
          </Link>
        </div>
      </figure>

      <div className="product-body">
        <div className="product-cat">
          <Link href="#">Lighting</Link>
        </div>
        <h3 className="product-title">
          <Link href="product.html">Carronade Large Suspension Lamp</Link>
        </h3>
        <div className="product-price">$401,00</div>

        <div className="product-nav product-nav-dots">
          <Link href="#">
            <a className="active" style={{ background: '#e8e8e8' }}>
              <span className="sr-only">Color name</span>
            </a>
          </Link>
          <Link href="#">
            <a style={{ background: '#333333' }}>
              <span className="sr-only">Color name</span>
            </a>
          </Link>
        </div>
      </div>
      <div className="product-action">
        <Link href="#">
          <a className="btn-product btn-cart">
            <span>add to cart</span>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default GridProduct;
