// this is for seller to sign up
import React, { Component } from "react";
import { connect } from "unistore/react";
import { withRouter } from "react-router-dom";
import { actions } from "../Store";
import Navigation from "../Components/NavigationSeller";
import Overlay from "../Home/MenuOverlay";
// import EditProductContent from "../EditProduct/EditProductContent";
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

import axios from "axios";
import { async } from "q";


const basicUrl = "http://0.0.0.0:8010/proxy"

class DeleteProduct extends Component {

  handleClickBuy = e =>  {
    this.props.setIdProduct(this.props.location.pathname.slice(19))
    console.log("id yg mau di beli: ", this.props.location.pathname.slice(19))
    this.props.buyProduct()    
    this.props.history.push("/public/cartlist")
        };
      
    render() {
      console.log("ini location pathname baru", this.props.location.pathname.slice(19))
      return (
          <div class="super_container">
            <Navigation />
            <Overlay />

            <div class="container-fluid">
        <br/><br/><br/><br/><br /><br /><br /><br /><br /><br />
        <h2 style={{textAlign:"center", color:"#fe4c50"}}>Are You Sure you want to purchase this product?</h2>
        <div class="row">

            <div class="col-md-3 col-sm-3"></div>
            <div class="col-md-8 col-sm-8">
                <div class="check-out">
                    <h4>Click the button below to purchase this product.</h4>
                </div>
            </div>
           
                <div class="col-md-3 col-sm-3"></div>
                <div class="col-md-6 col-sm-6">
                    <form onSubmit={e => e.preventDefault()}>
                    <div className="row">
                        <div className="col-lg-2 col-md-2"></div>
                        <div class="col-md-6- col-sm-12 col-lg-6 text-center ">
                                <button type="submit" class=" btn btn-block mybtn btn-primary tx-tfm" 
                                onClick={this.handleClickBuy} style={{backgroundColor:"#fe4c50", border:"0px"}}
                               >Buy Product</button>
                            </div>
                    </div>
                            <br/><br/><br/><br/><br/><br/>
                    </form>
                </div>
            </div>
        </div>




            <Benefit />
            <Newsletter />
            <Footer />
          </div>
      );
    }
  }

  export default connect(
    "is_login, productKategori, productType, productName, productHarga, productBrand, productDetail, productTersedia, productUrl, token",
    actions
  )(withRouter(DeleteProduct));
  
  // productid={this.props.match.params.productid}