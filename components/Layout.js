import Head from 'next/head';
import { Fragment } from 'react';

function Layout({ children, pageTitle }) {
  return (
    <Fragment>
      <Head>
        <title>{pageTitle ? pageTitle : 'ecommerce shop'}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Molla - Bootstrap eCommerce Template</title>
        <meta name="keywords" content="HTML5 Template" />
        <meta
          name="description"
          content="Molla - Bootstrap eCommerce Template"
        />
        <meta name="author" content="p-themes" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="assets/images/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="assets/images/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="assets/images/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="assets/images/icons/site.html" />
        <link
          rel="mask-icon"
          href="assets/images/icons/safari-pinned-tab.svg"
          color="#666666"
        />
        <link rel="shortcut icon" href="assets/images/icons/favicon.ico" />
        <meta name="apple-mobile-web-app-title" content="Molla" />
        <meta name="application-name" content="Molla" />
        <meta name="msapplication-TileColor" content="#cc9966" />
        <meta
          name="msapplication-config"
          content="assets/images/icons/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
        <link
          rel="stylesheet"
          href="assets/vendor/line-awesome/line-awesome/line-awesome/css/line-awesome.min.css"
        />

        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        <link
          rel="stylesheet"
          href="assets/css/plugins/owl-carousel/owl.carousel.css"
        />
        <link
          rel="stylesheet"
          href="assets/css/plugins/magnific-popup/magnific-popup.css"
        />
        <link rel="stylesheet" href="assets/css/plugins/jquery.countdown.css" />

        <link rel="stylesheet" href="assets/css/style.css" />
        <link rel="stylesheet" href="assets/css/skins/skin-demo-2.css" />
        <link rel="stylesheet" href="assets/css/demos/demo-2.css" />
      </Head>
      <div className="page-wrapper">
        <header className="header header-2 header-intro-clearance">
          <div className="header-top">
            <div className="container">
              <div className="header-left">
                <p>Special collection already available.</p>
                <a href="#">&nbsp;Read more ...</a>
              </div>

              <div className="header-right">
                <ul className="top-menu">
                  <li>
                    <a href="#">Links</a>
                    <ul>
                      <li>
                        <div className="header-dropdown">
                          <a href="#">USD</a>
                          <div className="header-menu">
                            <ul>
                              <li>
                                <a href="#">Eur</a>
                              </li>
                              <li>
                                <a href="#">Usd</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="header-dropdown">
                          <a href="#">English</a>
                          <div className="header-menu">
                            <ul>
                              <li>
                                <a href="#">English</a>
                              </li>
                              <li>
                                <a href="#">French</a>
                              </li>
                              <li>
                                <a href="#">Spanish</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a href="#signin-modal" data-toggle="modal">
                          Sign in / Sign up
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="header-middle">
            <div className="container">
              <div className="header-left">
                <button className="mobile-menu-toggler">
                  <span className="sr-only">Toggle mobile menu</span>
                  <i className="icon-bars"></i>
                </button>

                <a href="index.html" className="logo">
                  <img
                    src="assets/images/demos/demo-2/logo.png"
                    alt="Molla Logo"
                    width="105"
                    height="25"
                  />
                </a>
              </div>

              <div className="header-center">
                <div className="header-search header-search-extended header-search-visible header-search-no-radius d-none d-lg-block">
                  <a href="#" className="search-toggle" role="button">
                    <i className="icon-search"></i>
                  </a>
                  <form action="#" method="get">
                    <div className="header-search-wrapper search-wrapper-wide">
                      <label htmlFor="q" className="sr-only">
                        Search
                      </label>
                      <input
                        type="search"
                        className="form-control"
                        name="q"
                        id="q"
                        placeholder="Search product ..."
                        required
                      />
                      <button className="btn btn-primary" type="submit">
                        <i className="icon-search"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="header-right">
                <div className="account">
                  <a href="dashboard.html" title="My account">
                    <div className="icon">
                      <i className="icon-user"></i>
                    </div>
                    <p>Account</p>
                  </a>
                </div>

                <div className="wishlist">
                  <a href="wishlist.html" title="Wishlist">
                    <div className="icon">
                      <i className="icon-heart-o"></i>
                      <span className="wishlist-count badge">3</span>
                    </div>
                    <p>Wishlist</p>
                  </a>
                </div>

                <div className="dropdown cart-dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-display="static"
                  >
                    <div className="icon">
                      <i className="icon-shopping-cart"></i>
                      <span className="cart-count">2</span>
                    </div>
                    <p>Cart</p>
                  </a>

                  <div className="dropdown-menu dropdown-menu-right">
                    <div className="dropdown-cart-products">
                      <div className="product">
                        <div className="product-cart-details">
                          <h4 className="product-title">
                            <a href="product.html">
                              Beige knitted elastic runner shoes
                            </a>
                          </h4>

                          <span className="cart-product-info">
                            <span className="cart-product-qty">1</span>x $84.00
                          </span>
                        </div>

                        <figure className="product-image-container">
                          <a href="product.html" className="product-image">
                            <img
                              src="assets/images/products/cart/product-1.jpg"
                              alt="product"
                            />
                          </a>
                        </figure>
                        <a
                          href="#"
                          className="btn-remove"
                          title="Remove Product"
                        >
                          <i className="icon-close"></i>
                        </a>
                      </div>

                      <div className="product">
                        <div className="product-cart-details">
                          <h4 className="product-title">
                            <a href="product.html">
                              Blue utility pinafore denim dress
                            </a>
                          </h4>

                          <span className="cart-product-info">
                            <span className="cart-product-qty">1</span>x $76.00
                          </span>
                        </div>

                        <figure className="product-image-container">
                          <a href="product.html" className="product-image">
                            <img
                              src="assets/images/products/cart/product-2.jpg"
                              alt="product"
                            />
                          </a>
                        </figure>
                        <a
                          href="#"
                          className="btn-remove"
                          title="Remove Product"
                        >
                          <i className="icon-close"></i>
                        </a>
                      </div>
                    </div>

                    <div className="dropdown-cart-total">
                      <span>Total</span>

                      <span className="cart-total-price">$160.00</span>
                    </div>

                    <div className="dropdown-cart-action">
                      <a href="cart.html" className="btn btn-primary">
                        View Cart
                      </a>
                      <a
                        href="checkout.html"
                        className="btn btn-outline-primary-2"
                      >
                        <span>Checkout</span>
                        <i className="icon-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="header-bottom sticky-header">
            <div className="container">
              <div className="header-left">
                <div className="dropdown category-dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-display="static"
                    title="Browse Categories"
                  >
                    Browse Categories
                  </a>

                  <div className="dropdown-menu">
                    <nav className="side-nav">
                      <ul className="menu-vertical sf-arrows">
                        <li className="item-lead">
                          <a href="#">Daily offers</a>
                        </li>
                        <li className="item-lead">
                          <a href="#">Gift Ideas</a>
                        </li>
                        <li>
                          <a href="#">Beds</a>
                        </li>
                        <li>
                          <a href="#">Lighting</a>
                        </li>
                        <li>
                          <a href="#">Sofas & Sleeper sofas</a>
                        </li>
                        <li>
                          <a href="#">Storage</a>
                        </li>
                        <li>
                          <a href="#">Armchairs & Chaises</a>
                        </li>
                        <li>
                          <a href="#">Decoration </a>
                        </li>
                        <li>
                          <a href="#">Kitchen Cabinets</a>
                        </li>
                        <li>
                          <a href="#">Coffee & Tables</a>
                        </li>
                        <li>
                          <a href="#">Outdoor Furniture </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>

              <div className="header-center">
                <nav className="main-nav">
                  <ul className="menu sf-arrows">
                    <li className="megamenu-container active">
                      <a href="index.html" className="sf-with-ul">
                        Home
                      </a>

                      <div className="megamenu demo">
                        <div className="menu-col">
                          <div className="menu-title">Choose your demo</div>

                          <div className="demo-list">
                            <div className="demo-item">
                              <a href="index-1.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      'url(assets/images/menu/demos/1.jpg)',
                                  }}
                                ></span>
                                <span className="demo-title">
                                  01 - furniture store
                                </span>
                              </a>
                            </div>

                            <div className="demo-item">
                              <a href="index-2.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      'url(assets/images/menu/demos/2.jpg)',
                                  }}
                                ></span>
                                <span className="demo-title">
                                  02 - furniture store
                                </span>
                              </a>
                            </div>

                            <div className="demo-item">
                              <a href="index-3.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      'url(assets/images/menu/demos/3.jpg)',
                                  }}
                                ></span>
                                <span className="demo-title">
                                  03 - electronic store
                                </span>
                              </a>
                            </div>

                            <div className="demo-item">
                              <a href="index-4.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      'url(assets/images/menu/demos/4.jpg)',
                                  }}
                                ></span>
                                <span className="demo-title">
                                  04 - electronic store
                                </span>
                              </a>
                            </div>

                            <div className="demo-item">
                              <a href="index-5.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      'url(assets/images/menu/demos/5.jpg)',
                                  }}
                                ></span>
                                <span className="demo-title">
                                  05 - fashion store
                                </span>
                              </a>
                            </div>

                            <div className="demo-item">
                              <a href="index-6.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      'url(assets/images/menu/demos/6.jpg)',
                                  }}
                                ></span>
                                <span className="demo-title">
                                  06 - fashion store
                                </span>
                              </a>
                            </div>

                            <div className="demo-item">
                              <a href="index-7.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      'url(assets/images/menu/demos/7.jpg)',
                                  }}
                                ></span>
                                <span className="demo-title">
                                  07 - fashion store
                                </span>
                              </a>
                            </div>

                            <div className="demo-item">
                              <a href="index-8.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      'url(assets/images/menu/demos/8.jpg)',
                                  }}
                                ></span>
                                <span className="demo-title">
                                  08 - fashion store
                                </span>
                              </a>
                            </div>

                            <div className="demo-item">
                              <a href="index-9.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      'url(assets/images/menu/demos/9.jpg)',
                                  }}
                                ></span>
                                <span className="demo-title">
                                  09 - fashion store
                                </span>
                              </a>
                            </div>

                            <div className="demo-item">
                              <a href="index-10.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      'url(assets/images/menu/demos/10.jpg)',
                                  }}
                                ></span>
                                <span className="demo-title">
                                  10 - shoes store
                                </span>
                              </a>
                            </div>

                            <div className="demo-item hidden">
                              <a href="index-11.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      'url(assets/images/menu/demos/11.jpg)',
                                  }}
                                ></span>
                                <span className="demo-title">
                                  11 - furniture simple store
                                </span>
                              </a>
                            </div>

                            <div className="demo-item hidden">
                              <a href="index-12.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      'url(assets/images/menu/demos/12.jpg)',
                                  }}
                                ></span>
                                <span className="demo-title">
                                  12 - fashion simple store
                                </span>
                              </a>
                            </div>

                            <div className="demo-item hidden">
                              <a href="index-13.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      'url(assets/images/menu/demos/13.jpg)',
                                  }}
                                ></span>
                                <span className="demo-title">13 - market</span>
                              </a>
                            </div>

                            <div className="demo-item hidden">
                              <a href="index-14.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      'url(assets/images/menu/demos/14.jpg)',
                                  }}
                                ></span>
                                <span className="demo-title">
                                  14 - market fullwidth
                                </span>
                              </a>
                            </div>

                            <div className="demo-item hidden">
                              <a href="index-15.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      'url(assets/images/menu/demos/15.jpg)',
                                  }}
                                ></span>
                                <span className="demo-title">
                                  15 - lookbook 1
                                </span>
                              </a>
                            </div>

                            <div className="demo-item hidden">
                              <a href="index-16.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      'url(assets/images/menu/demos/16.jpg)',
                                  }}
                                ></span>
                                <span className="demo-title">
                                  16 - lookbook 2
                                </span>
                              </a>
                            </div>

                            <div className="demo-item hidden">
                              <a href="index-17.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      'url(assets/images/menu/demos/17.jpg)',
                                  }}
                                ></span>
                                <span className="demo-title">
                                  17 - fashion store
                                </span>
                              </a>
                            </div>

                            <div className="demo-item hidden">
                              <a href="index-18.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      'url(assets/images/menu/demos/18.jpg)',
                                  }}
                                ></span>
                                <span className="demo-title">
                                  18 - fashion store (with sidebar)
                                </span>
                              </a>
                            </div>

                            <div className="demo-item hidden">
                              <a href="index-19.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      'url(assets/images/menu/demos/19.jpg)',
                                  }}
                                ></span>
                                <span className="demo-title">
                                  19 - games store
                                </span>
                              </a>
                            </div>

                            <div className="demo-item hidden">
                              <a href="index-20.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      'url(assets/images/menu/demos/20.jpg)',
                                  }}
                                ></span>
                                <span className="demo-title">
                                  20 - book store
                                </span>
                              </a>
                            </div>

                            <div className="demo-item hidden">
                              <a href="index-21.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      'url(assets/images/menu/demos/21.jpg)',
                                  }}
                                ></span>
                                <span className="demo-title">
                                  21 - sport store
                                </span>
                              </a>
                            </div>

                            <div className="demo-item hidden">
                              <a href="index-22.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      'url(assets/images/menu/demos/22.jpg)',
                                  }}
                                ></span>
                                <span className="demo-title">
                                  22 - tools store
                                </span>
                              </a>
                            </div>

                            <div className="demo-item hidden">
                              <a href="index-23.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      'url(assets/images/menu/demos/23.jpg)',
                                  }}
                                ></span>
                                <span className="demo-title">
                                  23 - fashion left navigation store
                                </span>
                              </a>
                            </div>

                            <div className="demo-item hidden">
                              <a href="index-24.html">
                                <span
                                  className="demo-bg"
                                  style={{
                                    backgroundImage:
                                      'url(assets/images/menu/demos/24.jpg)',
                                  }}
                                ></span>
                                <span className="demo-title">
                                  24 - extreme sport store
                                </span>
                              </a>
                            </div>
                          </div>

                          <div className="megamenu-action text-center">
                            <a
                              href="#"
                              className="btn btn-outline-primary-2 view-all-demos"
                            >
                              <span>View All Demos</span>
                              <i className="icon-long-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="category.html" className="sf-with-ul">
                        Shop
                      </a>

                      <div className="megamenu megamenu-md">
                        <div className="row no-gutters">
                          <div className="col-md-8">
                            <div className="menu-col">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="menu-title">
                                    Shop with sidebar
                                  </div>
                                  <ul>
                                    <li>
                                      <a href="category-list.html">Shop List</a>
                                    </li>
                                    <li>
                                      <a href="category-2cols.html">
                                        Shop Grid 2 Columns
                                      </a>
                                    </li>
                                    <li>
                                      <a href="category.html">
                                        Shop Grid 3 Columns
                                      </a>
                                    </li>
                                    <li>
                                      <a href="category-4cols.html">
                                        Shop Grid 4 Columns
                                      </a>
                                    </li>
                                    <li>
                                      <a href="category-market.html">
                                        <span>
                                          Shop Market
                                          <span className="tip tip-new">
                                            New
                                          </span>
                                        </span>
                                      </a>
                                    </li>
                                  </ul>

                                  <div className="menu-title">
                                    Shop no sidebar
                                  </div>
                                  <ul>
                                    <li>
                                      <a href="category-boxed.html">
                                        <span>
                                          Shop Boxed No Sidebar
                                          <span className="tip tip-hot">
                                            Hot
                                          </span>
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="category-fullwidth.html">
                                        Shop Fullwidth No Sidebar
                                      </a>
                                    </li>
                                  </ul>
                                </div>

                                <div className="col-md-6">
                                  <div className="menu-title">
                                    Product Category
                                  </div>
                                  <ul>
                                    <li>
                                      <a href="product-category-boxed.html">
                                        Product Category Boxed
                                      </a>
                                    </li>
                                    <li>
                                      <a href="product-category-fullwidth.html">
                                        <span>
                                          Product Category Fullwidth
                                          <span className="tip tip-new">
                                            New
                                          </span>
                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                  <div className="menu-title">Shop Pages</div>
                                  <ul>
                                    <li>
                                      <a href="cart.html">Cart</a>
                                    </li>
                                    <li>
                                      <a href="checkout.html">Checkout</a>
                                    </li>
                                    <li>
                                      <a href="wishlist.html">Wishlist</a>
                                    </li>
                                    <li>
                                      <a href="dashboard.html">My Account</a>
                                    </li>
                                    <li>
                                      <a href="#">Lookbook</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4">
                            <div className="banner banner-overlay">
                              <a
                                href="category.html"
                                className="banner banner-menu"
                              >
                                <img
                                  src="assets/images/menu/banner-1.jpg"
                                  alt="Banner"
                                />

                                <div className="banner-content banner-content-top">
                                  <div className="banner-title text-white">
                                    Last <br />
                                    Chance
                                    <br />
                                    <span>
                                      <strong>Sale</strong>
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="product.html" className="sf-with-ul">
                        Product
                      </a>

                      <div className="megamenu megamenu-sm">
                        <div className="row no-gutters">
                          <div className="col-md-6">
                            <div className="menu-col">
                              <div className="menu-title">Product Details</div>
                              <ul>
                                <li>
                                  <a href="product.html">Default</a>
                                </li>
                                <li>
                                  <a href="product-centered.html">Centered</a>
                                </li>
                                <li>
                                  <a href="product-extended.html">
                                    <span>
                                      Extended Info
                                      <span className="tip tip-new">New</span>
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="product-gallery.html">Gallery</a>
                                </li>
                                <li>
                                  <a href="product-sticky.html">Sticky Info</a>
                                </li>
                                <li>
                                  <a href="product-sidebar.html">
                                    Boxed With Sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="product-fullwidth.html">
                                    Full Width
                                  </a>
                                </li>
                                <li>
                                  <a href="product-masonry.html">
                                    Masonry Sticky Info
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="banner banner-overlay">
                              <a href="category.html">
                                <img
                                  src="assets/images/menu/banner-2.jpg"
                                  alt="Banner"
                                />

                                <div className="banner-content banner-content-bottom">
                                  <div className="banner-title text-white">
                                    New Trends
                                    <br />
                                    <span>
                                      <strong>spring 2019</strong>
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="#" className="sf-with-ul">
                        Pages
                      </a>

                      <ul>
                        <li>
                          <a href="about.html" className="sf-with-ul">
                            About
                          </a>

                          <ul>
                            <li>
                              <a href="about.html">About 01</a>
                            </li>
                            <li>
                              <a href="about-2.html">About 02</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html" className="sf-with-ul">
                            Contact
                          </a>

                          <ul>
                            <li>
                              <a href="contact.html">Contact 01</a>
                            </li>
                            <li>
                              <a href="contact-2.html">Contact 02</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="login.html">Login</a>
                        </li>
                        <li>
                          <a href="faq.html">FAQs</a>
                        </li>
                        <li>
                          <a href="404.html">Error 404</a>
                        </li>
                        <li>
                          <a href="coming-soon.html">Coming Soon</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blog.html" className="sf-with-ul">
                        Blog
                      </a>

                      <ul>
                        <li>
                          <a href="blog.html">Classic</a>
                        </li>
                        <li>
                          <a href="blog-listing.html">Listing</a>
                        </li>
                        <li>
                          <a href="#">Grid</a>
                          <ul>
                            <li>
                              <a href="blog-grid-2cols.html">Grid 2 columns</a>
                            </li>
                            <li>
                              <a href="blog-grid-3cols.html">Grid 3 columns</a>
                            </li>
                            <li>
                              <a href="blog-grid-4cols.html">Grid 4 columns</a>
                            </li>
                            <li>
                              <a href="blog-grid-sidebar.html">Grid sidebar</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Masonry</a>
                          <ul>
                            <li>
                              <a href="blog-masonry-2cols.html">
                                Masonry 2 columns
                              </a>
                            </li>
                            <li>
                              <a href="blog-masonry-3cols.html">
                                Masonry 3 columns
                              </a>
                            </li>
                            <li>
                              <a href="blog-masonry-4cols.html">
                                Masonry 4 columns
                              </a>
                            </li>
                            <li>
                              <a href="blog-masonry-sidebar.html">
                                Masonry sidebar
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Mask</a>
                          <ul>
                            <li>
                              <a href="blog-mask-grid.html">Blog mask grid</a>
                            </li>
                            <li>
                              <a href="blog-mask-masonry.html">
                                Blog mask masonry
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Single Post</a>
                          <ul>
                            <li>
                              <a href="single.html">Default with sidebar</a>
                            </li>
                            <li>
                              <a href="single-fullwidth.html">
                                Fullwidth no sidebar
                              </a>
                            </li>
                            <li>
                              <a href="single-fullwidth-sidebar.html">
                                Fullwidth with sidebar
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="elements-list.html" className="sf-with-ul">
                        Elements
                      </a>

                      <ul>
                        <li>
                          <a href="elements-products.html">Products</a>
                        </li>
                        <li>
                          <a href="elements-typography.html">Typography</a>
                        </li>
                        <li>
                          <a href="elements-titles.html">Titles</a>
                        </li>
                        <li>
                          <a href="elements-banners.html">Banners</a>
                        </li>
                        <li>
                          <a href="elements-product-category.html">
                            Product Category
                          </a>
                        </li>
                        <li>
                          <a href="elements-video-banners.html">
                            Video Banners
                          </a>
                        </li>
                        <li>
                          <a href="elements-buttons.html">Buttons</a>
                        </li>
                        <li>
                          <a href="elements-accordions.html">Accordions</a>
                        </li>
                        <li>
                          <a href="elements-tabs.html">Tabs</a>
                        </li>
                        <li>
                          <a href="elements-testimonials.html">Testimonials</a>
                        </li>
                        <li>
                          <a href="elements-blog-posts.html">Blog Posts</a>
                        </li>
                        <li>
                          <a href="elements-portfolio.html">Portfolio</a>
                        </li>
                        <li>
                          <a href="elements-cta.html">Call to Action</a>
                        </li>
                        <li>
                          <a href="elements-icon-boxes.html">Icon Boxes</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="header-right">
                <i className="la la-lightbulb-o"></i>
                <p>
                  Clearance
                  <span className="highlight">&nbsp;Up to 30% Off</span>
                </p>
              </div>
            </div>
          </div>
        </header>

        {children}

        <footer className="footer footer-2">
          <div className="icon-boxes-container">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-lg-3">
                  <div className="icon-box icon-box-side">
                    <span className="icon-box-icon text-dark">
                      <i className="icon-rocket"></i>
                    </span>
                    <div className="icon-box-content">
                      <h3 className="icon-box-title">Free Shipping</h3>
                      <p>orders $50 or more</p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-3">
                  <div className="icon-box icon-box-side">
                    <span className="icon-box-icon text-dark">
                      <i className="icon-rotate-left"></i>
                    </span>

                    <div className="icon-box-content">
                      <h3 className="icon-box-title">Free Returns</h3>
                      <p>within 30 days</p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-3">
                  <div className="icon-box icon-box-side">
                    <span className="icon-box-icon text-dark">
                      <i className="icon-info-circle"></i>
                    </span>

                    <div className="icon-box-content">
                      <h3 className="icon-box-title">Get 20% Off 1 Item</h3>
                      <p>When you sign up</p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-3">
                  <div className="icon-box icon-box-side">
                    <span className="icon-box-icon text-dark">
                      <i className="icon-life-ring"></i>
                    </span>

                    <div className="icon-box-content">
                      <h3 className="icon-box-title">We Support</h3>
                      <p>24/7 amazing services</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="footer-newsletter bg-image"
            style={{
              backgroundImage: 'url(assets/images/backgrounds/bg-2.jpg)',
            }}
          >
            <div className="container">
              <div className="heading text-center">
                <h3 className="title">Get The Latest Deals</h3>
                <p className="title-desc">
                  and receive <span>$20 coupon</span> for first shopping
                </p>
              </div>

              <div className="row">
                <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                  <form action="#">
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your Email Address"
                        aria-label="Email Adress"
                        aria-describedby="newsletter-btn"
                        required
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-primary"
                          type="submit"
                          id="newsletter-btn"
                        >
                          <span>Subscribe</span>
                          <i className="icon-long-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-middle">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-lg-6">
                  <div className="widget widget-about">
                    <img
                      src="assets/images/demos/demo-2/logo.png"
                      className="footer-logo"
                      alt="Footer Logo"
                      width="105"
                      height="25"
                    />
                    <p>
                      Praesent dapibus, neque id cursus ucibus, tortor neque
                      egestas augue, eu vulputate magna eros eu erat. Aliquam
                      erat volutpat. Nam dui mi, tincidunt quis, accumsan
                      porttitor, facilisis luctus, metus.{' '}
                    </p>

                    <div className="widget-about-info">
                      <div className="row">
                        <div className="col-sm-6 col-md-4">
                          <span className="widget-about-title">
                            Got Question? Call us 24/7
                          </span>
                          <a href="tel:123456789">+0123 456 789</a>
                        </div>
                        <div className="col-sm-6 col-md-8">
                          <span className="widget-about-title">
                            Payment Method
                          </span>
                          <figure className="footer-payments">
                            <img
                              src="assets/images/payments.png"
                              alt="Payment methods"
                              width="272"
                              height="20"
                            />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4 col-lg-2">
                  <div className="widget">
                    <h4 className="widget-title">Information</h4>

                    <ul className="widget-list">
                      <li>
                        <a href="about.html">About Molla</a>
                      </li>
                      <li>
                        <a href="#">How to shop on Molla</a>
                      </li>
                      <li>
                        <a href="#">FAQ</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact us</a>
                      </li>
                      <li>
                        <a href="login.html">Log in</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-sm-4 col-lg-2">
                  <div className="widget">
                    <h4 className="widget-title">Customer Service</h4>

                    <ul className="widget-list">
                      <li>
                        <a href="#">Payment Methods</a>
                      </li>
                      <li>
                        <a href="#">Money-back guarantee!</a>
                      </li>
                      <li>
                        <a href="#">Returns</a>
                      </li>
                      <li>
                        <a href="#">Shipping</a>
                      </li>
                      <li>
                        <a href="#">Terms and conditions</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-sm-4 col-lg-2">
                  <div className="widget">
                    <h4 className="widget-title">My Account</h4>

                    <ul className="widget-list">
                      <li>
                        <a href="#">Sign In</a>
                      </li>
                      <li>
                        <a href="cart.html">View Cart</a>
                      </li>
                      <li>
                        <a href="#">My Wishlist</a>
                      </li>
                      <li>
                        <a href="#">Track My Order</a>
                      </li>
                      <li>
                        <a href="#">Help</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="container">
              <p className="footer-copyright">
                Copyright © 2019 Molla Store. All Rights Reserved.
              </p>
              <ul className="footer-menu">
                <li>
                  <a href="#">Terms Of Use</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>

              <div className="social-icons social-icons-color">
                <span className="social-label">Social Media</span>
                <a
                  href="#"
                  className="social-icon social-facebook"
                  title="Facebook"
                  target="_blank"
                >
                  <i className="icon-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="social-icon social-twitter"
                  title="Twitter"
                  target="_blank"
                >
                  <i className="icon-twitter"></i>
                </a>
                <a
                  href="#"
                  className="social-icon social-instagram"
                  title="Instagram"
                  target="_blank"
                >
                  <i className="icon-instagram"></i>
                </a>
                <a
                  href="#"
                  className="social-icon social-youtube"
                  title="Youtube"
                  target="_blank"
                >
                  <i className="icon-youtube"></i>
                </a>
                <a
                  href="#"
                  className="social-icon social-pinterest"
                  title="Pinterest"
                  target="_blank"
                >
                  <i className="icon-pinterest"></i>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <button id="scroll-top" title="Back to Top">
        <i className="icon-arrow-up"></i>
      </button>

      <div className="mobile-menu-overlay"></div>

      <div className="mobile-menu-container mobile-menu-light">
        <div className="mobile-menu-wrapper">
          <span className="mobile-menu-close">
            <i className="icon-close"></i>
          </span>

          <form action="#" method="get" className="mobile-search">
            <label htmlFor="mobile-search" className="sr-only">
              Search
            </label>
            <input
              type="search"
              className="form-control"
              name="mobile-search"
              id="mobile-search"
              placeholder="Search product ..."
              required
            />
            <button className="btn btn-primary" type="submit">
              <i className="icon-search"></i>
            </button>
          </form>

          <ul className="nav nav-pills-mobile nav-border-anim" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="mobile-menu-link"
                data-toggle="tab"
                href="#mobile-menu-tab"
                role="tab"
                aria-controls="mobile-menu-tab"
                aria-selected="true"
              >
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="mobile-cats-link"
                data-toggle="tab"
                href="#mobile-cats-tab"
                role="tab"
                aria-controls="mobile-cats-tab"
                aria-selected="false"
              >
                Categories
              </a>
            </li>
          </ul>

          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="mobile-menu-tab"
              role="tabpanel"
              aria-labelledby="mobile-menu-link"
            >
              <nav className="mobile-nav">
                <ul className="mobile-menu">
                  <li className="active">
                    <a href="index.html">Home</a>

                    <ul>
                      <li>
                        <a href="index-1.html">01 - furniture store</a>
                      </li>
                      <li>
                        <a href="index-2.html">02 - furniture store</a>
                      </li>
                      <li>
                        <a href="index-3.html">03 - electronic store</a>
                      </li>
                      <li>
                        <a href="index-4.html">04 - electronic store</a>
                      </li>
                      <li>
                        <a href="index-5.html">05 - fashion store</a>
                      </li>
                      <li>
                        <a href="index-6.html">06 - fashion store</a>
                      </li>
                      <li>
                        <a href="index-7.html">07 - fashion store</a>
                      </li>
                      <li>
                        <a href="index-8.html">08 - fashion store</a>
                      </li>
                      <li>
                        <a href="index-9.html">09 - fashion store</a>
                      </li>
                      <li>
                        <a href="index-10.html">10 - shoes store</a>
                      </li>
                      <li>
                        <a href="index-11.html">11 - furniture simple store</a>
                      </li>
                      <li>
                        <a href="index-12.html">12 - fashion simple store</a>
                      </li>
                      <li>
                        <a href="index-13.html">13 - market</a>
                      </li>
                      <li>
                        <a href="index-14.html">14 - market fullwidth</a>
                      </li>
                      <li>
                        <a href="index-15.html">15 - lookbook 1</a>
                      </li>
                      <li>
                        <a href="index-16.html">16 - lookbook 2</a>
                      </li>
                      <li>
                        <a href="index-17.html">17 - fashion store</a>
                      </li>
                      <li>
                        <a href="index-18.html">
                          18 - fashion store (with sidebar)
                        </a>
                      </li>
                      <li>
                        <a href="index-19.html">19 - games store</a>
                      </li>
                      <li>
                        <a href="index-20.html">20 - book store</a>
                      </li>
                      <li>
                        <a href="index-21.html">21 - sport store</a>
                      </li>
                      <li>
                        <a href="index-22.html">22 - tools store</a>
                      </li>
                      <li>
                        <a href="index-23.html">
                          23 - fashion left navigation store
                        </a>
                      </li>
                      <li>
                        <a href="index-24.html">24 - extreme sport store</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="category.html">Shop</a>
                    <ul>
                      <li>
                        <a href="category-list.html">Shop List</a>
                      </li>
                      <li>
                        <a href="category-2cols.html">Shop Grid 2 Columns</a>
                      </li>
                      <li>
                        <a href="category.html">Shop Grid 3 Columns</a>
                      </li>
                      <li>
                        <a href="category-4cols.html">Shop Grid 4 Columns</a>
                      </li>
                      <li>
                        <a href="category-boxed.html">
                          <span>
                            Shop Boxed No Sidebar
                            <span className="tip tip-hot">Hot</span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="category-fullwidth.html">
                          Shop Fullwidth No Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="product-category-boxed.html">
                          Product Category Boxed
                        </a>
                      </li>
                      <li>
                        <a href="product-category-fullwidth.html">
                          <span>
                            Product Category Fullwidth
                            <span className="tip tip-new">New</span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="cart.html">Cart</a>
                      </li>
                      <li>
                        <a href="checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="wishlist.html">Wishlist</a>
                      </li>
                      <li>
                        <a href="#">Lookbook</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="product.html" className="sf-with-ul">
                      Product
                    </a>
                    <ul>
                      <li>
                        <a href="product.html">Default</a>
                      </li>
                      <li>
                        <a href="product-centered.html">Centered</a>
                      </li>
                      <li>
                        <a href="product-extended.html">
                          <span>
                            Extended Info
                            <span className="tip tip-new">New</span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="product-gallery.html">Gallery</a>
                      </li>
                      <li>
                        <a href="product-sticky.html">Sticky Info</a>
                      </li>
                      <li>
                        <a href="product-sidebar.html">Boxed With Sidebar</a>
                      </li>
                      <li>
                        <a href="product-fullwidth.html">Full Width</a>
                      </li>
                      <li>
                        <a href="product-masonry.html">Masonry Sticky Info</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                    <ul>
                      <li>
                        <a href="about.html">About</a>

                        <ul>
                          <li>
                            <a href="about.html">About 01</a>
                          </li>
                          <li>
                            <a href="about-2.html">About 02</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>

                        <ul>
                          <li>
                            <a href="contact.html">Contact 01</a>
                          </li>
                          <li>
                            <a href="contact-2.html">Contact 02</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="login.html">Login</a>
                      </li>
                      <li>
                        <a href="faq.html">FAQs</a>
                      </li>
                      <li>
                        <a href="404.html">Error 404</a>
                      </li>
                      <li>
                        <a href="coming-soon.html">Coming Soon</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>

                    <ul>
                      <li>
                        <a href="blog.html">Classic</a>
                      </li>
                      <li>
                        <a href="blog-listing.html">Listing</a>
                      </li>
                      <li>
                        <a href="#">Grid</a>
                        <ul>
                          <li>
                            <a href="blog-grid-2cols.html">Grid 2 columns</a>
                          </li>
                          <li>
                            <a href="blog-grid-3cols.html">Grid 3 columns</a>
                          </li>
                          <li>
                            <a href="blog-grid-4cols.html">Grid 4 columns</a>
                          </li>
                          <li>
                            <a href="blog-grid-sidebar.html">Grid sidebar</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Masonry</a>
                        <ul>
                          <li>
                            <a href="blog-masonry-2cols.html">
                              Masonry 2 columns
                            </a>
                          </li>
                          <li>
                            <a href="blog-masonry-3cols.html">
                              Masonry 3 columns
                            </a>
                          </li>
                          <li>
                            <a href="blog-masonry-4cols.html">
                              Masonry 4 columns
                            </a>
                          </li>
                          <li>
                            <a href="blog-masonry-sidebar.html">
                              Masonry sidebar
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Mask</a>
                        <ul>
                          <li>
                            <a href="blog-mask-grid.html">Blog mask grid</a>
                          </li>
                          <li>
                            <a href="blog-mask-masonry.html">
                              Blog mask masonry
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Single Post</a>
                        <ul>
                          <li>
                            <a href="single.html">Default with sidebar</a>
                          </li>
                          <li>
                            <a href="single-fullwidth.html">
                              Fullwidth no sidebar
                            </a>
                          </li>
                          <li>
                            <a href="single-fullwidth-sidebar.html">
                              Fullwidth with sidebar
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="elements-list.html">Elements</a>
                    <ul>
                      <li>
                        <a href="elements-products.html">Products</a>
                      </li>
                      <li>
                        <a href="elements-typography.html">Typography</a>
                      </li>
                      <li>
                        <a href="elements-titles.html">Titles</a>
                      </li>
                      <li>
                        <a href="elements-banners.html">Banners</a>
                      </li>
                      <li>
                        <a href="elements-product-category.html">
                          Product Category
                        </a>
                      </li>
                      <li>
                        <a href="elements-video-banners.html">Video Banners</a>
                      </li>
                      <li>
                        <a href="elements-buttons.html">Buttons</a>
                      </li>
                      <li>
                        <a href="elements-accordions.html">Accordions</a>
                      </li>
                      <li>
                        <a href="elements-tabs.html">Tabs</a>
                      </li>
                      <li>
                        <a href="elements-testimonials.html">Testimonials</a>
                      </li>
                      <li>
                        <a href="elements-blog-posts.html">Blog Posts</a>
                      </li>
                      <li>
                        <a href="elements-portfolio.html">Portfolio</a>
                      </li>
                      <li>
                        <a href="elements-cta.html">Call to Action</a>
                      </li>
                      <li>
                        <a href="elements-icon-boxes.html">Icon Boxes</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <div
              className="tab-pane fade"
              id="mobile-cats-tab"
              role="tabpanel"
              aria-labelledby="mobile-cats-link"
            >
              <nav className="mobile-cats-nav">
                <ul className="mobile-cats-menu">
                  <li>
                    <a className="mobile-cats-lead" href="#">
                      Daily offers
                    </a>
                  </li>
                  <li>
                    <a className="mobile-cats-lead" href="#">
                      Gift Ideas
                    </a>
                  </li>
                  <li>
                    <a href="#">Beds</a>
                  </li>
                  <li>
                    <a href="#">Lighting</a>
                  </li>
                  <li>
                    <a href="#">Sofas & Sleeper sofas</a>
                  </li>
                  <li>
                    <a href="#">Storage</a>
                  </li>
                  <li>
                    <a href="#">Armchairs & Chaises</a>
                  </li>
                  <li>
                    <a href="#">Decoration </a>
                  </li>
                  <li>
                    <a href="#">Kitchen Cabinets</a>
                  </li>
                  <li>
                    <a href="#">Coffee & Tables</a>
                  </li>
                  <li>
                    <a href="#">Outdoor Furniture </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="social-icons">
            <a
              href="#"
              className="social-icon"
              target="_blank"
              title="Facebook"
            >
              <i className="icon-facebook-f"></i>
            </a>
            <a href="#" className="social-icon" target="_blank" title="Twitter">
              <i className="icon-twitter"></i>
            </a>
            <a
              href="#"
              className="social-icon"
              target="_blank"
              title="Instagram"
            >
              <i className="icon-instagram"></i>
            </a>
            <a href="#" className="social-icon" target="_blank" title="Youtube">
              <i className="icon-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="signin-modal"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="icon-close"></i>
                </span>
              </button>

              <div className="form-box">
                <div className="form-tab">
                  <ul className="nav nav-pills nav-fill" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="signin-tab"
                        data-toggle="tab"
                        href="#signin"
                        role="tab"
                        aria-controls="signin"
                        aria-selected="true"
                      >
                        Sign In
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="register-tab"
                        data-toggle="tab"
                        href="#register"
                        role="tab"
                        aria-controls="register"
                        aria-selected="false"
                      >
                        Register
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content" id="tab-content-5">
                    <div
                      className="tab-pane fade show active"
                      id="signin"
                      role="tabpanel"
                      aria-labelledby="signin-tab"
                    >
                      <form action="#">
                        <div className="form-group">
                          <label htmlFor="singin-email">
                            Username or email address *
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="singin-email"
                            name="singin-email"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="singin-password">Password *</label>
                          <input
                            type="password"
                            className="form-control"
                            id="singin-password"
                            name="singin-password"
                            required
                          />
                        </div>

                        <div className="form-footer">
                          <button
                            type="submit"
                            className="btn btn-outline-primary-2"
                          >
                            <span>LOG IN</span>
                            <i className="icon-long-arrow-right"></i>
                          </button>

                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="signin-remember"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="signin-remember"
                            >
                              Remember Me
                            </label>
                          </div>

                          <a href="#" className="forgot-link">
                            Forgot Your Password?
                          </a>
                        </div>
                      </form>
                      <div className="form-choice">
                        <p className="text-center">or sign in with</p>
                        <div className="row">
                          <div className="col-sm-6">
                            <a href="#" className="btn btn-login btn-g">
                              <i className="icon-google"></i>
                              Login With Google
                            </a>
                          </div>
                          <div className="col-sm-6">
                            <a href="#" className="btn btn-login btn-f">
                              <i className="icon-facebook-f"></i>
                              Login With Facebook
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="register"
                      role="tabpanel"
                      aria-labelledby="register-tab"
                    >
                      <form action="#">
                        <div className="form-group">
                          <label htmlFor="register-email">
                            Your email address *
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="register-email"
                            name="register-email"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="register-password">Password *</label>
                          <input
                            type="password"
                            className="form-control"
                            id="register-password"
                            name="register-password"
                            required
                          />
                        </div>

                        <div className="form-footer">
                          <button
                            type="submit"
                            className="btn btn-outline-primary-2"
                          >
                            <span>SIGN UP</span>
                            <i className="icon-long-arrow-right"></i>
                          </button>

                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="register-policy"
                              required
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="register-policy"
                            >
                              I agree to the <a href="#">privacy policy</a> *
                            </label>
                          </div>
                        </div>
                      </form>
                      <div className="form-choice">
                        <p className="text-center">or sign in with</p>
                        <div className="row">
                          <div className="col-sm-6">
                            <a href="#" className="btn btn-login btn-g">
                              <i className="icon-google"></i>
                              Login With Google
                            </a>
                          </div>
                          <div className="col-sm-6">
                            <a href="#" className="btn btn-login  btn-f">
                              <i className="icon-facebook-f"></i>
                              Login With Facebook
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container newsletter-popup-container mfp-hide"
        id="newsletter-popup-form"
      >
        <div className="row justify-content-center">
          <div className="col-10">
            <div className="row no-gutters bg-white newsletter-popup-content">
              <div className="col-xl-3-5col col-lg-7 banner-content-wrap">
                <div className="banner-content text-center">
                  <img
                    src="assets/images/popup/newsletter/logo.png"
                    className="logo"
                    alt="logo"
                    width="60"
                    height="15"
                  />
                  <h2 className="banner-title">
                    get{' '}
                    <span>
                      25<light>%</light>
                    </span>{' '}
                    off
                  </h2>
                  <p>
                    Subscribe to the Molla eCommerce newsletter to receive
                    timely updates from your favorite products.
                  </p>
                  <form action="#">
                    <div className="input-group input-group-round">
                      <input
                        type="email"
                        className="form-control form-control-white"
                        placeholder="Your Email Address"
                        aria-label="Email Adress"
                        required
                      />
                      <div className="input-group-append">
                        <button className="btn" type="submit">
                          <span>go</span>
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="register-policy-2"
                      required
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="register-policy-2"
                    >
                      Do not show this popup again
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-xl-2-5col col-lg-5 ">
                <img
                  src="assets/images/popup/newsletter/img-1.jpg"
                  className="newsletter-img"
                  alt="newsletter"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/bootstrap.bundle.min.js"></script>
      <script src="assets/js/jquery.hoverIntent.min.js"></script>
      <script src="assets/js/jquery.waypoints.min.js"></script>
      <script src="assets/js/superfish.min.js"></script>
      <script src="assets/js/owl.carousel.min.js"></script>
      <script src="assets/js/jquery.plugin.min.js"></script>
      <script src="assets/js/jquery.magnific-popup.min.js"></script>
      <script src="assets/js/jquery.countdown.min.js"></script>

      <script src="assets/js/main.js"></script>
      <script src="assets/js/demos/demo-2.js"></script>
    </Fragment>
  );
}

export default Layout;
