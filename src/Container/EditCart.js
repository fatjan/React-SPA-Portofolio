import React, { Component } from "react";
import { connect } from "unistore/react";
import { withRouter } from "react-router-dom";
import { actions } from "../Store";
import Navigation from "../Components/Navigation.js";
import Overlay from "../Home/MenuOverlay";
// import CartContent from "../Cart/CartContent";
import Benefit from "../Home/Benefit";
import Newsletter from "../Home/Newsletter";
import Footer from "../Components/Footer";
import {Link} from "react-router-dom";

import "../assets/bootstrap4/bootstrap.min.css";

import "../assets/plugins/font-awesome-4.7.0/css/font-awesome.min.css";
import "../assets/plugins/OwlCarousel2-2.2.1/owl.carousel.css";
import "../assets/plugins/OwlCarousel2-2.2.1/owl.theme.default.css";
import "../assets/plugins/OwlCarousel2-2.2.1/animate.css";
import "../assets/plugins/themify-icons/themify-icons.css";
// import "../assets/plugins/jquery-ui-1.12.1.custom/jquery-ui.css";
import "../assets/css/contact_styles.css";
import "../assets/css/contact_responsive.css";
import "../assets/css/cart.css";

class EditCart extends Component {

    componentDidMount = () => {
        var id = this.props.location.pathname.slice(17)
        console.log("id cart masuk ke get cart", this.props.location.pathname.slice(17))
        console.log("panjang id", id.length)
        this.props.setCartId(this.props.location.pathname.slice(17))
        this.props.getCartById(this.props.location.pathname.slice(17))
    };

    handleClickCart = e =>  {
        console.log("id cart masuk ke editcart", this.props.location.pathname.slice(17))
        this.props.setCartId(this.props.location.pathname.slice(17))
        this.props.editCart()
        this.props.history.push("/")
    }

   
    render() {
      return (
          <div class="super_container">
            <Navigation />
            <Overlay />
            
            <div class="container contact_container">
                <div class="row">
                    <div class="col">
                        <div class="breadcrumbs d-flex flex-row align-items-center">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li class="active"><Link to="/profile"><i class="fa fa-angle-right" aria-hidden="true"></i>Cart</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-5 col-lg-5 col-sm-3"></div>
                <div class="col-md-4 col-lg-4 col-sm-6">
                        <h2>Checkout</h2>
                </div>
                <div class="col-md-3 col-lg-3 "></div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form onSubmit={e => e.preventDefault()}>

                        <div className="table-responsive">
                        <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Item</th>
                                <th scope="col">Name</th>
                                <th scope="col">Color</th>
                                <th scope="col">Size</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Prices</th>
                                <th>Delivery fees</th>
                                <th>Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{width:"170px", height:"auto"}}>
                                    <img src={this.props.cartUrl} class="img-responsive" alt="" style={{width: "75%", height: "auto"}} />
                                </td>
                                <td>
                                    {this.props.cartName}
                                </td>
                                <td>
                                    <input className="form-control" name="detailProductColor" onChange={e => this.props.setField(e)} style={{width:"110px"}}/>
                                </td>
                                <td>
                                    <input className="form-control" name="detailProductSize" onChange={e => this.props.setField(e)} style={{width:"45px"}}/>
                                </td>
                                <td>
                                    <input className="form-control" name="amount" onChange={e => this.props.setField(e)} style={{width:"50px"}} />
                                    <button type="submit" onClick = {this.handleQtyChange}>OK</button>
                                </td>
                                <td> @ Rp {this.props.cartPrice}</td>
                                <td>@ Rp 15.000</td>
                                <td>Rp {this.props.totalHarga}</td>
                            </tr>
                        </tbody>
                        </table>
                        </div>

                           
                        <a href="#" class=" to-buy" style={{marginLeft:"500px"}}
                            onClick={this.handleClickCart}
                        >CONFIRM CART</a>
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
    "is_login, productName, productHarga, productDetail, productUrl, ongkir, totalHarga, token, cartUrl, cartName, cartPrice",
    actions
  )(withRouter(EditCart));
  

//   <input type="text" value="1" onfocus="this.value='';" onblur="if (this.value == '') {this.value ='';}" />
