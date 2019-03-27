import React, { Component } from "react";
import { connect } from "unistore/react";
import { actions } from  "../Store";
import { withRouter } from "react-router-dom";
import  ListTransactions from "../Cart/ListTransactions";
import axios from "axios";
import Navigation from "../Components/Navigation.js";
import Overlay from "../Home/MenuOverlay";
import Benefit from "../Home/Benefit";
import Newsletter from "../Home/Newsletter";
import Footer from "../Components/Footer";
import {Link} from "react-router-dom";


const basicUrl = "http://0.0.0.0:8010/proxy"

class Transaction extends Component {
     
    componentDidMount = async () => {
        this.props.getTransactions().then()
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
                <div class="col-md-4 col-lg-4 col-sm-3"></div>
                <div class="col-md-4 col-lg-4 col-sm-6">
                        <h2>Transaction History</h2>
                </div>
                <div class="col-md-4 col-lg-4 "></div>
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
                            </tr>
                        </thead>
                        <tbody>
                            
                {this.props.listCarts.map((item, key) => {
                    if (item.status === "paid") {
                return <ListTransactions key={key} img={item.urlimage} 
                name={item.item} detail={item.detail} harga={item.harga} 
                    qty={item.jumlah} fee={item.ongkir} totalPrice={item.total_harga}
                />
            }
                })}
                
                        </tbody>
                        </table>
                        </div>
                        <br /><br /><br /><br />
                    <div className="row">

                        <div className="col-lg-5 col-md-5"></div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <Link to="/public/cartlist">BACK TO CART</Link>
                        </div>
                        <div className="col-lg-3 col-md-3"></div>

                    </div>
                        </form>
                    </div>
                </div>
                <br/><br/><br/><br/>
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
) (withRouter (Transaction));