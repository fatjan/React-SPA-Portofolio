import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "unistore/react";
import { withRouter } from "react-router-dom";
import { actions } from "../Store";
import Navigation from "../Components/Navigation.js";
import Slider from "../Home/Slider";
import Banner from "../Home/Banner";
import Overlay from "../Home/MenuOverlay";
import NewArrivals from "../Home/NewArrivals";
import Products from "../Home/Products";
import BestSellers from "../Home/BestSellers";
import Benefit from "../Home/Benefit";
import Newsletter from "../Home/Newsletter";
import Footer from "../Components/Footer";
import "../assets/bootstrap4/bootstrap.min.css";

import "../assets/plugins/font-awesome-4.7.0/css/font-awesome.min.css";
import "../assets/plugins/OwlCarousel2-2.2.1/owl.carousel.css";
import "../assets/plugins/OwlCarousel2-2.2.1/owl.theme.default.css";
import "../assets/plugins/OwlCarousel2-2.2.1/animate.css";

import "../assets/css/main_styles.css";
import "../assets/css/responsive.css";


class Home extends Component {
  render() {
    return (
        <div class="super_container">
          <Navigation />
          <Overlay />
          <Slider />
          <Banner />
          {/* <NewArrivals /> */}
          <Products />
          <BestSellers />
          <Benefit />
          <Newsletter />
          <Footer />
        </div>
    );
  }
}

export default connect(
  "is_login",
  actions
)(withRouter(Home));


