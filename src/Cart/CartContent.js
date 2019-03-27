import React, { Component } from "react";
import { connect } from "unistore/react";
import { actions } from  "../Store";
import { withRouter } from "react-router-dom";
import  ListCarts from "./ListCarts";
import axios from "axios";
import Navigation from "../Components/Navigation.js";
import Overlay from "../Home/MenuOverlay";
import Benefit from "../Home/Benefit";
import Newsletter from "../Home/Newsletter";
import Footer from "../Components/Footer";
import {Link} from "react-router-dom";
import "../assets/css/contact_styles.css";
import "../assets/css/contact_responsive.css";
import "../assets/css/cart.css";

const basicUrl = "http://0.0.0.0:8010/proxy"

class CartContent extends Component {
     
    componentDidMount = async () => {
        this.props.getCarts().then()
        console.log("carts di compDidMount CartContent", this.props.listCarts)
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
                                <th scope="col">Detail</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Prices</th>
                                <th>Delivery fees</th>
                                <th>Total Price</th>
                                <th>Edit</th>
                                <th>Purchase</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                {this.props.listCarts.map((item, key) => {
                    if (item.status !== "paid") {
                return <ListCarts key={key} img={item.urlimage} id={item.id}
                name={item.item} detail={item.detail} harga={item.harga} 
                    qty={item.jumlah} fee={item.ongkir} totalPrice={item.total_harga}
                />
            }
                })}
                
                        </tbody>
                        </table>
                        </div>
                        <br /><br /><br /><br />
                        </form>
                    </div>
                </div>
                    <div style={{textAlign:"center"}}>
                        <a type="on-submit" className="to-buy" ><Link to="/public/transaction-history" style={{color:"white"}}>Transaction History</Link></a>
                    </div>
        </div>
       <Benefit />
        <Newsletter />
        <Footer />
    </div>
        );
    }
}
export default connect (
    "is_login, listCarts, token, ",
    actions
) (withRouter (CartContent));