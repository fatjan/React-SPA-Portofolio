import React, { Component } from "react";
import { connect } from "unistore/react";
import { actions } from  "../Store";
import {withRouter} from "react-router-dom";


const basicUrl = "http://0.0.0.0:8010/proxy"

class EditProductContent extends Component {
 
    render() {
      return (
        <div class="container-fluid">
        <br/><br/>
        <div class="row">
            <div class="col-md-3 col-sm-3"></div>
            <div class="col-md-8 col-sm-8">
                <div class="check-out">
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
                                        <input type="kategori" name="productKategori" id="kategori" class="form-control" onChange={e => this.setField(e)}/>
                                    </td>
                                </div>
                            </tr>
                            <tr>
                                <div class="form-group">
                                    <td>
                                        <label for="Type">Type</label>
                                    </td>
                                    <td>
                                        <input type="Type" name="productType" id="Type" class="form-control" onChange={e => this.setField(e)}/>
                                    </td>
                                </div>
                            </tr>
                            <tr>
                                <div class="form-group">
                                    <td>
                                        <label for="Name">Name</label>
                                    </td>
                                    <td>
                                        <input type="Name" name="productName" id="Name" class="form-control" onChange={e => this.setField(e)}/>
                                    </td>
                                </div>
                            </tr>
                            <tr>
                                <div class="form-group">
                                    <td>
                                        <label for="Harga">Harga</label>
                                    </td>
                                    <td>
                                        <input type="Harga" name="productHarga" id="Harga" class="form-control" onChange={e => this.setField(e)}/>
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
                                        onChange={e => this.setField(e)}/>
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
                                        onChange={e => this.setField(e)}/>
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
                                        onChange={e => this.setField(e)}/>
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
                                        onChange={e => this.setField(e)}/>
                                    </td>
                                </div>
                            </tr>
                        </table>
                        <div class="col-md-12 text-center ">
                                <button type="submit" class=" btn btn-block mybtn btn-primary tx-tfm" 
                               >Edit my Product</button>
                            </div>
                            <br/><br/><br/><br/><br/><br/>
                    </form>
                </div>
            </div>
        </div>
        );
    }
}
export default connect (
    "is_login, productKategori, productType, productName, productHarga, productBrand, productDetail, productTersedia, productUrl, token, editProductID",
    actions
) (withRouter (EditProductContent));