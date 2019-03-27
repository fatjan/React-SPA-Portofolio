import React, { Component } from "react";
import { connect } from "unistore/react";
import { actions } from  "../Store";
import {withRouter} from "react-router-dom";

class PostProductContent extends Component {
    postProduct = () => {
        this.props.postNewProduct().then(() => {
            console.log("data new product:", this.props.newProduct)
            alert('Product has been successfully posted. You can see it on the home page.')
            this.props.history.replace("/");
        })
    }
    render() {
      return (

            <section>
              <div className="container">
                <div className="row">
                    <div className="col-md-4">
                    
                    </div>
                    <div className="col-md-4">
                    <h2 style={{marginTop:"150px"}}>Post Your Product Here</h2>
                    <form onSubmit={e => e.preventDefault()}>
                        <div class="form-group">
                                <label for="Kategori">Kategori</label>
                                <input type="kategori" name="productKategori" id="kategori" class="form-control" onChange={e => this.props.setField(e)}/>
                        </div>
                        <div class="form-group">
                                <label for="Type">Type</label>
                                <input type="Type" name="productType" id="Type" class="form-control" onChange={e => this.props.setField(e)}/>
                        </div>
                        <div class="form-group">
                                <label for="Name">Name</label>
                                <input type="Name" name="productName" id="Name" class="form-control" onChange={e => this.props.setField(e)}/>
                        </div>
                        <div class="form-group">
                                <label for="Harga">Harga</label>
                                <input type="Harga" name="productHarga" id="Harga" class="form-control" onChange={e => this.props.setField(e)}/>
                        </div>
                        <div class="form-group">
                                <label for="Brand">Brand</label>
                                <input type="Brand" name="productBrand" id="Brand" class="form-control" onChange={e => this.props.setField(e)}/>
                        </div>
                        <div class="form-group">
                                <label for="Detail">Detail</label>
                                <input type="Detail" name="productDetail" id="Detail" class="form-control" onChange={e => this.props.setField(e)}/>
                        </div>
                        <div class="form-group">
                                <label for="Tersedia">Tersedia</label>
                                <input type="Tersedia" name="productTersedia" id="Tersedia" class="form-control" onChange={e => this.props.setField(e)}/>
                        </div>
                        <div class="form-group">
                                <label for="Tersedia">Image URL</label>
                                <input type="Tersedia" name="productUrl" id="ImageURL" class="form-control" onChange={e => this.props.setField(e)}/>
                        </div>
                        <div class="col-md-12 text-center ">
                                <button type="submit" class=" btn btn-block mybtn btn-primary tx-tfm" onClick={() => this.postProduct()} style={{backgroundColor:"#fe4c50", border:"none"}} >
                                    Post my Product
                                </button>
                            </div>
                            <br/><br/><br/><br/><br/><br/>
                    </form>
                    </div>
                    <div className="col-md-4">
                    
                    </div>
                </div>
              </div>
          </section>

        );
    }
}
// export default PostProductContent;
export default connect (
    "is_login, productKategori, productType, productName, productHarga, productBrand, productDetail, productTersedia, productUrl",
    actions
) (withRouter (PostProductContent));