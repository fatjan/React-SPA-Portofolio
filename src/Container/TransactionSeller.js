import React, { Component } from "react";
import { connect } from "unistore/react";
import { actions } from  "../Store";
import { withRouter } from "react-router-dom";
import  SellerListCarts from "../Cart/SellerListCarts";
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

                        <h2 style={{textAlign:"center"}}>Your Bought Products Are on Display</h2>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form onSubmit={e => e.preventDefault()}>

                        <div className="table-responsive">
                        <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Item</th>
                                <th scope="col">Buyer Name</th>
                                <th scope="col">Detail</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Address</th>
                                <th scope="col">City</th>
                                <th>Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                {this.props.listCarts.map((item, key) => {
                    if (item.status === "paid") {
                return <SellerListCarts key={key} img={item.urlimage} 
                name={item.item} detail={item.detail} harga={item.harga} 
                    qty={item.jumlah} fee={item.ongkir} totalPrice={item.total_harga}
                    pembeli={item.pembeli} alamat={item.address} kota={item.kota}
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