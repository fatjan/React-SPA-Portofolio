// this is for seller to sign up
import React, { Component } from "react";
import { connect } from "unistore/react";
import { withRouter } from "react-router-dom";
import { actions } from "../Store";
import Navigation from "../Components/NavigationSeller";
import Overlay from "../Home/MenuOverlay";
// import EditProductContent from "../EditProduct/EditProductContent";
import Benefit from "../Home/Benefit";
import Newsletter from "../Home/Newsletter";
import Footer from "../Components/Footer";
import "../assets/bootstrap4/bootstrap.min.css";

import "../assets/plugins/font-awesome-4.7.0/css/font-awesome.min.css";
import "../assets/plugins/OwlCarousel2-2.2.1/owl.carousel.css";
import "../assets/plugins/OwlCarousel2-2.2.1/owl.theme.default.css";
import "../assets/plugins/OwlCarousel2-2.2.1/animate.css";

import "../assets/css/main_styles.css";
import "../assets/css/categories_styles.css";
import "../assets/css/categories_responsive.css";
import "../assets/css/responsive.css";

import axios from "axios";
import { async } from "q";


const basicUrl = "http://0.0.0.0:8010/proxy"

class EditProduct extends Component {

  handleClickEdit = e =>  {
    this.props.setIdProduct(this.props.location.pathname.slice(20))
    console.log("id yang mau di edit", this.props.location.pathname.slice(20))
    if (this.props.productBrand !== "") {
     var inputBrand = this.props.productBrand
    } else if (this.props.productType !== "") {
      var inputType = this.props.productType
    } else if (this.props.productName !== "") {
      var inputName = this.props.productName
    } else if (this.props.productKategori !== "") {
      var inputKategori = this.props.productKategori
    } else if (this.props.productDetail !== "") {
      var inputDetail = this.props.productDetail
    } else if (this.props.productHarga !== 0) {
      var inputHarga = this.props.productHarga
    }  else if (this.props.productTersedia !== 0) {
        var inputTersedia = this.props.productTersedia
    } else if (this.props.productUrl !== "") {
      var inputUrl = this.props.productUrl }
      console.log("detail nya nich", this.props.productUrl)

      var body = {
        "kategori" : inputKategori,
        "type" : inputType,
        "name" : inputName,
        "harga" : inputHarga,
        "brand" : inputBrand,
        "detail" : inputDetail,
        "tersedia" : inputTersedia,
        "urlimage" : inputUrl
      }
      console.log("ini body", body)
      this.props.editProduct(body)    
      this.props.history.push("/seller/seeproduct")
        };
      
    render() {
      console.log("ini location pathname baru", this.props.location.pathname.slice(20))
      return (
          <div class="super_container">
            <Navigation />
            <Overlay />

            <div class="container-fluid">
        <br/><br/>
        <div class="row">
            <div class="col-md-3 col-sm-3"></div>
            <div class="col-md-8 col-sm-8">
                <div class="check-out">
                <br/><br/><br/><br/>
                    <h2>Edit Your Product Here</h2>
                    <h4>You can either fill one or any sections you want to edit.</h4>
                </div>
            </div>
           
                <div class="col-md-3 col-sm-3"></div>
                <div class="col-md-6 col-sm-6">
                    <form onSubmit={e => e.preventDefault()}>
                        <table>
                            <tr>
                                <div class="form-group">
                                    <td>
                                        <label for="Kategori">Kategori</label>
                                    </td>
                                    <td>
                                        <input type="kategori" name="productKategori" id="kategori" class="form-control" onChange={e => this.props.setField(e)}/>
                                    </td>
                                </div>
                            </tr>
                            <tr>
                                <div class="form-group">
                                    <td>
                                        <label for="Type">Type</label>
                                    </td>
                                    <td>
                                        <input type="Type" name="productType" id="Type" class="form-control" onChange={e => this.props.setField(e)}/>
                                    </td>
                                </div>
                            </tr>
                            <tr>
                                <div class="form-group">
                                    <td>
                                        <label for="Name">Name</label>
                                    </td>
                                    <td>
                                        <input type="Name" name="productName" id="Name" class="form-control" onChange={e => this.props.setField(e)}/>
                                    </td>
                                </div>
                            </tr>
                            <tr>
                                <div class="form-group">
                                    <td>
                                        <label for="Harga">Harga</label>
                                    </td>
                                    <td>
                                        <input type="Harga" name="productHarga" id="Harga" class="form-control" onChange={e => this.props.setField(e)}/>
                                    </td>
                                </div>
                            </tr>
                            <tr>
                                <div class="form-group">
                                    <td>
                                        <label for="Brand">Brand</label>
                                    </td>
                                    <td>
                                        <input type="Brand" name="productBrand" id="Brand" class="form-control" 
                                        onChange={e => this.props.setField(e)}/>
                                    </td>
                                </div>
                            </tr>
                            <tr>
                                <div class="form-group">
                                    <td>
                                        <label for="Detail">Detail</label>
                                    </td>
                                    <td>
                                        <input type="Detail" name="productDetail" id="Detail" class="form-control" 
                                        onChange={e => this.props.setField(e)}/>
                                    </td>
                                </div>
                            </tr>
                            <tr>
                                <div class="form-group">
                                    <td>
                                        <label for="Tersedia">Tersedia</label>
                                    </td>
                                    <td>
                                        <input type="Tersedia" name="productTersedia" id="Tersedia" class="form-control" 
                                        onChange={e => this.props.setField(e)}/>
                                    </td>
                                </div>
                            </tr>
                            <tr>
                                <div class="form-group">
                                    <td>
                                        <label for="Tersedia">Image URL</label>
                                    </td>
                                    <td>
                                        <input type="Tersedia" name="productUrl" id="ImageURL" class="form-control" 
                                        onChange={e => this.props.setField(e)}/>
                                    </td>
                                </div>
                            </tr>
                        </table>
                        <div class="col-md-12 text-center ">
                                <button type="submit" class=" btn btn-block mybtn btn-primary tx-tfm" 
                                onClick={this.handleClickEdit}
                               >Edit my Product</button>
                            </div>
                            <br/><br/><br/><br/><br/><br/>
                    </form>
                </div>
            </div>
        </div>




            <Benefit />
            <Newsletter />
            <Footer />
          </div>
      );
    }
  }

  export default connect(
    "is_login, productKategori, productType, productName, productHarga, productBrand, productDetail, productTersedia, productUrl, token",
    actions
  )(withRouter(EditProduct));
  
  // productid={this.props.match.params.productid}