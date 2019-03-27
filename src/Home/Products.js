import React, { Component } from 'react';
import ListProducts from './ListProducts';
import { connect } from "unistore/react";
import { actions } from  "../Store";
import {Redirect, withRouter} from "react-router-dom";

class Products extends Component {

    componentDidMount = () => {
        this.props.getProducts()
        console.log("products all: ",this.props.listProducts)
        this.props.getPopProducts()
        console.log("products best seller: ",this.props.listPopProducts)        
    };

    handleClick = e => {
        this.props.getProducts()
        console.log("products all: ",this.props.listProducts)
    }

    handleClickWomen = e => {
        this.props.getProductsWomen()
        console.log("products women: ",this.props.listProducts)
    }
    handleClickMen = e => {
        this.props.getProductsMen()
        console.log("products men: ",this.props.listProducts)
    }
    handleClickAksesoris = e => {
        this.props.getProductsAksesoris()
        console.log("products aksesoris: ",this.props.listProducts)
        this.props.getPopProducts()
        console.log("products best seller: ",this.props.listPopProducts)   
    }

    render() {
        const {listProducts} = this.props;
            return (
                <div>
                    {/* <div class="new_arrivals"> */}
                    <div class="container">

                        <div class="row">
                            <div class="col text-center">
                                <div class="section_title new_arrivals_title">
                                    <h2>New Arrivals</h2>
                                </div>
                            </div>
                        </div>

                        <div class="row align-items-center">
                            <div class="col text-center">
                                <div class="new_arrivals_sorting">
                                    <ul class="arrivals_grid_sorting clearfix button-group filters-button-group">
                                        <li class="grid_sorting_button button d-flex flex-column justify-content-center align-items-center active is-checked"
                                        data-filter="*"><a onClick={this.handleClick}>all</a></li>
                                        <li class="grid_sorting_button button d-flex flex-column justify-content-center align-items-center"><a onClick={this.handleClickWomen}>women</a></li>
                                        <li class="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".accessories"><a onClick={this.handleClickAksesoris}>accessories</a></li>
                                        <li class="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".men"><a onClick={this.handleClickMen}>men</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    
                    <div class="row">
                        {this.props.listProducts.map((item, key) => {
                        return <ListProducts key={key} id={item.id} name={item.name} 
                        type={item.type} kategori={item.kategori} harga={item.harga} 
                        brand={item.brand} detail={item.detail} penjual={item.penjual}
                        tersedia={item.tersedia} kota={item.kota} img={item.urlimage} 
                        />;
                        })}
                    </div>
                    </div>
                </div>

        );
    }
}

export default connect(
    "listProducts, listPopProducts",
    actions
)(withRouter(Products));

