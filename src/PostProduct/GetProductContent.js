import React, { Component } from "react";
import { connect } from "unistore/react";
import { actions } from  "../Store";
import { withRouter } from "react-router-dom";
import  ListProducts from "./ListProducts";
import axios from "axios";

const basicUrl = "http://0.0.0.0:8010/proxy"

class GetProductContent extends Component {

    constructor(props){
        super(props);
        this.state = {
            listProducts: []
        }
        console.log("ini token di getProdcutContent", this.props.token)
    }
     
    componentDidMount = async () => {
        const self = this;
        console.log("ini token di getProdcutContent", this.props.token)
        await axios
            .get(basicUrl+"/product/penjual?p=1&rp=50", {headers: {'Authorization': "Bearer " + this.props.token}})
            .then  ( response => {
                self.setState({
                    listProducts: response.data.products
                    });
                    console.log("produk ini",this.listProducts)
                })
            // .get()
            .catch(error => {
                console.log("error");
            })
        }

    render() {
      return (
        <div class="container-fluid">
        <br /><br /><br /><br /><br />
        <div class="check-out">
                    <h2>Your Products are on Display</h2>
                </div>
        
        <div class="row">
        <div className="col-lg-1 col-md-1"></div>
        <div className="col-lg-10 col-md-10 col-sm-12">
            {this.state.listProducts.map((item, key) => {
            return <ListProducts key={key} name={item.name} type={item.type} kategori={item.kategori} harga={item.harga} img={item.urlimage}
            brand={item.brand} detail={item.detail} penjual={item.penjual}
                        tersedia={item.tersedia} kota={item.kota} id={item.id}
            />;
            
            })}
        </div>
        <div className="col-lg-1 col-md-1"></div>
        </div>
        </div>
        );
    }
}
export default connect (
    "is_login, productKategori, productType, productName, productHarga, productBrand, productDetail, productTersedia, productUrl, token, id",
    actions
) (withRouter (GetProductContent));