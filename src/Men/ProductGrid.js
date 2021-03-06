import React, { Component } from "react";
import ListProducts from './ListProducts';
import { connect } from "unistore/react";
import { actions } from  "../Store";
import {Redirect, withRouter} from "react-router-dom";


class ProductGrid extends Component {
    componentDidMount = () => {
        this.props.getProductsMen()
        console.log("products: ",this.props.listProducts)
    };

    render() {
      return (

        <div class="row">
            {this.props.listProducts.map((item, key) => {
            return <ListProducts key={key} name={item.name} type={item.type} kategori={item.kategori} harga={item.harga} img={item.urlimage}
                        brand={item.brand} detail={item.detail} penjual={item.penjual}
                        tersedia={item.tersedia} kota={item.kota} 
            />;
            })}
        </div>

        );
    }
}

export default connect(
    "listProducts",
    actions
)(withRouter(ProductGrid));