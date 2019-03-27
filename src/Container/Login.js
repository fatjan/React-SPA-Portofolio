import React, { Component } from "react";
import { connect } from "unistore/react";
import { withRouter } from "react-router-dom";
import { actions } from "../Store";
import Navigation from "../Components/Navigation.js";
import Overlay from "../Home/MenuOverlay";
import LoginContent from "../Login/LoginContent";
import Benefit from "../Home/Benefit";
import Newsletter from "../Home/Newsletter";
import Footer from "../Components/Footer";
import "../assets/bootstrap4/bootstrap.min.css";

import "../assets/plugins/font-awesome-4.7.0/css/font-awesome.min.css";
import "../assets/plugins/OwlCarousel2-2.2.1/owl.carousel.css";
import "../assets/plugins/OwlCarousel2-2.2.1/owl.theme.default.css";
import "../assets/plugins/OwlCarousel2-2.2.1/animate.css";

import "../assets/css/main_styles.css";
import "../assets/css/categories_styles.css";
import "../assets/css/categories_responsive.css";
import "../assets/css/responsive.css";

class Login extends Component {
    render() {
      return (
          <div class="super_container">
            <Navigation />
            <Overlay />
            <LoginContent />
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
  )(withRouter(Login));
  