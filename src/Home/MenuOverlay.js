import React, { Component } from "react";
import {Link} from "react-router-dom";

class Overlay extends Component {
    render() {
      return (
        <div>
        <div class="fs_menu_overlay"></div>
		<div class="hamburger_menu">
			<div class="hamburger_close"><i class="fa fa-times" aria-hidden="true"></i></div>
			<div class="hamburger_menu_content text-right">
				<ul class="menu_top_nav">
					<li class="menu_item has-children">
						<a href="#">
							My Account
							<i class="fa fa-angle-down"></i>
						</a>
						<ul class="menu_selection">
						<li><Link to="/">home</Link></li>
							<li><i class="fa fa-sign-in" aria-hidden="true"><Link to="/login" >Sign In</Link></i></li>
							<li><a href="register.html"><i class="fa fa-user-plus" aria-hidden="true"></i>Register</a></li>
						</ul>
					</li>
					<li class="menu_item"><a href="#">home</a></li>
					<li class="menu_item has-children">
							<a href="#">
								Categories
								<i class="fa fa-angle-down"></i>
							</a>
							<ul class="menu_selection">
								<li><Link to="/product/women"><i class="fa" aria-hidden="true"></i>Women</Link></li>
								<li><a href="#"><i class="fa" aria-hidden="true"></i>Accessories</a></li>
								<li><a href="#"><i class="fa" aria-hidden="true"></i>Men</a></li>
							</ul>
						</li>
					<li class="menu_item"><a href="#">best sellers</a></li>
					<li class="menu_item"><Link to="/contact">contact</Link></li>
				</ul>
			</div>
		</div>
        </div>
        );
    }
}
export default Overlay;
