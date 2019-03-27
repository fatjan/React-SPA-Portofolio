import React from "react";
import {Link} from "react-router-dom";
import logoBunga from "../assets/img/bunga.png";
import { connect } from "unistore/react";
import { actions } from "../Store";
import { withRouter } from "react-router-dom";


const NavigationSeller = props => {
    return (
        <header class="header trans_300">

{/* Top Navigation */}

<div class="top_nav">
<div class="container">
    <div class="row">
        <div class="col-md-6">
            <div class="top_nav_left">Welcome to our website. Happy Shopping! </div>
        </div>
        <div class="col-sm-3 col-md-3 search1">
            <form class="navbar-form" role="search">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search" name="srch-term" id="srch-term" />
                    <div class="input-group-btn">
                        <button class="btn btn-default" type="submit"><i class="fa fa-search"></i></button>
                    </div>
                </div>
            </form>
        </div>
        <div class="col-md-3 text-right">
            <div class="top_nav_right">
                <ul class="top_nav_menu">
                    <li class="account">
                        <a href="#">
                            My Account
                            <i class="fa fa-angle-down"></i>
                        </a>
                        <ul class="account_selection">
                            <li><Link to="/" onClick={() => props.postLogout()}><i class="fa fa-sign-in" aria-hidden="true"></i>Log Out</Link></li>
                            {/* <li><Link to="/login" ><i class="fa fa-sign-in" aria-hidden="true"></i>Sign In</Link></li>
                            <li><Link to="/register" ><i class="fa fa-user-plus" aria-hidden="true"></i>Register</Link></li>
                            <li><Link to="/register/seller" ><i class="fa fa-sign-in" aria-hidden="true"></i>Sell</Link></li> */}
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</div>

{/* <!-- Main Navigation --> */}

<div class="main_nav_container" style={{height: "76px"}}>
<div class="container">
    <div class="row">
        <div class="col-lg-12 text-right">
            <div class="logo_container move" style={{paddingBottom:"15px"}} style={{marginTop:"-8px"}}>
                <img src={logoBunga} />
                <a href="admin.html">Fatimah</a><a href="penjual.html" style={{color:"pink"}}>Fashion</a>
            </div>
            <nav class="navbar">
                <ul class="navbar_menu" style={{paddingBottom:"48px"}}>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/seller/seeproduct">Your Products</Link></li>
                    <li><Link to="/seller/postproduct" >Post a Product</Link></li>
                    {/* <li><Link to="/seller/postproduct" >Cart</Link></li> */}
                </ul>
                <ul class="navbar_user" style={{paddingBottom:"49px"}}>
                    <li><Link to="/profile"><i class="fa fa-user" aria-hidden="true"></i></Link></li>
                    <li class="checkout">
                        <Link to="/seller/transaction">
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        </Link>
                    </li>
                </ul>
                <div class="hamburger_container">
                    <i class="fa fa-bars" aria-hidden="true"></i>
                </div>
            </nav>
        </div>
    </div>
</div>
</div>

</header>
        
        
    );
}

export default connect (
    "is_login, userType,",
    actions
) (withRouter (NavigationSeller));
