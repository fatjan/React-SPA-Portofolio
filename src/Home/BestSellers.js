import React, { Component } from "react";
import ListPopProducts from './ListPopProducts';
import { connect } from "unistore/react";
import { actions } from  "../Store";
import {Redirect, withRouter} from "react-router-dom";

class BestSellers extends Component {
    componentDidMount = () => {
        this.props.getPopProducts()
        console.log("products pop: ",this.props.listPopProducts)
        this.props.getProducts()
        console.log("products all: ",this.props.listProducts)

    };
    render() {
        console.log("List pop produk dari bestseller", this.props.listPopProducts)
        console.log("List produk dari bestseller", this.props.listProducts)
      return (
        <div class="best_sellers">
        <div class="container">
            <div class="row">
                <div class="col text-center">
                    <div class="section_title new_arrivals_title">
                        <h2 id="bestSeller">Best Sellers</h2>
                    </div>
                </div>
            </div>
            <br />
            <div class="row">

                {this.props.listPopProducts.map((item, key) => {

                        return <ListPopProducts key={key} name={item.name} 
                        type={item.type} kategori={item.kategori} 
                        harga={item.harga} 
                        penjual={item.penjual} img={item.urlimage}
                        />;
                        }
                        )
                    }
                        

                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    "listPopProducts, listProducts",
    actions
)(withRouter(BestSellers));


// .props.listProducts.map((item, key) => {

//     this.props.listPopProducts.map((itempop, keypop) => {

//         if (item.id == itempop.id) {
//             console.log("id all: ", item.id)
//             console.log("id pop: ", itempop.id)
//             return <ListPopProducts key={key} name={item.name} 
//             type={item.type} kategori={item.kategori} 
//             harga={item.harga} />;
//             }
//             })
//         })
//     }