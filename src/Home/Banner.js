import React, { Component } from "react";
import {Link} from "react-router-dom";

class Banner extends Component {
    render() {
      return (
        <div class="banner">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="banner_item align-items-center women_banner" >
                        <div class="banner_category">
                            <Link to="/product/women">women</Link>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="banner_item align-items-center accessories_banner" >
                        <div class="banner_category">
                            <Link to="/product/accessories">accessories</Link>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="banner_item align-items-center men_banner" >
                        <div class="banner_category">
                            <Link to="/product/men">men</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
    }
}
export default Banner;
