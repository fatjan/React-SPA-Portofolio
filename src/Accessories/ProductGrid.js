import React, { Component } from "react";
import ListProducts from '../Men/ListProducts';
import { connect } from "unistore/react";
import { actions } from  "../Store";
import { withRouter } from "react-router-dom";


class ProductGrid extends Component {
    componentDidMount = () => {
        this.props.getProductsAksesoris()
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