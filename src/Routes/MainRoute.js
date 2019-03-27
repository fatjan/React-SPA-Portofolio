import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "../Container/Home";
import Login from "../Container/Login";
import Register from "../Container/Register";
import Sell from "../Container/Sell";
import Contact from "../Container/Contact";
import Profile from "../Container/Profile";
import Cart from "../Container/Cart";
import CategoriesWomen from "../Container/CategoriesWomen";
import Accessories from "../Container/Accessories";
import CategoriesMen from "../Container/CategoriesMen";
import PostProduct from "../Container/PostProduct";
import GetProduct from "../Container/GetProduct";
import FAQ from "../Container/Freq";
import EditProduct from "../Container/EditProduct";
import DeleteProduct from "../Container/DeleteProduct";
import NotMatch from "../Components/NotMatch";
import CartContent from "../Cart/CartContent";
import Transaction from "../Container/Transaction";
import TransactionSeller from "../Container/TransactionSeller";
import TransactionHistory from "../Container/TransactionHistory";
import DeleteCart from "../Container/DeleteCart";
import EditCart from "../Container/EditCart";
import BuyProduct from "../Container/BuyProduct";


const MainRoute = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/register/seller" component={Sell} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/faq" component={FAQ} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/product/women" component={CategoriesWomen} />
            <Route exact path="/product/accessories" component={Accessories} />
            <Route exact path="/product/men" component={CategoriesMen} />
            <Route exact path="/seller/postproduct" component={PostProduct} />
            <Route exact path="/seller/seeproduct" component={GetProduct} />
            <Route exact path="/seller/editproduct/:productid" component={EditProduct} />
            <Route exact path="/seller/deleteproduct/:productid" component={DeleteProduct} />
            <Route exact path="/public/addcart/:productid" component={Cart} />
            <Route exact path="/public/deletecart/:productid" component={DeleteCart} />
            <Route exact path="/public/editcart/:productid" component={EditCart} />
            <Route exact path="/public/buyproduct/:productid" component={BuyProduct} />
            <Route exact path="/public/cartlist" component={CartContent} />
            <Route exact path="/public/transaction-history" component={TransactionHistory} /> 
            <Route exact path="/seller/transaction" component={TransactionSeller} />           
            <Route component={NotMatch} />        
        </Switch>
    );
};

export default MainRoute;