import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import AOS from 'aos'
import Swiper from 'swiper';
export default function HomePage() {
    useEffect(() => {
        AOS.init();
        // const elements = document.querySelectorAll('[data-anime]');
        // elements.forEach((element) => {
        //   const animationData = JSON.parse(element.getAttribute('data-anime'));
        //   applyAnimation(element, animationData);
        // });
      }, []);
    
    //   const applyAnimation = (element, animationData) => {
    //     const { opacity, translateY, rotateX, staggervalue, easing, duration, delay } = animationData;
    
    //     // Set initial styles
    //     element.style.opacity = opacity ? opacity[0] : 1;
    //     element.style.transform = translateY ? `translateY(${translateY[0]}px)` : '';
    //     element.style.transform = rotateX ? `rotateX(${rotateX[0]}deg)` : '';
    
    //     // Apply animation after delay
    //     setTimeout(() => {
    //       element.style.transition = `opacity ${duration}ms ${easing} ${delay}ms, transform ${duration}ms ${easing} ${delay}ms`;
    //       element.style.opacity = opacity ? opacity[1] : 1;
    //       element.style.transform = translateY ? `translateY(${translateY[1]}px)` : '';
    //       element.style.transform = rotateX ? `rotateX(${rotateX[1]}deg)` : '';
    //     }, delay);
    //   };
    return (

    
            <div className="header-with-topbar">

                <div
                    className="header-top-bar top-bar-light bg-base-color disable-fixed md-border-bottom border-color-transparent-dark-very-light">
                    <div className="container-fluid">
                        <div className="row h-40px align-items-center m-0">
                            <div className="col-12 justify-content-center alt-font fs-13 fw-500 text-uppercase">
                                <div className="text-dark-gray">Enjoy FREE standard delivery on orders over $100.</div>
                                <Link to="#" className="text-dark-gray fw-600 ms-5px text-dark-gray-hover"><span
                                    className="text-decoration-line-bottom">Shop now</span></Link>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="navbar navbar-expand-lg header-light bg-white disable-fixed center-logo">
                    <div className="container-fluid">
                        <div className="col-auto col-xxl-3 col-lg-2 menu-logo">
                            <div className="header-icon d-none d-lg-flex">
                                <div className="widget-text icon alt-font">
                                    <Link to="demo-fashion-store-contact.html"><i
                                        className="feather icon-feather-map-pin d-inline-block me-5px"></i><span
                                            className="d-none d-xxl-inline-block">Find stores</span></Link>
                                </div>
                                <div className="widget-text icon alt-font">
                                    <Link to="https://www.instagram.com/" target="_blank"><i
                                        className="feather icon-feather-instagram d-inline-block me-5px"></i><span
                                            className="d-none d-xxl-inline-block">100k Followers</span></Link>
                                </div>
                            </div>
                            <Link className="navbar-brand" to="demo-fashion-store.html">
                                <img src="images/demo-fashion-store-logo-black.png"
                                    data-at2x="images/demo-fashion-store-logo-black@2x.png" alt="" className="default-logo" />
                                {/* <img src="images/demo-fashion-store-logo-black.png"
                    data-at2x="images/demo-fashion-store-logo-black@2x.png" alt className="alt-logo" />
                <img src="images/demo-fashion-store-logo-black.png"
                    data-at2x="images/demo-fashion-store-logo-black@2x.png" alt className="mobile-logo" /> */}
                            </Link>
                        </div>
                        <div className="col-auto col-xxl-6 col-lg-8 menu-order">
                            <button className="navbar-toggler float-end" type="button"  aria-controls="navbarNav" aria-label="Toggle navigation">
                                <span className="navbar-toggler-line"></span>
                                <span className="navbar-toggler-line"></span>
                                <span className="navbar-toggler-line"></span>
                                <span className="navbar-toggler-line"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                                <ul className="navbar-nav alt-font navbar-left justify-content-end">
                                    <li className="nav-item">
                                        <Link to="demo-fashion-store.html" className="nav-link">Home</Link>
                                    </li>
                                    <li className="nav-item dropdown submenu">
                                        <Link to="demo-fashion-store-shop.html" className="nav-link">Shop</Link>
                                        <i className="fa-solid fa-angle-down dropdown-toggle" id="navbarDropdownMenuLink1"
                                            role="button"  aria-expanded="false"></i>
                                        <div className="dropdown-menu submenu-content" aria-labelledby="navbarDropdownMenuLink1">
                                            <div className="d-lg-flex mega-menu m-auto flex-column">
                                                <div
                                                    className="row row-cols-1 row-cols-lg-5 row-cols-md-3 row-cols-sm-3 mb-50px md-mb-25px xs-mb-15px">
                                                    <div className="col">
                                                        <ul>
                                                            <li className="sub-title">Men</li>
                                                            <li><Link to="#">Jeans</Link></li>
                                                            <li><Link to="#">Trousers</Link></li>
                                                            <li><Link to="#">Swimwear</Link></li>
                                                            <li><Link to="#">Casual shirts</Link></li>
                                                            <li><Link to="#">Rain jackets</Link></li>
                                                            <li><Link to="#">Loungewear</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col">
                                                        <ul>
                                                            <li className="sub-title">Women</li>
                                                            <li><Link to="#">Dupattas</Link></li>
                                                            <li><Link to="#">Leggings</Link></li>
                                                            <li><Link to="#">Ethnic wear</Link></li>
                                                            <li><Link to="#">Kurtas & suits</Link></li>
                                                            <li><Link to="#">Western wear</Link></li>
                                                            <li><Link to="#">Dress materials</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col">
                                                        <ul>
                                                            <li className="sub-title">Kids</li>
                                                            <li><Link to="#">Dresses</Link></li>
                                                            <li><Link to="#">Jumpsuits</Link></li>
                                                            <li><Link to="#">Track pants</Link></li>
                                                            <li><Link to="#">Ethnic wear</Link></li>
                                                            <li><Link to="#">Value packs</Link></li>
                                                            <li><Link to="#">Loungewear</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col">
                                                        <ul>
                                                            <li className="sub-title">Divided</li>
                                                            <li><Link to="#">Tops</Link></li>
                                                            <li><Link to="#">Dresses</Link></li>
                                                            <li><Link to="#">Shorts</Link></li>
                                                            <li><Link to="#">Swimwear</Link></li>
                                                            <li><Link to="#">Jeans</Link></li>
                                                            <li><Link to="#">Jackets</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col">
                                                        <ul>
                                                            <li className="sub-title">Accessories</li>
                                                            <li><Link to="#">Shoes</Link></li>
                                                            <li><Link to="#">Scarves</Link></li>
                                                            <li><Link to="#">Watches</Link></li>
                                                            <li><Link to="#">Wristwear</Link></li>
                                                            <li><Link to="#">Backpacks</Link></li>
                                                            <li><Link to="#">Sunglasses</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="row row-cols-1 row-cols-sm-2">
                                                    <div className="col">
                                                        <Link to="demo-fashion-store-shop.html"><img
                                                            src="images/demo-fashion-store-menu-banner-01.jpg" alt="" /></Link>
                                                    </div>
                                                    <div className="col">
                                                        <Link to="demo-fashion-store-shop.html"><img
                                                            src="images/demo-fashion-store-menu-banner-02.jpg" alt="" /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown submenu">
                                        <Link to="demo-fashion-store-collection.html" className="nav-link">Collection</Link>
                                        <i className="fa-solid fa-angle-down dropdown-toggle" id="navbarDropdownMenuLink2"
                                            role="button"  aria-expanded="false"></i>
                                        <div className="dropdown-menu submenu-content" aria-labelledby="navbarDropdownMenuLink2">
                                            <div className="d-lg-flex mega-menu m-auto flex-column">
                                                <div
                                                    className="row row-cols-2 row-cols-lg-6 row-cols-md-3 row-cols-sm-2 md-mx-0 align-items-center justify-content-center">
                                                    <div className="col md-mb-25px">
                                                        <Link to="demo-fashion-store-collection.html"
                                                            className="justify-content-center mb-10px">
                                                            <img src="images/demo-fashion-store-menu-category-01.jpg"
                                                                className="border-radius-4px w-100" alt="" />
                                                        </Link>
                                                        <Link to="demo-fashion-store-collection.html"
                                                            className="btn btn-hover-animation fw-500 text-uppercase-inherit justify-content-center pt-0 pb-0">
                                                            <span>
                                                                <span className="btn-text text-dark-gray fs-17">Polo t-shirts</span>
                                                                <span className="btn-icon"><i
                                                                    className="fa-solid fa-arrow-right icon-very-small w-auto"></i></span>
                                                            </span>
                                                        </Link>
                                                    </div>
                                                    <div className="col md-mb-25px">
                                                        <Link to="demo-fashion-store-collection.html"
                                                            className="justify-content-center mb-10px">
                                                            <img src="images/demo-fashion-store-menu-category-02.jpg"
                                                                className="border-radius-4px w-100" alt="" />
                                                        </Link>
                                                        <Link to="demo-fashion-store-collection.html"
                                                            className="btn btn-hover-animation fw-500 text-uppercase-inherit justify-content-center pt-0 pb-0">
                                                            <span>
                                                                <span className="btn-text text-dark-gray fs-17">Sunglasses</span>
                                                                <span className="btn-icon"><i
                                                                    className="fa-solid fa-arrow-right icon-very-small w-auto"></i></span>
                                                            </span>
                                                        </Link>
                                                    </div>
                                                    <div className="col md-mb-25px">
                                                        <Link to="demo-fashion-store-collection.html"
                                                            className="justify-content-center mb-10px">
                                                            <img src="images/demo-fashion-store-menu-category-03.jpg"
                                                                className="border-radius-4px w-100" alt="" />
                                                        </Link>
                                                        <Link to="demo-fashion-store-collection.html"
                                                            className="btn btn-hover-animation fw-500 text-uppercase-inherit justify-content-center pt-0 pb-0">
                                                            <span>
                                                                <span className="btn-text text-dark-gray fs-17">Skinny blazer</span>
                                                                <span className="btn-icon"><i
                                                                    className="fa-solid fa-arrow-right icon-very-small w-auto"></i></span>
                                                            </span>
                                                        </Link>
                                                    </div>
                                                    <div className="col sm-mb-25px">
                                                        <Link to="demo-fashion-store-collection.html"
                                                            className="justify-content-center mb-10px">
                                                            <img src="images/demo-fashion-store-menu-category-04.jpg"
                                                                className="border-radius-4px w-100" alt="" />
                                                        </Link>
                                                        <Link to="demo-fashion-store-collection.html"
                                                            className="btn btn-hover-animation fw-500 text-uppercase-inherit justify-content-center pt-0 pb-0">
                                                            <span>
                                                                <span className="btn-text text-dark-gray fs-17">Casual shoes</span>
                                                                <span className="btn-icon"><i
                                                                    className="fa-solid fa-arrow-right icon-very-small w-auto"></i></span>
                                                            </span>
                                                        </Link>
                                                    </div>
                                                    <div className="col">
                                                        <Link to="demo-fashion-store-collection.html"
                                                            className="justify-content-center mb-10px">
                                                            <img src="images/demo-fashion-store-menu-category-05.jpg"
                                                                className="border-radius-4px w-100" alt="" />
                                                        </Link>
                                                        <Link to="demo-fashion-store-collection.html"
                                                            className="btn btn-hover-animation fw-500 text-uppercase-inherit justify-content-center pt-0 pb-0">
                                                            <span>
                                                                <span className="btn-text text-dark-gray fs-17">Winter
                                                                    jackets</span>
                                                                <span className="btn-icon"><i
                                                                    className="fa-solid fa-arrow-right icon-very-small w-auto"></i></span>
                                                            </span>
                                                        </Link>
                                                    </div>
                                                    <div className="col">
                                                        <Link to="demo-fashion-store-collection.html"
                                                            className="justify-content-center mb-10px">
                                                            <img src="images/demo-fashion-store-menu-category-06.jpg"
                                                                className="border-radius-4px w-100" alt="" />
                                                        </Link>
                                                        <Link to="demo-fashion-store-collection.html"
                                                            className="btn btn-hover-animation fw-500 text-uppercase-inherit justify-content-center pt-0 pb-0">
                                                            <span>
                                                                <span className="btn-text text-dark-gray fs-17">Men's shorts</span>
                                                                <span className="btn-icon"><i
                                                                    className="fa-solid fa-arrow-right icon-very-small w-auto"></i></span>
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="navbar-nav alt-font navbar-right justify-content-start">
                                    <li className="nav-item">
                                        <Link to="demo-fashion-store-magazine.html" className="nav-link">Magazine</Link>
                                    </li>
                                    <li className="nav-item dropdown simple-dropdown">
                                        <Link to="#" className="nav-link">Pages</Link>
                                        <i className="fa-solid fa-angle-down dropdown-toggle" id="navbarDropdownMenuLink3"
                                            role="button" aria-expanded="false"></i>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink3">
                                            <li><Link to="demo-fashion-store-about.html">About</Link></li>
                                            <li><Link to="demo-fashion-store-faq.html">Faq</Link></li>
                                            <li><Link to="demo-fashion-store-wishlist.html">Wishlist</Link></li>
                                            <li><Link to="demo-fashion-store-account.html">Account</Link></li>
                                            <li><Link to="demo-fashion-store-cart.html">Cart</Link></li>
                                            <li><Link to="demo-fashion-store-checkout.html">Checkout</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="demo-fashion-store-contact.html" className="nav-link">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-auto col-xxl-3 col-lg-2 text-end">
                            <div className="header-icon">
                                <div className="header-search-icon icon alt-font">
                                    <Link to="#" className="search-form-icon header-search-form"><i
                                        className="feather icon-feather-search me-5px"></i><span
                                            className="d-none d-xxl-inline-block">Search</span></Link>
                                    <div className="search-form-wrapper">
                                        <button title="Close" type="button" className="search-close alt-font">×</button>
                                        <form id="search-form" role="search" method="get" className="search-form text-left"
                                            action="search-result.html">
                                            <div className="search-form-box">
                                                <h2 className="text-dark-gray text-center mb-4 fw-600 alt-font ls-minus-1px">What
                                                    are you looking for?</h2>
                                                <input className="search-input alt-font" id="search-form-input5e219ef164995"
                                                    placeholder="Enter your keywords..." name="s"  type="text"
                                                />
                                                <button type="submit" className="search-button">
                                                    <i className="feather icon-feather-search" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="widget-text icon alt-font">
                                    <Link to="demo-fashion-store-account.html"><i
                                        className="feather icon-feather-user d-inline-block me-5px"></i><span
                                            className="d-none d-xxl-inline-block">Account</span></Link>
                                </div>
                                <div className="header-cart-icon icon">
                                    <div className="header-cart dropdown">
                                        <Link to="#"><i className="feather icon-feather-shopping-bag"></i><span
                                            className="cart-count alt-font text-white bg-dark-gray">2</span></Link>
                                        <ul className="cart-item-list">
                                            <li className="cart-item align-items-center">
                                                <Link to="#" className="alt-font close">×</Link>
                                                <div className="product-image">
                                                    <Link to="demo-fashion-store-single-product.html"><img
                                                        src="images/demo-fashion-store-product-01.jpg" className="cart-thumb"
                                                        alt="" /></Link>
                                                </div>
                                                <div className="product-detail fw-600">
                                                    <Link to="demo-fashion-store-single-product.html">Ribbed tank</Link>
                                                    <span className="item-ammount fw-400">1 x $23.00</span>
                                                </div>
                                            </li>
                                            <li className="cart-item align-items-center">
                                                <Link to="#" className="alt-font close">×</Link>
                                                <div className="product-image">
                                                    <Link to="demo-fashion-store-single-product.html"><img
                                                        src="images/demo-fashion-store-product-02.jpg" className="cart-thumb"
                                                        alt="" /></Link>
                                                </div>
                                                <div className="product-detail fw-600">
                                                    <Link to="demo-fashion-store-single-product.html">Pleated dress</Link>
                                                    <span className="item-ammount fw-400">2 x $15.00</span>
                                                </div>
                                            </li>
                                            <li className="cart-total">
                                                <div className="fs-18 alt-font mb-15px"><span
                                                    className="w-50 fw-500 text-start">Subtotal:</span><span
                                                        className="w-50 text-end fw-700">$199.99</span></div>
                                                <Link to="demo-fashion-store-cart.html"
                                                    className="btn btn-large btn-transparent-light-gray border-color-extra-medium-gray">View
                                                    cart</Link>
                                                <Link to="demo-fashion-store-checkout.html"
                                                    className="btn btn-large btn-dark-gray btn-box-shadow">Checkout</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="p-0">
        {/* <div className="swiper full-screen top-space-margin md-h-600px sm-h-500px magic-cursor magic-cursor-vertical swiper-number-pagination-progress swiper-number-pagination-progress-vertical"
            data-slider-options="{ &quot;slidesPerView&quot;: 1, &quot;direction&quot;: &quot;horizontal&quot;, &quot;loop&quot;: true, &quot;parallax&quot;: true, &quot;speed&quot;: 1000, &quot;pagination&quot;: { &quot;el&quot;: &quot;.swiper-number&quot;, &quot;clickable&quot;: true }, &quot;autoplay&quot;: { &quot;delay&quot;: 4000, &quot;disableOnInteraction&quot;: false },  &quot;keyboard&quot;: { &quot;enabled&quot;: true, &quot;onlyInViewport&quot;: true }, &quot;breakpoints&quot;: { &quot;1199&quot;: { &quot;direction&quot;: &quot;vertical&quot; }}, &quot;effect&quot;: &quot;slide&quot; }"
            data-swiper-number-pagination-progress="true">
            <div className="swiper-wrapper"> */}
             <div className="swiper full-screen top-space-margin md-h-600px sm-h-500px magic-cursor magic-cursor-vertical swiper-number-pagination-progress swiper-number-pagination-progress-vertical"
      data-slider-options="{ &quot;slidesPerView&quot;: 1, &quot;direction&quot;: &quot;horizontal&quot;, &quot;loop&quot;: true, &quot;parallax&quot;: true, &quot;speed&quot;: 1000, &quot;pagination&quot;: { &quot;el&quot;: &quot;.swiper-number&quot;, &quot;clickable&quot;: true }, &quot;autoplay&quot;: { &quot;delay&quot;: 4000, &quot;disableOnInteraction&quot;: false },  &quot;keyboard&quot;: { &quot;enabled&quot;: true, &quot;onlyInViewport&quot;: true }, &quot;breakpoints&quot;: { &quot;1199&quot;: { &quot;direction&quot;: &quot;vertical&quot; }}, &quot;effect&quot;: &quot;slide&quot; }"
      data-swiper-number-pagination-progress="true">
      <div className="swiper-wrapper">


                {/* <div className="swiper-slide overflow-hidden">
                    <div className="cover-background position-absolute top-0 start-0 w-100 h-100" data-swiper-parallax="500"
                        style={{backgroundImage:"url('images/demo-fashion-store-slider-01.jpg')"}}>
                        <div className="container h-100">
                            <div className="row align-items-center h-100 justify-content-start">
                                <div
                                    className="col-md-10 position-relative text-white d-flex flex-column justify-content-center h-100">
                                    <div data-anime="{ &quot;opacity&quot;: [0, 1], &quot;translateY&quot;: [50, 0], &quot;easing&quot;: &quot;easeOutQuad&quot;, &quot;duration&quot;: 500, &quot;delay&quot;: 300 }"
                                        className="alt-font text-dark-gray mb-25px fs-20 sm-mb-15px"><span
                                            className="text-highlight">Discount on selected collection!<span
                                                className="bg-base-color h-8px bottom-0px"></span></span></div>
                                    <div className="alt-font fs-120 xs-fs-95 lh-100 mb-40px text-dark-gray fw-600 transform-origin-right ls-minus-5px sm-mb-25px"
                                        data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;rotateX&quot;: [90, 0], &quot;opacity&quot;: [0,1], &quot;staggervalue&quot;: 150, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
                                        <span className="d-block">Women's</span>
                                        <span className="d-block fw-300">collection</span>
                                    </div>
                                    <div
                                        data-anime="{ &quot;opacity&quot;: [0, 1], &quot;translateY&quot;: [100, 0], &quot;easing&quot;: &quot;easeOutQuad&quot;, &quot;duration&quot;: 800, &quot;delay&quot;: 400 }">
                                        <Link to="demo-fashion-store-shop.html"
                                            className="btn btn-dark-gray btn-box-shadow btn-large">View collection</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="swiper-slide overflow-hidden">
                    <div className="cover-background position-absolute top-0 start-0 w-100 h-100" data-swiper-parallax="500"
                        style={{backgroundImage:"url('images/demo-fashion-store-slider-02.jpg')"}}>
                        <div className="container h-100">
                            <div className="row align-items-center h-100 justify-content-start">
                                <div
                                    className="col-md-10 position-relative text-white d-flex flex-column justify-content-center h-100">
                                    <div data-anime="{ &quot;opacity&quot;: [0, 1], &quot;translateY&quot;: [50, 0], &quot;easing&quot;: &quot;easeOutQuad&quot;, &quot;duration&quot;: 500, &quot;delay&quot;: 300 }"
                                        className="alt-font text-dark-gray mb-25px fs-20 sm-mb-15px"><span
                                            className="text-highlight">Discount on selected collection!<span
                                                className="bg-base-color h-8px bottom-0px"></span></span></div>
                                    <div className="alt-font fs-120 xs-fs-95 lh-100 mb-40px text-dark-gray fw-600 transform-origin-right ls-minus-5px sm-mb-25px"
                                        data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;rotateX&quot;: [90, 0], &quot;opacity&quot;: [0,1], &quot;staggervalue&quot;: 150, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
                                        <span className="d-block">Men's</span>
                                        <span className="d-block fw-300">collection</span>
                                    </div>
                                    <div
                                        data-anime="{ &quot;opacity&quot;: [0, 1], &quot;translateY&quot;: [100, 0], &quot;easing&quot;: &quot;easeOutQuad&quot;, &quot;duration&quot;: 800, &quot;delay&quot;: 400 }">
                                        <Link to="demo-fashion-store-shop.html"
                                            className="btn btn-dark-gray btn-box-shadow btn-large">View collection</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="swiper-slide overflow-hidden">
                    <div className="cover-background position-absolute top-0 start-0 w-100 h-100" data-swiper-parallax="500"
                        style={{backgroundImage:"url('images/demo-fashion-store-slider-03.jpg')"}}>
                        <div className="container h-100">
                            <div className="row align-items-center h-100 justify-content-start">
                                <div
                                    className="col-md-10 position-relative text-white d-flex flex-column justify-content-center h-100">
                                    <div data-anime="{ &quot;opacity&quot;: [0, 1], &quot;translateY&quot;: [50, 0], &quot;easing&quot;: &quot;easeOutQuad&quot;, &quot;duration&quot;: 500, &quot;delay&quot;: 300 }"
                                        className="alt-font text-dark-gray mb-25px fs-20 sm-mb-15px"><span
                                            className="text-highlight">Discount on selected collection!<span
                                                className="bg-base-color h-8px bottom-0px"></span></span></div>
                                    <div className="alt-font fs-120 xs-fs-95 lh-100 mb-40px text-dark-gray fw-600 transform-origin-right ls-minus-5px sm-mb-25px"
                                        data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;rotateX&quot;: [90, 0], &quot;opacity&quot;: [0,1], &quot;staggervalue&quot;: 150, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
                                        <span className="d-block">Children's</span>
                                        <span className="d-block fw-300">collection</span>
                                    </div>
                                    <div
                                        data-anime="{ &quot;opacity&quot;: [0, 1], &quot;translateY&quot;: [100, 0], &quot;easing&quot;: &quot;easeOutQuad&quot;, &quot;duration&quot;: 800, &quot;delay&quot;: 400 }">
                                        <Link to="demo-fashion-store-shop.html"
                                            className="btn btn-dark-gray btn-box-shadow btn-large">View collection</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                
        <div className="swiper-slide overflow-hidden">
          <div className="cover-background position-absolute top-0 start-0 w-100 h-100" data-swiper-parallax="500"
            style={{ backgroundImage: "url('images/demo-fashion-store-slider-01.jpg')" }}>
            <div className="container h-100">
              <div className="row align-items-center h-100 justify-content-start">
                <div
                  className="col-md-10 position-relative text-white d-flex flex-column justify-content-center h-100">
                  <div className="alt-font text-dark-gray mb-25px fs-20 sm-mb-15px">
                    <span className="text-highlight">Discount on selected collection!
                      <span className="bg-base-color h-8px bottom-0px"></span>
                    </span>
                  </div>
                  <div className="alt-font fs-120 xs-fs-95 lh-100 mb-40px text-dark-gray fw-600 transform-origin-right ls-minus-5px sm-mb-25px">
                    <span className="d-block">Women's</span>
                    <span className="d-block fw-300">collection</span>
                  </div>
                  <div>
                    <Link to="demo-fashion-store-shop.html" className="btn btn-dark-gray btn-box-shadow btn-large">View collection</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide overflow-hidden">
          <div className="cover-background position-absolute top-0 start-0 w-100 h-100" data-swiper-parallax="500"
            style={{ backgroundImage: "url('images/demo-fashion-store-slider-02.jpg')" }}>
            <div className="container h-100">
              <div className="row align-items-center h-100 justify-content-start">
                <div
                  className="col-md-10 position-relative text-white d-flex flex-column justify-content-center h-100">
                  <div className="alt-font text-dark-gray mb-25px fs-20 sm-mb-15px">
                    <span className="text-highlight">Discount on selected collection!
                      <span className="bg-base-color h-8px bottom-0px"></span>
                    </span>
                  </div>
                  <div className="alt-font fs-120 xs-fs-95 lh-100 mb-40px text-dark-gray fw-600 transform-origin-right ls-minus-5px sm-mb-25px">
                    <span className="d-block">Women's</span>
                    <span className="d-block fw-300">collection</span>
                  </div>
                  <div>
                    <Link to="demo-fashion-store-shop.html" className="btn btn-dark-gray btn-box-shadow btn-large">View collection</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


            </div>

            <div className="swiper-pagination-wrapper">
        <div className="pagination-progress-vertical d-flex align-items-center justify-content-center">
          <div className="number-prev text-dark-gray fs-16 fw-500"></div>
          <div className="swiper-pagination-progress">
            <span className="swiper-progress"></span>
          </div>
          <div className="number-next text-dark-gray fs-16 fw-500"></div>
        </div>
      </div>

        </div>
    </section>


    <section className="half-section">
        <div className="container">
            <div className="row row-cols-1 row-cols-xl-4 row-cols-lg-4 row-cols-md-2 row-cols-sm-2">

                <div className="col icon-with-text-style-01 md-mb-35px">
                    <div className="feature-box feature-box-left-icon-middle last-paragraph-no-margin">
                        <div className="feature-box-icon me-20px">
                            <i className="line-icon-Box-Close icon-large text-dark-gray"></i>
                        </div>
                        <div className="feature-box-content">
                            <span className="alt-font fs-20 fw-500 d-block text-dark-gray">Free shipping</span>
                            <p className="fs-16 lh-24">Free shipping on first order</p>
                        </div>
                    </div>
                </div>


                <div className="col icon-with-text-style-01 md-mb-35px">
                    <div className="feature-box feature-box-left-icon-middle last-paragraph-no-margin">
                        <div className="feature-box-icon me-20px">
                            <i className="line-icon-Reload-3 icon-large text-dark-gray"></i>
                        </div>
                        <div className="feature-box-content">
                            <span className="alt-font fs-20 fw-500 d-block text-dark-gray">15 days returns</span>
                            <p className="fs-16 lh-24">Moneyback guarantee</p>
                        </div>
                    </div>
                </div>


                <div className="col icon-with-text-style-01 xs-mb-35px">
                    <div className="feature-box feature-box-left-icon-middle last-paragraph-no-margin">
                        <div className="feature-box-icon me-20px">
                            <i className="line-icon-Credit-Card2 icon-large text-dark-gray"></i>
                        </div>
                        <div className="feature-box-content">
                            <span className="alt-font fs-20 fw-500 d-block text-dark-gray">Secure payment</span>
                            <p className="fs-16 lh-24">100% protected payment</p>
                        </div>
                    </div>
                </div>


                <div className="col icon-with-text-style-01">
                    <div className="feature-box feature-box-left-icon-middle last-paragraph-no-margin">
                        <div className="feature-box-icon me-20px">
                            <i className="line-icon-Phone-2 icon-large text-dark-gray"></i>
                        </div>
                        <div className="feature-box-content">
                            <span className="alt-font fs-20 fw-500 d-block text-dark-gray">Online support</span>
                            <p className="fs-16 lh-24">24/7 days a week support</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>


    <section className="pt-0 pb-0 ps-7 pe-7 lg-ps-3 lg-pe-3 xs-p-0">
        <div className="container-fluid">
            <div className="row row-cols-1 row-cols-xl-4 row-cols-lg-2 row-cols-md-2"
                data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [-15, 0], &quot;perspective&quot;: [1200,1200], &quot;scale&quot;: [1.1, 1], &quot;rotateX&quot;: [50, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 400, &quot;delay&quot;: 100, &quot;staggervalue&quot;: 200, &quot;easing&quot;: &quot;easeOutQuad&quot; }">

                <div className="col categories-style-02 lg-mb-30px">
                    <div className="categories-box">
                        <Link to="demo-fashion-store-shop.html">
                            <img className="sm-w-100" src="images/demo-fashion-store-banner-01.jpg" alt="" />
                        </Link>
                        <div
                            className="border-color-transparent-dark-very-light border alt-font fw-500 text-dark-gray text-uppercase ps-15px pe-15px fs-11 lh-26 border-radius-100px d-inline-block position-absolute right-20px top-20px">
                            8 items</div>
                        <div className="absolute-bottom-center bottom-40px md-bottom-25px">
                            <Link to="demo-fashion-store-shop.html"
                                className="btn btn-white btn-switch-text btn-round-edge btn-box-shadow fs-18 text-uppercase-inherit p-5 min-w-150px">
                                <span>
                                    <span className="btn-double-text ls-0px" data-text="Women">Women</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="col categories-style-02 lg-mb-30px">
                    <div className="categories-box">
                        <Link to="demo-fashion-store-shop.html">
                            <img className="sm-w-100" src="images/demo-fashion-store-banner-02.jpg" alt="" />
                        </Link>
                        <div
                            className="border-color-transparent-dark-very-light border alt-font fw-500 text-dark-gray text-uppercase ps-15px pe-15px fs-11 lh-26 border-radius-100px d-inline-block position-absolute right-20px top-20px">
                            9 items</div>
                        <div className="absolute-bottom-center bottom-40px md-bottom-25px">
                            <Link to="demo-fashion-store-shop.html"
                                className="btn btn-white btn-switch-text btn-round-edge btn-box-shadow fs-18 text-uppercase-inherit p-5 min-w-150px">
                                <span>
                                    <span className="btn-double-text ls-0px" data-text="Men">Men</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="col categories-style-02 sm-mb-30px">
                    <div className="categories-box">
                        <Link to="demo-fashion-store-shop.html">
                            <img className="sm-w-100" src="images/demo-fashion-store-banner-03.jpg" alt="" />
                        </Link>
                        <div
                            className="border-color-transparent-dark-very-light border alt-font fw-500 text-dark-gray text-uppercase ps-15px pe-15px fs-11 lh-26 border-radius-100px d-inline-block position-absolute right-20px top-20px">
                            8 items</div>
                        <div className="absolute-bottom-center bottom-40px md-bottom-25px">
                            <Link to="demo-fashion-store-shop.html"
                                className="btn btn-white btn-switch-text btn-round-edge btn-box-shadow fs-18 text-uppercase-inherit p-5 min-w-150px">
                                <span>
                                    <span className="btn-double-text ls-0px" data-text="Accessories">Accessories</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="col categories-style-02">
                    <div className="categories-box">
                        <Link to="demo-fashion-store-shop.html">
                            <img className="sm-w-100" src="images/demo-fashion-store-banner-04.jpg" alt="" />
                        </Link>
                        <div
                            className="border-color-transparent-dark-very-light border alt-font fw-500 text-dark-gray text-uppercase ps-15px pe-15px fs-11 lh-26 border-radius-100px d-inline-block position-absolute right-20px top-20px">
                            8 items</div>
                        <div className="absolute-bottom-center bottom-40px md-bottom-25px">
                            <Link to="demo-fashion-store-shop.html"
                                className="btn btn-white btn-switch-text btn-round-edge btn-box-shadow fs-18 text-uppercase-inherit p-5 min-w-150px">
                                <span>
                                    <span className="btn-double-text ls-0px" data-text="Kids">Kids</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>


    <section className="ps-7 pe-7 pb-3 lg-ps-3 lg-pe-3 sm-pb-6 xs-px-0">
        <div className="container">
            <div className="row mb-5 xs-mb-8">
                <div className="col-12 text-center">
                    <h2 className="alt-font text-dark-gray mb-0 ls-minus-2px">Best seller <span
                            className="text-highlight fw-600">products<span
                                className="bg-base-color h-5px bottom-2px"></span></span></h2>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <ul style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}} className="shop-modern shop-wrapper grid grid-5col lg-grid-4col md-grid-3col sm-grid-2col xs-grid-1col gutter-extra-large text-center"
                        >
                          {/* <li className="grid-sizer"></li>   */}

                        <li className="grid-item">
                            <div className="shop-box mb-10px">
                                <div className="shop-image mb-20px">
                                    <Link to="demo-fashion-store-single-product.html">
                                        <img src="images/demo-fashion-store-product-01.jpg" alt="" />
                                        <span className="lable new">New</span>
                                        <div className="shop-overlay bg-gradient-gray-light-dark-transparent"></div>
                                    </Link>
                                    <div className="shop-buttons-wrap">
                                        <Link to="demo-fashion-store-single-product.html"
                                            className="alt-font btn btn-small btn-box-shadow btn-white btn-round-edge left-icon add-to-cart">
                                            <i className="feather icon-feather-shopping-bag"></i><span
                                                className="quick-view-text button-text">Add to cart</span>
                                        </Link>
                                    </div>
                                    <div className="shop-hover d-flex justify-content-center">
                                        <ul>
                                            <li>
                                                <Link to="#"
                                                    className="w-40px h-40px bg-white text-dark-gray d-flex align-items-center justify-content-center rounded-circle ms-5px me-5px"
                                                    data-bs-toggle="tooltip" data-bs-placement="left"
                                                    title="Add to wishlist"><i
                                                        className="feather icon-feather-heart fs-16"></i></Link>
                                            </li>
                                            <li>
                                                <Link to="#"
                                                    className="w-40px h-40px bg-white text-dark-gray d-flex align-items-center justify-content-center rounded-circle ms-5px me-5px"
                                                    data-bs-toggle="tooltip" data-bs-placement="left"
                                                    title="Quick shop"><i
                                                        className="feather icon-feather-eye fs-16"></i></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="shop-footer text-center">
                                    <Link to="demo-fashion-store-single-product.html"
                                        className="alt-font text-dark-gray fs-19 fw-500">Textured sweater</Link>
                                    <div className="price lh-22 fs-16"><del>$200.00</del>$189.00</div>
                                </div>
                            </div>
                        </li>


                        <li className="grid-item">
                            <div className="shop-box mb-10px">
                                <div className="shop-image mb-20px">
                                    <Link to="demo-fashion-store-single-product.html">
                                        <img src="images/demo-fashion-store-product-02.jpg" alt="" />
                                        <div className="shop-overlay bg-gradient-gray-light-dark-transparent"></div>
                                    </Link>
                                    <div className="shop-buttons-wrap">
                                        <Link to="demo-fashion-store-single-product.html"
                                            className="alt-font btn btn-small btn-box-shadow btn-white btn-round-edge left-icon add-to-cart">
                                            <i className="feather icon-feather-shopping-bag"></i><span
                                                className="quick-view-text button-text">Add to cart</span>
                                        </Link>
                                    </div>
                                    <div className="shop-hover d-flex justify-content-center">
                                        <ul>
                                            <li>
                                                <Link to="#"
                                                    className="w-40px h-40px bg-white text-dark-gray d-flex align-items-center justify-content-center rounded-circle ms-5px me-5px"
                                                    data-bs-toggle="tooltip" data-bs-placement="left"
                                                    title="Add to wishlist"><i
                                                        className="feather icon-feather-heart fs-16"></i></Link>
                                            </li>
                                            <li>
                                                <Link to="#"
                                                    className="w-40px h-40px bg-white text-dark-gray d-flex align-items-center justify-content-center rounded-circle ms-5px me-5px"
                                                    data-bs-toggle="tooltip" data-bs-placement="left"
                                                    title="Quick shop"><i
                                                        className="feather icon-feather-eye fs-16"></i></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="shop-footer text-center">
                                    <Link to="demo-fashion-store-single-product.html"
                                        className="alt-font text-dark-gray fs-19 fw-500">Traveller shirt</Link>
                                    <div className="price lh-22 fs-16"><del>$350.00</del>$289.00</div>
                                </div>
                            </div>
                        </li>


                        <li className="grid-item">
                            <div className="shop-box mb-10px">
                                <div className="shop-image mb-20px">
                                    <Link to="demo-fashion-store-single-product.html">
                                        <img src="images/demo-fashion-store-product-03.jpg" alt="" />
                                        <div className="shop-overlay bg-gradient-gray-light-dark-transparent"></div>
                                    </Link>
                                    <div className="shop-buttons-wrap">
                                        <Link to="demo-fashion-store-single-product.html"
                                            className="alt-font btn btn-small btn-box-shadow btn-white btn-round-edge left-icon add-to-cart">
                                            <i className="feather icon-feather-shopping-bag"></i><span
                                                className="quick-view-text button-text">Add to cart</span>
                                        </Link>
                                    </div>
                                    <div className="shop-hover d-flex justify-content-center">
                                        <ul>
                                            <li>
                                                <Link to="#"
                                                    className="w-40px h-40px bg-white text-dark-gray d-flex align-items-center justify-content-center rounded-circle ms-5px me-5px"
                                                    data-bs-toggle="tooltip" data-bs-placement="left"
                                                    title="Add to wishlist"><i
                                                        className="feather icon-feather-heart fs-16"></i></Link>
                                            </li>
                                            <li>
                                                <Link to="#"
                                                    className="w-40px h-40px bg-white text-dark-gray d-flex align-items-center justify-content-center rounded-circle ms-5px me-5px"
                                                    data-bs-toggle="tooltip" data-bs-placement="left"
                                                    title="Quick shop"><i
                                                        className="feather icon-feather-eye fs-16"></i></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="shop-footer text-center">
                                    <Link to="demo-fashion-store-single-product.html"
                                        className="alt-font text-dark-gray fs-19 fw-500">Crewneck sweatshirt</Link>
                                    <div className="price lh-22 fs-16"><del>$220.00</del>$199.00</div>
                                </div>
                            </div>
                        </li>


                        <li className="grid-item">
                            <div className="shop-box mb-10px">
                                <div className="shop-image mb-20px">
                                    <Link to="demo-fashion-store-single-product.html">
                                        <img src="images/demo-fashion-store-product-04.jpg" alt="" />
                                        <div className="shop-overlay bg-gradient-gray-light-dark-transparent"></div>
                                    </Link>
                                    <div className="shop-buttons-wrap">
                                        <Link to="demo-fashion-store-single-product.html"
                                            className="alt-font btn btn-small btn-box-shadow btn-white btn-round-edge left-icon add-to-cart">
                                            <i className="feather icon-feather-shopping-bag"></i><span
                                                className="quick-view-text button-text">Add to cart</span>
                                        </Link>
                                    </div>
                                    <div className="shop-hover d-flex justify-content-center">
                                        <ul>
                                            <li>
                                                <Link to="#"
                                                    className="w-40px h-40px bg-white text-dark-gray d-flex align-items-center justify-content-center rounded-circle ms-5px me-5px"
                                                    data-bs-toggle="tooltip" data-bs-placement="left"
                                                    title="Add to wishlist"><i
                                                        className="feather icon-feather-heart fs-16"></i></Link>
                                            </li>
                                            <li>
                                                <Link to="#"
                                                    className="w-40px h-40px bg-white text-dark-gray d-flex align-items-center justify-content-center rounded-circle ms-5px me-5px"
                                                    data-bs-toggle="tooltip" data-bs-placement="left"
                                                    title="Quick shop"><i
                                                        className="feather icon-feather-eye fs-16"></i></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="shop-footer text-center">
                                    <Link to="demo-fashion-store-single-product.html"
                                        className="alt-font text-dark-gray fs-19 fw-500">Skinny trousers</Link>
                                    <div className="price lh-22 fs-16"><del>$300.00</del>$259.00</div>
                                </div>
                            </div>
                        </li>


                        <li className="grid-item">
                            <div className="shop-box mb-10px">
                                <div className="shop-image mb-20px">
                                    <Link to="demo-fashion-store-single-product.html">
                                        <img src="images/demo-fashion-store-product-05.jpg" alt="" />
                                        <div className="shop-overlay bg-gradient-gray-light-dark-transparent"></div>
                                    </Link>
                                    <div className="shop-buttons-wrap">
                                        <Link to="demo-fashion-store-single-product.html"
                                            className="alt-font btn btn-small btn-box-shadow btn-white btn-round-edge left-icon add-to-cart">
                                            <i className="feather icon-feather-shopping-bag"></i><span
                                                className="quick-view-text button-text">Add to cart</span>
                                        </Link>
                                    </div>
                                    <div className="shop-hover d-flex justify-content-center">
                                        <ul>
                                            <li>
                                                <Link to="#"
                                                    className="w-40px h-40px bg-white text-dark-gray d-flex align-items-center justify-content-center rounded-circle ms-5px me-5px"
                                                    data-bs-toggle="tooltip" data-bs-placement="left"
                                                    title="Add to wishlist"><i
                                                        className="feather icon-feather-heart fs-16"></i></Link>
                                            </li>
                                            <li>
                                                <Link to="#"
                                                    className="w-40px h-40px bg-white text-dark-gray d-flex align-items-center justify-content-center rounded-circle ms-5px me-5px"
                                                    data-bs-toggle="tooltip" data-bs-placement="left"
                                                    title="Quick shop"><i
                                                        className="feather icon-feather-eye fs-16"></i></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="shop-footer text-center">
                                    <Link to="demo-fashion-store-single-product.html"
                                        className="alt-font text-dark-gray fs-19 fw-500">Sleeve sweater</Link>
                                    <div className="price lh-22 fs-16"><del>$250.00</del>$239.00</div>
                                </div>
                            </div>
                        </li>


                        <li className="grid-item">
                            <div className="shop-box mb-10px">
                                <div className="shop-image mb-20px">
                                    <Link to="demo-fashion-store-single-product.html">
                                        <img src="images/demo-fashion-store-product-06.jpg" alt="" />
                                        <span className="lable hot">Hot</span>
                                        <div className="shop-overlay bg-gradient-gray-light-dark-transparent"></div>
                                    </Link>
                                    <div className="shop-buttons-wrap">
                                        <Link to="demo-fashion-store-single-product.html"
                                            className="alt-font btn btn-small btn-box-shadow btn-white btn-round-edge left-icon add-to-cart">
                                            <i className="feather icon-feather-shopping-bag"></i><span
                                                className="quick-view-text button-text">Add to cart</span>
                                        </Link>
                                    </div>
                                    <div className="shop-hover d-flex justify-content-center">
                                        <ul>
                                            <li>
                                                <Link to="#"
                                                    className="w-40px h-40px bg-white text-dark-gray d-flex align-items-center justify-content-center rounded-circle ms-5px me-5px"
                                                    data-bs-toggle="tooltip" data-bs-placement="left"
                                                    title="Add to wishlist"><i
                                                        className="feather icon-feather-heart fs-16"></i></Link>
                                            </li>
                                            <li>
                                                <Link to="#"
                                                    className="w-40px h-40px bg-white text-dark-gray d-flex align-items-center justify-content-center rounded-circle ms-5px me-5px"
                                                    data-bs-toggle="tooltip" data-bs-placement="left"
                                                    title="Quick shop"><i
                                                        className="feather icon-feather-eye fs-16"></i></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="shop-footer text-center">
                                    <Link to="demo-fashion-store-single-product.html"
                                        className="alt-font text-dark-gray fs-19 fw-500">Pocket sweatshirt</Link>
                                    <div className="price lh-22 fs-16"><del>$200.00</del>$189.00</div>
                                </div>
                            </div>
                        </li>


                        <li className="grid-item">
                            <div className="shop-box mb-10px">
                                <div className="shop-image mb-20px">
                                    <Link to="demo-fashion-store-single-product.html">
                                        <img src="images/demo-fashion-store-product-07.jpg" alt="" />
                                        <div className="shop-overlay bg-gradient-gray-light-dark-transparent"></div>
                                    </Link>
                                    <div className="shop-buttons-wrap">
                                        <Link to="demo-fashion-store-single-product.html"
                                            className="alt-font btn btn-small btn-box-shadow btn-white btn-round-edge left-icon add-to-cart">
                                            <i className="feather icon-feather-shopping-bag"></i><span
                                                className="quick-view-text button-text">Add to cart</span>
                                        </Link>
                                    </div>
                                    <div className="shop-hover d-flex justify-content-center">
                                        <ul>
                                            <li>
                                                <Link to="#"
                                                    className="w-40px h-40px bg-white text-dark-gray d-flex align-items-center justify-content-center rounded-circle ms-5px me-5px"
                                                    data-bs-toggle="tooltip" data-bs-placement="left"
                                                    title="Add to wishlist"><i
                                                        className="feather icon-feather-heart fs-16"></i></Link>
                                            </li>
                                            <li>
                                                <Link to="#"
                                                    className="w-40px h-40px bg-white text-dark-gray d-flex align-items-center justify-content-center rounded-circle ms-5px me-5px"
                                                    data-bs-toggle="tooltip" data-bs-placement="left"
                                                    title="Quick shop"><i
                                                        className="feather icon-feather-eye fs-16"></i></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="shop-footer text-center">
                                    <Link to="demo-fashion-store-single-product.html"
                                        className="alt-font text-dark-gray fs-19 fw-500">Cotton sweater</Link>
                                    <div className="price lh-22 fs-16"><del>$150.00</del>$129.00</div>
                                </div>
                            </div>
                        </li>


                        <li className="grid-item">
                            <div className="shop-box mb-10px">
                                <div className="shop-image mb-20px">
                                    <Link to="demo-fashion-store-single-product.html">
                                        <img src="images/demo-fashion-store-product-08.jpg" alt="" />
                                        <div className="shop-overlay bg-gradient-gray-light-dark-transparent"></div>
                                    </Link>
                                    <div className="shop-buttons-wrap">
                                        <Link to="demo-fashion-store-single-product.html"
                                            className="alt-font btn btn-small btn-box-shadow btn-white btn-round-edge left-icon add-to-cart">
                                            <i className="feather icon-feather-shopping-bag"></i><span
                                                className="quick-view-text button-text">Add to cart</span>
                                        </Link>
                                    </div>
                                    <div className="shop-hover d-flex justify-content-center">
                                        <ul>
                                            <li>
                                                <Link to="#"
                                                    className="w-40px h-40px bg-white text-dark-gray d-flex align-items-center justify-content-center rounded-circle ms-5px me-5px"
                                                    data-bs-toggle="tooltip" data-bs-placement="left"
                                                    title="Add to wishlist"><i
                                                        className="feather icon-feather-heart fs-16"></i></Link>
                                            </li>
                                            <li>
                                                <Link to="#"
                                                    className="w-40px h-40px bg-white text-dark-gray d-flex align-items-center justify-content-center rounded-circle ms-5px me-5px"
                                                    data-bs-toggle="tooltip" data-bs-placement="left"
                                                    title="Quick shop"><i
                                                        className="feather icon-feather-eye fs-16"></i></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="shop-footer text-center">
                                    <Link to="demo-fashion-store-single-product.html"
                                        className="alt-font text-dark-gray fs-19 fw-500">Texture regular</Link>
                                    <div className="price lh-22 fs-16"><del>$170.00</del>$120.00</div>
                                </div>
                            </div>
                        </li>


                        <li className="grid-item">
                            <div className="shop-box mb-10px">
                                <div className="shop-image mb-20px">
                                    <Link to="demo-fashion-store-single-product.html">
                                        <img src="images/demo-fashion-store-product-09.jpg" alt="" />
                                        <div className="shop-overlay bg-gradient-gray-light-dark-transparent"></div>
                                    </Link>
                                    <div className="shop-buttons-wrap">
                                        <Link to="demo-fashion-store-single-product.html"
                                            className="alt-font btn btn-small btn-box-shadow btn-white btn-round-edge left-icon add-to-cart">
                                            <i className="feather icon-feather-shopping-bag"></i><span
                                                className="quick-view-text button-text">Add to cart</span>
                                        </Link>
                                    </div>
                                    <div className="shop-hover d-flex justify-content-center">
                                        <ul>
                                            <li>
                                                <Link to="#"
                                                    className="w-40px h-40px bg-white text-dark-gray d-flex align-items-center justify-content-center rounded-circle ms-5px me-5px"
                                                    data-bs-toggle="tooltip" data-bs-placement="left"
                                                    title="Add to wishlist"><i
                                                        className="feather icon-feather-heart fs-16"></i></Link>
                                            </li>
                                            <li>
                                                <Link to="#"
                                                    className="w-40px h-40px bg-white text-dark-gray d-flex align-items-center justify-content-center rounded-circle ms-5px me-5px"
                                                    data-bs-toggle="tooltip" data-bs-placement="left"
                                                    title="Quick shop"><i
                                                        className="feather icon-feather-eye fs-16"></i></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="shop-footer text-center">
                                    <Link to="demo-fashion-store-single-product.html"
                                        className="alt-font text-dark-gray fs-19 fw-500">Sequined dress</Link>
                                    <div className="price lh-22 fs-16"><del>$190.00</del>$150.00</div>
                                </div>
                            </div>
                        </li>


                        <li className="grid-item">
                            <div className="shop-box mb-10px">
                                <div className="shop-image mb-20px">
                                    <Link to="demo-fashion-store-single-product.html">
                                        <img src="images/demo-fashion-store-product-10.jpg" alt="" />
                                        <div className="shop-overlay bg-gradient-gray-light-dark-transparent"></div>
                                    </Link>
                                    <div className="shop-buttons-wrap">
                                        <Link to="demo-fashion-store-single-product.html"
                                            className="alt-font btn btn-small btn-box-shadow btn-white btn-round-edge left-icon add-to-cart">
                                            <i className="feather icon-feather-shopping-bag"></i><span
                                                className="quick-view-text button-text">Add to cart</span>
                                        </Link>
                                    </div>
                                    <div className="shop-hover d-flex justify-content-center">
                                        <ul>
                                            <li>
                                                <Link to="#"
                                                    className="w-40px h-40px bg-white text-dark-gray d-flex align-items-center justify-content-center rounded-circle ms-5px me-5px"
                                                    data-bs-toggle="tooltip" data-bs-placement="left"
                                                    title="Add to wishlist"><i
                                                        className="feather icon-feather-heart fs-16"></i></Link>
                                            </li>
                                            <li>
                                                <Link to="#"
                                                    className="w-40px h-40px bg-white text-dark-gray d-flex align-items-center justify-content-center rounded-circle ms-5px me-5px"
                                                    data-bs-toggle="tooltip" data-bs-placement="left"
                                                    title="Quick shop"><i
                                                        className="feather icon-feather-eye fs-16"></i></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="shop-footer text-center">
                                    <Link to="demo-fashion-store-single-product.html"
                                        className="alt-font text-dark-gray fs-19 fw-500">Bermuda shorts</Link>
                                    <div className="price lh-22 fs-16"><del>$120.00</del>$100.00</div>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </section>


    <section className="p-15px bg-dark-gray text-white">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <span className="fs-15 text-uppercase fw-500">Take an extra 25% discount our favorite dress style. Use
                        code:<span
                            className="fs-14 fw-700 lh-28 alt-font text-dark-gray text-uppercase bg-base-color d-inline-block border-radius-30px ps-15px pe-15px ms-5px align-middle">fw205</span></span>
                </div>
            </div>
        </div>
    </section>


    <section className="bg-very-light-gray overflow-hidden position-relative ps-3 xs-ps-0">
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-lg-3 ps-5 pe-5 xl-pe-0 lg-ps-0 text-center text-lg-start md-mb-40px">
                    <div className="mb-10px"><span className="text-dark-gray fw-500 text-highlight">Lookbook 2023<span
                                className="bg-base-color h-8px bottom-0px"></span></span></div>
                    <h2 className="alt-font lh-50 text-dark-gray ls-minus-1px mb-15px">New arrival <span
                            className="fw-600">collection</span></h2>
                    <p className="xs-pe-15px xs-ps-15px">Flash summer sale 70% off on selected collection for him.</p>
                    <Link to="demo-fashion-store-shop.html" className="btn btn-dark-gray btn-box-shadow btn-medium">View
                        collection</Link>
                </div>
                <div className="col-12 col-lg-9 position-relative">
                    <div
                        className="outside-box-right-10 lg-outside-box-right-20 md-outside-box-right-25 xs-outside-box-right-0">
                        <div className="swiper slider-three-slide"
                            data-slider-options="{ &quot;slidesPerView&quot;: 1, &quot;spaceBetween&quot;: 30, &quot;loop&quot;: true, &quot;autoplay&quot;: { &quot;delay&quot;: 4000, &quot;disableOnInteraction&quot;: false }, &quot;pagination&quot;: { &quot;el&quot;: &quot;.slider-four-slide-pagination-1&quot;, &quot;clickable&quot;: true, &quot;dynamicBullets&quot;: false }, &quot;keyboard&quot;: { &quot;enabled&quot;: true, &quot;onlyInViewport&quot;: true }, &quot;breakpoints&quot;: { &quot;1400&quot;: { &quot;slidesPerView&quot;: 4 }, &quot;1024&quot;: { &quot;slidesPerView&quot;: 3 }, &quot;768&quot;: { &quot;slidesPerView&quot;: 3 }, &quot;576&quot;: { &quot;slidesPerView&quot;: 2 }, &quot;320&quot;: { &quot;slidesPerView&quot;: 1 } }, &quot;effect&quot;: &quot;slide&quot; }">
                            <div className="swiper-wrapper">

                                <div className="swiper-slide">
                                    <div
                                        className="interactive-banner-style-09 border-radius-6px overflow-hidden position-relative">
                                        <img src="images/demo-fashion-store-collection-slider-01.jpg" alt="" />
                                        <div className="opacity-full bg-gradient-gray-light-dark-transparent"></div>
                                        <div
                                            className="image-content h-100 w-100 ps-15 pe-15 pt-11 pb-11 lg-p-11 d-flex justify-content-bottom align-items-start flex-column">
                                            <div
                                                className="mt-auto d-flex align-items-start w-100 z-index-1 position-relative overflow-hidden flex-column">
                                                <span className="text-white fw-500 fs-22">Ethnic wear</span>
                                                <span
                                                    className="content-title text-white fs-14 fw-500 opacity-7 text-uppercase ls-05px">Outfits
                                                    matching</span>
                                                <Link to="demo-fashion-store-shop.html"
                                                    className="content-title-hover fs-14 lh-24 fw-500 ls-05px text-uppercase text-white opacity-6 text-decoration-line-bottom">Explore
                                                    collection</Link>
                                                <span
                                                    className="content-arrow lh-50 rounded-circle bg-base-color w-50px h-50px ms-20px text-center"><i
                                                        className="bi bi-arrow-right-short text-dark-gray icon-very-medium"></i></span>
                                            </div>
                                            <div
                                                className="position-absolute left-0px top-0px w-100 h-100 bg-gradient-regal-blue-transparent opacity-9">
                                            </div>
                                            <div className="box-overlay bg-gradient-gray-light-dark-transparent"></div>
                                            <Link to="demo-fashion-store-shop.html"
                                                className="position-absolute z-index-1 top-0px left-0px h-100 w-100"></Link>
                                        </div>
                                    </div>
                                </div>


                                <div className="swiper-slide">
                                    <div
                                        className="interactive-banner-style-09 border-radius-6px overflow-hidden position-relative">
                                        <img src="images/demo-fashion-store-collection-slider-02.jpg" alt="" />
                                        <div className="opacity-full bg-gradient-gray-light-dark-transparent"></div>
                                        <div
                                            className="image-content h-100 w-100 ps-15 pe-15 pt-11 pb-11 lg-p-11 d-flex justify-content-bottom align-items-start flex-column">
                                            <div
                                                className="mt-auto d-flex align-items-start w-100 z-index-1 position-relative overflow-hidden flex-column">
                                                <span className="text-white fw-500 fs-22">Dress materials</span>
                                                <span
                                                    className="content-title text-white fs-14 fw-500 opacity-7 text-uppercase ls-05px">Explore
                                                    a variety</span>
                                                <Link to="demo-fashion-store-shop.html"
                                                    className="content-title-hover fs-14 lh-24 fw-500 ls-05px text-uppercase text-white opacity-6 text-decoration-line-bottom">Explore
                                                    collection</Link>
                                                <span
                                                    className="content-arrow lh-50 rounded-circle bg-base-color w-50px h-50px ms-20px text-center"><i
                                                        className="bi bi-arrow-right-short text-dark-gray icon-very-medium"></i></span>
                                            </div>
                                            <div
                                                className="position-absolute left-0px top-0px w-100 h-100 bg-gradient-regal-blue-transparent opacity-9">
                                            </div>
                                            <div className="box-overlay bg-gradient-gray-light-dark-transparent"></div>
                                            <Link to="demo-fashion-store-shop.html"
                                                className="position-absolute z-index-1 top-0px left-0px h-100 w-100"></Link>
                                        </div>
                                    </div>
                                </div>


                                <div className="swiper-slide">
                                    <div
                                        className="interactive-banner-style-09 border-radius-6px overflow-hidden position-relative">
                                        <img src="images/demo-fashion-store-collection-slider-03.jpg" alt="" />
                                        <div className="opacity-full bg-gradient-gray-light-dark-transparent"></div>
                                        <div
                                            className="image-content h-100 w-100 ps-15 pe-15 pt-11 pb-11 lg-p-11 d-flex justify-content-bottom align-items-start flex-column">
                                            <div
                                                className="mt-auto d-flex align-items-start w-100 z-index-1 position-relative overflow-hidden flex-column">
                                                <span className="text-white fw-500 fs-22">Western wear</span>
                                                <span
                                                    className="content-title text-white fs-14 fw-500 opacity-7 text-uppercase ls-05px">Traditional
                                                    attires</span>
                                                <Link to="demo-fashion-store-shop.html"
                                                    className="content-title-hover fs-14 lh-24 fw-500 ls-05px text-uppercase text-white opacity-6 text-decoration-line-bottom">Explore
                                                    collection</Link>
                                                <span
                                                    className="content-arrow lh-50 rounded-circle bg-base-color w-50px h-50px ms-20px text-center"><i
                                                        className="bi bi-arrow-right-short text-dark-gray icon-very-medium"></i></span>
                                            </div>
                                            <div
                                                className="position-absolute left-0px top-0px w-100 h-100 bg-gradient-regal-blue-transparent opacity-9">
                                            </div>
                                            <div className="box-overlay bg-gradient-gray-light-dark-transparent"></div>
                                            <Link to="demo-fashion-store-shop.html"
                                                className="position-absolute z-index-1 top-0px left-0px h-100 w-100"></Link>
                                        </div>
                                    </div>
                                </div>


                                <div className="swiper-slide">
                                    <div
                                        className="interactive-banner-style-09 border-radius-6px overflow-hidden position-relative">
                                        <img src="images/demo-fashion-store-collection-slider-04.jpg" alt="" />
                                        <div className="opacity-full bg-gradient-gray-light-dark-transparent"></div>
                                        <div
                                            className="image-content h-100 w-100 ps-15 pe-15 pt-11 pb-11 lg-p-11 d-flex justify-content-bottom align-items-start flex-column">
                                            <div
                                                className="mt-auto d-flex align-items-start w-100 z-index-1 position-relative overflow-hidden flex-column">
                                                <span className="text-white fw-500 fs-22">Loungewear</span>
                                                <span
                                                    className="content-title text-white fs-14 fw-500 opacity-7 text-uppercase ls-05px">Women
                                                    branded</span>
                                                <Link to="demo-fashion-store-shop.html"
                                                    className="content-title-hover fs-14 lh-24 fw-500 ls-05px text-uppercase text-white opacity-6 text-decoration-line-bottom">Explore
                                                    collection</Link>
                                                <span
                                                    className="content-arrow lh-50 rounded-circle bg-base-color w-50px h-50px ms-20px text-center"><i
                                                        className="bi bi-arrow-right-short text-dark-gray icon-very-medium"></i></span>
                                            </div>
                                            <div
                                                className="position-absolute left-0px top-0px w-100 h-100 bg-gradient-regal-blue-transparent opacity-9">
                                            </div>
                                            <div className="box-overlay bg-gradient-gray-light-dark-transparent"></div>
                                            <Link to="demo-fashion-store-shop.html"
                                                className="position-absolute z-index-1 top-0px left-0px h-100 w-100"></Link>
                                        </div>
                                    </div>
                                </div>


                                <div className="swiper-slide">
                                    <div
                                        className="interactive-banner-style-09 border-radius-6px overflow-hidden position-relative">
                                        <img src="images/demo-fashion-store-collection-slider-01.jpg" alt="" />
                                        <div className="opacity-full bg-gradient-gray-light-dark-transparent"></div>
                                        <div
                                            className="image-content h-100 w-100 ps-15 pe-15 pt-11 pb-11 lg-p-11 d-flex justify-content-bottom align-items-start flex-column">
                                            <div
                                                className="mt-auto d-flex align-items-start w-100 z-index-1 position-relative overflow-hidden flex-column">
                                                <span className="text-white fw-500 fs-22">Ethnic wear</span>
                                                <span
                                                    className="content-title text-white fs-14 fw-500 opacity-7 text-uppercase ls-05px">Outfits
                                                    matching</span>
                                                <Link to="demo-fashion-store-shop.html"
                                                    className="content-title-hover fs-14 lh-24 fw-500 ls-05px text-uppercase text-white opacity-6 text-decoration-line-bottom">Explore
                                                    collection</Link>
                                                <span
                                                    className="content-arrow lh-50 rounded-circle bg-base-color w-50px h-50px ms-20px text-center"><i
                                                        className="bi bi-arrow-right-short text-dark-gray icon-very-medium"></i></span>
                                            </div>
                                            <div
                                                className="position-absolute left-0px top-0px w-100 h-100 bg-gradient-regal-blue-transparent opacity-9">
                                            </div>
                                            <div className="box-overlay bg-gradient-gray-light-dark-transparent"></div>
                                            <Link to="demo-fashion-store-shop.html"
                                                className="position-absolute z-index-1 top-0px left-0px h-100 w-100"></Link>
                                        </div>
                                    </div>
                                </div>


                                <div className="swiper-slide">
                                    <div
                                        className="interactive-banner-style-09 border-radius-6px overflow-hidden position-relative">
                                        <img src="images/demo-fashion-store-collection-slider-02.jpg" alt="" />
                                        <div className="opacity-full bg-gradient-gray-light-dark-transparent"></div>
                                        <div
                                            className="image-content h-100 w-100 ps-15 pe-15 pt-11 pb-11 lg-p-11 d-flex justify-content-bottom align-items-start flex-column">
                                            <div
                                                className="mt-auto d-flex align-items-start w-100 z-index-1 position-relative overflow-hidden flex-column">
                                                <span className="text-white fw-500 fs-22">Dress materials</span>
                                                <span
                                                    className="content-title text-white fs-14 fw-500 opacity-7 text-uppercase ls-05px">Explore
                                                    a variety</span>
                                                <Link to="demo-fashion-store-shop.html"
                                                    className="content-title-hover fs-14 lh-24 fw-500 ls-05px text-uppercase text-white opacity-6 text-decoration-line-bottom">Explore
                                                    collection</Link>
                                                <span
                                                    className="content-arrow lh-50 rounded-circle bg-base-color w-50px h-50px ms-20px text-center"><i
                                                        className="bi bi-arrow-right-short text-dark-gray icon-very-medium"></i></span>
                                            </div>
                                            <div
                                                className="position-absolute left-0px top-0px w-100 h-100 bg-gradient-regal-blue-transparent opacity-9">
                                            </div>
                                            <div className="box-overlay bg-gradient-gray-light-dark-transparent"></div>
                                            <Link to="demo-fashion-store-shop.html"
                                                className="position-absolute z-index-1 top-0px left-0px h-100 w-100"></Link>
                                        </div>
                                    </div>
                                </div>


                                <div className="swiper-slide">
                                    <div
                                        className="interactive-banner-style-09 border-radius-6px overflow-hidden position-relative">
                                        <img src="images/demo-fashion-store-collection-slider-03.jpg" alt="" />
                                        <div className="opacity-full bg-gradient-gray-light-dark-transparent"></div>
                                        <div
                                            className="image-content h-100 w-100 ps-15 pe-15 pt-11 pb-11 lg-p-11 d-flex justify-content-bottom align-items-start flex-column">
                                            <div
                                                className="mt-auto d-flex align-items-start w-100 z-index-1 position-relative overflow-hidden flex-column">
                                                <span className="text-white fw-500 fs-22">Western wear</span>
                                                <span
                                                    className="content-title text-white fs-14 fw-500 opacity-7 text-uppercase ls-05px">Traditional
                                                    attires</span>
                                                <Link to="demo-fashion-store-shop.html"
                                                    className="content-title-hover fs-14 lh-24 fw-500 ls-05px text-uppercase text-white opacity-6 text-decoration-line-bottom">Explore
                                                    collection</Link>
                                                <span
                                                    className="content-arrow lh-50 rounded-circle bg-base-color w-50px h-50px ms-20px text-center"><i
                                                        className="bi bi-arrow-right-short text-dark-gray icon-very-medium"></i></span>
                                            </div>
                                            <div
                                                className="position-absolute left-0px top-0px w-100 h-100 bg-gradient-regal-blue-transparent opacity-9">
                                            </div>
                                            <div className="box-overlay bg-gradient-gray-light-dark-transparent"></div>
                                            <Link to="demo-fashion-store-shop.html"
                                                className="position-absolute z-index-1 top-0px left-0px h-100 w-100"></Link>
                                        </div>
                                    </div>
                                </div>


                                <div className="swiper-slide">
                                    <div
                                        className="interactive-banner-style-09 border-radius-6px overflow-hidden position-relative">
                                        <img src="images/demo-fashion-store-collection-slider-04.jpg" alt="" />
                                        <div className="opacity-full bg-gradient-gray-light-dark-transparent"></div>
                                        <div
                                            className="image-content h-100 w-100 ps-15 pe-15 pt-11 pb-11 lg-p-11 d-flex justify-content-bottom align-items-start flex-column">
                                            <div
                                                className="mt-auto d-flex align-items-start w-100 z-index-1 position-relative overflow-hidden flex-column">
                                                <span className="text-white fw-500 fs-22">Loungewear</span>
                                                <span
                                                    className="content-title text-white fs-14 fw-500 opacity-7 text-uppercase ls-05px">Women
                                                    branded</span>
                                                <Link to="demo-fashion-store-shop.html"
                                                    className="content-title-hover fs-14 lh-24 fw-500 ls-05px text-uppercase text-white opacity-6 text-decoration-line-bottom">Explore
                                                    collection</Link>
                                                <span
                                                    className="content-arrow lh-50 rounded-circle bg-base-color w-50px h-50px ms-20px text-center"><i
                                                        className="bi bi-arrow-right-short text-dark-gray icon-very-medium"></i></span>
                                            </div>
                                            <div
                                                className="position-absolute left-0px top-0px w-100 h-100 bg-gradient-regal-blue-transparent opacity-9">
                                            </div>
                                            <div className="box-overlay bg-gradient-gray-light-dark-transparent"></div>
                                            <Link to="demo-fashion-store-shop.html"
                                                className="position-absolute z-index-1 top-0px left-0px h-100 w-100"></Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
        <div className="fs-180 lg-fs-150 md-fs-130 fw-700 position-absolute bottom-minus-50px md-bottom-minus-40px ls-minus-5px left-0px right-0px text-center w-100 opacity-1 d-none d-md-block"
            data-bottom-top="transform:scale(1, 1) translate3d(0px, 0px, 0px);"
            data-top-bottom="transform:scale(1, 1) translate3d(-100px, 0px, 0px);">new collection</div>
    </section>


    <section className="half-section border-bottom border-color-extra-medium-gray">
        <div className="container">
            <div className="row row-cols-2 row-cols-md-5 row-cols-sm-3 position-relative justify-content-center"
                data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [-15, 0], &quot;scale&quot;: [0.8, 1], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 300, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 100, &quot;easing&quot;: &quot;easeOutQuad&quot; }">

                <div className="col text-center sm-mb-30px">
                    <Link to="#"><img src="images/logo-asos.svg" className="h-30px" alt="" /></Link>
                </div>


                <div className="col text-center sm-mb-30px">
                    <Link to="#"><img src="images/logo-chanel.svg" className="h-30px" alt="" /></Link>
                </div>


                <div className="col text-center sm-mb-30px">
                    <Link to="#"><img src="images/logo-gucci.svg" className="h-30px" alt="" /></Link>
                </div>


                <div className="col text-center xs-mb-30px">
                    <Link to="#"><img src="images/logo-celine.svg" className="h-30px" alt="" /></Link>
                </div>


                <div className="col text-center">
                    <Link to="#"><img src="images/logo-adidas.svg" className="h-30px" alt="" /></Link>
                </div>

            </div>
        </div>
    </section>


    <section className="ps-7 pe-7 pb-3 lg-ps-3 lg-pe-3 md-pb-5 xs-px-0">
        <div className="container">
            <div className="row mb-5 xs-mb-8">
                <div className="col-12 text-center">
                    <h2 className="alt-font text-dark-gray mb-0 ls-minus-2px">Featured <span
                            className="text-highlight fw-600">products<span
                                className="bg-base-color h-5px bottom-2px"></span></span></h2>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <ul style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}  className="shop-modern shop-wrapper grid grid-5col lg-grid-3col sm-grid-2col xs-grid-1col gutter-extra-large text-center"
                        data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [-15, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 300, &quot;delay&quot;: 0, &quot;staggervalue&quot;: 100, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
                        {/* <li className="grid-sizer"></li> */}

                        <li className="grid-item">
                            <div className="shop-box mb-10px">
                                <div className="shop-image mb-20px">
                                    <Link to="demo-fashion-store-single-product.html">
                                        <img src="images/demo-fashion-store-product-09.jpg" alt="" />
                                        <span className="lable new">New</span>
                                        <div className="shop-overlay bg-gradient-gray-light-dark-transparent"></div>
                                    </Link>
                                    <div className="shop-buttons-wrap">
                                        <Link to="demo-fashion-store-single-product.html"
                                            className="alt-font btn btn-small btn-box-shadow btn-white btn-round-edge left-icon add-to-cart">
                                            <i className="feather icon-feather-shopping-bag"></i><span
                                                className="quick-view-text button-text">Add to cart</span>
                                        </Link>
                                    </div>
                                    <div className="shop-hover d-flex justify-content-center">
                                        <ul>
                                            <li>
                                                <Link to="#"
                                                    className="w-40px h-40px bg-white text-dark-gray d-flex align-items-center justify-content-center rounded-circle ms-5px me-5px"
                                                    data-bs-toggle="tooltip" data-bs-placement="left"
                                                    title="Add to wishlist"><i
                                                        className="feather icon-feather-heart fs-16"></i></Link>
                                            </li>
                                            <li>
                                                <Link to="#"
                                                    className="w-40px h-40px bg-white text-dark-gray d-flex align-items-center justify-content-center rounded-circle ms-5px me-5px"
                                                    data-bs-toggle="tooltip" data-bs-placement="left"
                                                    title="Quick shop"><i
                                                        className="feather icon-feather-eye fs-16"></i></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="shop-footer text-center">
                                    <Link to="demo-fashion-store-single-product.html"
                                        className="alt-font text-dark-gray fs-19 fw-500">Textured sweater</Link>
                                    <div className="price lh-22 fs-16"><del>$200.00</del>$189.00</div>
                                </div>
                            </div>
                        </li>


                        <li className="grid-item">
                            <div className="shop-box mb-10px">
                                <div className="shop-image mb-20px">
                                    <Link to="demo-fashion-store-single-product.html">
                                        <img src="images/demo-fashion-store-product-10.jpg" alt="" />
                                        <div className="shop-overlay bg-gradient-gray-light-dark-transparent"></div>
                                    </Link>
                                    <div className="shop-buttons-wrap">
                                        <Link to="demo-fashion-store-single-product.html"
                                            className="alt-font btn btn-small btn-box-shadow btn-white btn-round-edge left-icon add-to-cart">
                                            <i className="feather icon-feather-shopping-bag"></i><span
                                                className="quick-view-text button-text">Add to cart</span>
                                        </Link>
                                    </div>
                                    <div className="shop-hover d-flex justify-content-center">
                                        <ul>
                                            <li>
                                                <Link to="#"
                                                    className="w-40px h-40px bg-white text-dark-gray d-flex align-items-center justify-content-center rounded-circle ms-5px me-5px"
                                                    data-bs-toggle="tooltip" data-bs-placement="left"
                                                    title="Add to wishlist"><i
                                                        className="feather icon-feather-heart fs-16"></i></Link>
                                            </li>
                                            <li>
                                                <Link to="#"
                                                    className="w-40px h-40px bg-white text-dark-gray d-flex align-items-center justify-content-center rounded-circle ms-5px me-5px"
                                                    data-bs-toggle="tooltip" data-bs-placement="left"
                                                    title="Quick shop"><i
                                                        className="feather icon-feather-eye fs-16"></i></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="shop-footer text-center">
                                    <Link to="demo-fashion-store-single-product.html"
                                        className="alt-font text-dark-gray fs-19 fw-500">Traveller shirt</Link>
                                    <div className="price lh-22 fs-16"><del>$350.00</del>$289.00</div>
                                </div>
                            </div>
                        </li>


                        <li className="grid-item">
                            <div className="shop-box mb-10px">
                                <div className="shop-image mb-20px">
                                    <Link to="demo-fashion-store-single-product.html">
                                        <img src="images/demo-fashion-store-product-11.jpg" alt="" />
                                        <div className="shop-overlay bg-gradient-gray-light-dark-transparent"></div>
                                    </Link>
                                    <div className="shop-buttons-wrap">
                                        <Link to="demo-fashion-store-single-product.html"
                                            className="alt-font btn btn-small btn-box-shadow btn-white btn-round-edge left-icon add-to-cart">
                                            <i className="feather icon-feather-shopping-bag"></i><span
                                                className="quick-view-text button-text">Add to cart</span>
                                        </Link>
                                    </div>
                                    <div className="shop-hover d-flex justify-content-center">
                                        <ul>
                                            <li>
                                                <Link to="#"
                                                    className="w-40px h-40px bg-white text-dark-gray d-flex align-items-center justify-content-center rounded-circle ms-5px me-5px"
                                                    data-bs-toggle="tooltip" data-bs-placement="left"
                                                    title="Add to wishlist"><i
                                                        className="feather icon-feather-heart fs-16"></i></Link>
                                            </li>
                                            <li>
                                                <Link to="#"
                                                    className="w-40px h-40px bg-white text-dark-gray d-flex align-items-center justify-content-center rounded-circle ms-5px me-5px"
                                                    data-bs-toggle="tooltip" data-bs-placement="left"
                                                    title="Quick shop"><i
                                                        className="feather icon-feather-eye fs-16"></i></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="shop-footer text-center">
                                    <Link to="demo-fashion-store-single-product.html"
                                        className="alt-font text-dark-gray fs-19 fw-500">Crewneck sweatshirt</Link>
                                    <div className="price lh-22 fs-16"><del>$220.00</del>$199.00</div>
                                </div>
                            </div>
                        </li>


                        <li className="grid-item">
                            <div className="shop-box mb-10px">
                                <div className="shop-image mb-20px">
                                    <Link to="demo-fashion-store-single-product.html">
                                        <img src="images/demo-fashion-store-product-12.jpg" alt="" />
                                        <div className="shop-overlay bg-gradient-gray-light-dark-transparent"></div>
                                    </Link>
                                    <div className="shop-buttons-wrap">
                                        <Link to="demo-fashion-store-single-product.html"
                                            className="alt-font btn btn-small btn-box-shadow btn-white btn-round-edge left-icon add-to-cart">
                                            <i className="feather icon-feather-shopping-bag"></i><span
                                                className="quick-view-text button-text">Add to cart</span>
                                        </Link>
                                    </div>
                                    <div className="shop-hover d-flex justify-content-center">
                                        <ul>
                                            <li>
                                                <Link to="#"
                                                    className="w-40px h-40px bg-white text-dark-gray d-flex align-items-center justify-content-center rounded-circle ms-5px me-5px"
                                                    data-bs-toggle="tooltip" data-bs-placement="left"
                                                    title="Add to wishlist"><i
                                                        className="feather icon-feather-heart fs-16"></i></Link>
                                            </li>
                                            <li>
                                                <Link to="#"
                                                    className="w-40px h-40px bg-white text-dark-gray d-flex align-items-center justify-content-center rounded-circle ms-5px me-5px"
                                                    data-bs-toggle="tooltip" data-bs-placement="left"
                                                    title="Quick shop"><i
                                                        className="feather icon-feather-eye fs-16"></i></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="shop-footer text-center">
                                    <Link to="demo-fashion-store-single-product.html"
                                        className="alt-font text-dark-gray fs-19 fw-500">Skinny trousers</Link>
                                    <div className="price lh-22 fs-16"><del>$300.00</del>$259.00</div>
                                </div>
                            </div>
                        </li>


                        <li className="grid-item">
                            <div className="shop-box mb-10px">
                                <div className="shop-image mb-20px">
                                    <Link to="demo-fashion-store-single-product.html">
                                        <img src="images/demo-fashion-store-product-08.jpg" alt="" />
                                        <div className="shop-overlay bg-gradient-gray-light-dark-transparent"></div>
                                    </Link>
                                    <div className="shop-buttons-wrap">
                                        <Link to="demo-fashion-store-single-product.html"
                                            className="alt-font btn btn-small btn-box-shadow btn-white btn-round-edge left-icon add-to-cart">
                                            <i className="feather icon-feather-shopping-bag"></i><span
                                                className="quick-view-text button-text">Add to cart</span>
                                        </Link>
                                    </div>
                                    <div className="shop-hover d-flex justify-content-center">
                                        <ul>
                                            <li>
                                                <Link to="#"
                                                    className="w-40px h-40px bg-white text-dark-gray d-flex align-items-center justify-content-center rounded-circle ms-5px me-5px"
                                                    data-bs-toggle="tooltip" data-bs-placement="left"
                                                    title="Add to wishlist"><i
                                                        className="feather icon-feather-heart fs-16"></i></Link>
                                            </li>
                                            <li>
                                                <Link to="#"
                                                    className="w-40px h-40px bg-white text-dark-gray d-flex align-items-center justify-content-center rounded-circle ms-5px me-5px"
                                                    data-bs-toggle="tooltip" data-bs-placement="left"
                                                    title="Quick shop"><i
                                                        className="feather icon-feather-eye fs-16"></i></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="shop-footer text-center">
                                    <Link to="demo-fashion-store-single-product.html"
                                        className="alt-font text-dark-gray fs-19 fw-500">Sleeve sweater</Link>
                                    <div className="price lh-22 fs-16"><del>$250.00</del>$239.00</div>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </section>


    <section className="p-0 border-top border-bottom border-color-extra-medium-gray">
        <div className="container-fluid">
            <div className="row position-relative">
                <div className="col swiper text-center swiper-width-auto"
                    data-slider-options="{ &quot;slidesPerView&quot;: &quot;auto&quot;, &quot;spaceBetween&quot;:0, &quot;speed&quot;: 10000, &quot;loop&quot;: true, &quot;pagination&quot;: { &quot;el&quot;: &quot;.slider-four-slide-pagination-2&quot;, &quot;clickable&quot;: false }, &quot;allowTouchMove&quot;: false, &quot;autoplay&quot;: { &quot;delay&quot;:0, &quot;disableOnInteraction&quot;: false }, &quot;navigation&quot;: { &quot;nextEl&quot;: &quot;.slider-four-slide-next-2&quot;, &quot;prevEl&quot;: &quot;.slider-four-slide-prev-2&quot; }, &quot;keyboard&quot;: { &quot;enabled&quot;: true, &quot;onlyInViewport&quot;: true }, &quot;effect&quot;: &quot;slide&quot; }">
                    <div className="swiper-wrapper marquee-slide">

                        <div className="swiper-slide">
                            <div
                                className="alt-font fs-26 fw-500 text-dark-gray border-color-extra-medium-gray border-end pt-30px pb-30px ps-60px pe-60px sm-p-25px">
                                Get 20% off for your first order</div>
                        </div>


                        <div className="swiper-slide">
                            <div
                                className="alt-font fs-26 fw-500 text-dark-gray border-color-extra-medium-gray border-end pt-30px pb-30px ps-60px pe-60px sm-p-25px">
                                The fashion core collection</div>
                        </div>


                        <div className="swiper-slide">
                            <div
                                className="alt-font fs-26 fw-500 text-dark-gray border-color-extra-medium-gray border-end pt-30px pb-30px ps-60px pe-60px sm-p-25px">
                                100% secure protected payment</div>
                        </div>


                        <div className="swiper-slide">
                            <div
                                className="alt-font fs-26 fw-500 text-dark-gray border-color-extra-medium-gray border-end pt-30px pb-30px ps-60px pe-60px sm-p-25px">
                                Free shipping for orders over $130</div>
                        </div>


                        <div className="swiper-slide">
                            <div
                                className="alt-font fs-26 fw-500 text-dark-gray border-color-extra-medium-gray border-end pt-30px pb-30px ps-60px pe-60px sm-p-25px">
                                Pay with multiple credit cards</div>
                        </div>


                        <div className="swiper-slide">
                            <div
                                className="alt-font fs-26 fw-500 text-dark-gray border-color-extra-medium-gray border-end pt-30px pb-30px ps-60px pe-60px sm-p-25px">
                                Get 20% off for your first order</div>
                        </div>


                        <div className="swiper-slide">
                            <div
                                className="alt-font fs-26 fw-500 text-dark-gray border-color-extra-medium-gray border-end pt-30px pb-30px ps-60px pe-60px sm-p-25px">
                                The fashion core collection</div>
                        </div>


                        <div className="swiper-slide">
                            <div
                                className="alt-font fs-26 fw-500 text-dark-gray border-color-extra-medium-gray border-end pt-30px pb-30px ps-60px pe-60px sm-p-25px">
                                100% secure protected payment</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>


    <section className="pb-3 ps-7 pe-7 lg-ps-3 lg-pe-3 xs-px-0">
        <div className="container">
            <div className="row mb-4 xs-mb-7">
                <div className="col-12 text-center">
                    <h2 className="alt-font text-dark-gray mb-0 ls-minus-2px">Fashion <span
                            className="text-highlight fw-600">magazine<span
                                className="bg-base-color h-5px bottom-2px"></span></span></h2>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <ul style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}  className="blog-classic blog-wrapper  grid grid-4col xl-grid-4col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large"
                        data-anime="{ &quot;el&quot;: &quot;childs&quot;, &quot;translateY&quot;: [15, 0], &quot;translateX&quot;: [-15, 0], &quot;opacity&quot;: [0,1], &quot;duration&quot;: 500, &quot;delay&quot;: 300, &quot;staggervalue&quot;: 300, &quot;easing&quot;: &quot;easeOutQuad&quot; }">
                        {/* <li className="grid-sizer"></li> */}

                        <li className="grid-item">
                            <div className="card bg-transparent border-0 h-100">
                                <div className="blog-image position-relative overflow-hidden">
                                    <Link to="demo-fashion-store-blog-single-creative.html"><img
                                            src="images/demo-fashion-store-blog-01.jpg" alt="" /></Link>
                                </div>
                                <div className="card-body px-0 pt-30px pb-30px sm-pb-15px">
                                    <span className="mb-5px d-block">By <Link to="#"
                                            className="text-dark-gray fw-500 categories-text">Den viliamson</Link><Link to="#"
                                            className="blog-date">26 December 2023</Link></span>
                                    <Link to="demo-fashion-store-blog-single-creative.html"
                                        className="alt-font card-title fs-20 lh-30 fw-500 text-dark-gray d-inline-block w-75 xl-w-85 lg-w-100">Elegance
                                        is not standing out, but being remembered.</Link>
                                </div>
                            </div>
                        </li>


                        <li className="grid-item">
                            <div className="card bg-transparent border-0 h-100">
                                <div className="blog-image position-relative overflow-hidden">
                                    <Link to="demo-fashion-store-blog-single-creative.html"><img
                                            src="images/demo-fashion-store-blog-02.jpg" alt="" /></Link>
                                </div>
                                <div className="card-body px-0 pt-30px pb-30px sm-pb-15px">
                                    <span className="mb-5px d-block">By <Link to="#"
                                            className="text-dark-gray fw-500 categories-text">Hugh macleod</Link><Link to="#"
                                            className="blog-date">20 December 2023</Link></span>
                                    <Link to="demo-fashion-store-blog-single-creative.html"
                                        className="alt-font card-title fs-20 lh-30 fw-500 text-dark-gray d-inline-block w-75 xl-w-85 lg-w-100">Fashion
                                        is the armor to survive the reality of everyday life.</Link>
                                </div>
                            </div>
                        </li>


                        <li className="grid-item">
                            <div className="card bg-transparent border-0 h-100">
                                <div className="blog-image position-relative overflow-hidden">
                                    <Link to="demo-fashion-store-blog-single-creative.html"><img
                                            src="images/demo-fashion-store-blog-06.jpg" alt="" /></Link>
                                </div>
                                <div className="card-body px-0 pt-30px pb-30px sm-pb-15px">
                                    <span className="mb-5px d-block">By <Link to="#"
                                            className="text-dark-gray fw-500 categories-text">Walton smith</Link><Link to="#"
                                            className="blog-date">10 December 2023</Link></span>
                                    <Link to="demo-fashion-store-blog-single-creative.html"
                                        className="alt-font card-title fs-20 lh-30 fw-500 text-dark-gray d-inline-block w-75 xl-w-85 lg-w-100">In
                                        order to be irreplaceable one must always be different.</Link>
                                </div>
                            </div>
                        </li>


                        <li className="grid-item">
                            <div className="card bg-transparent border-0 h-100">
                                <div className="blog-image position-relative overflow-hidden">
                                    <Link to="demo-fashion-store-blog-single-creative.html"><img
                                            src="images/demo-fashion-store-blog-07.jpg" alt="" /></Link>
                                </div>
                                <div className="card-body px-0 pt-30px pb-30px sm-pb-15px">
                                    <span className="mb-5px d-block">By <Link to="#"
                                            className="text-dark-gray fw-500 categories-text">Walton smith</Link><Link to="#"
                                            className="blog-date">10 December 2023</Link></span>
                                    <Link to="demo-fashion-store-blog-single-creative.html"
                                        className="alt-font card-title fs-20 lh-30 fw-500 text-dark-gray d-inline-block w-75 xl-w-85 lg-w-100">Gucci
                                        has represented design and contemporary lifestyle.</Link>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </section>
            </div>






        
    )
}
