import createStore from "unistore";
import axios from "axios";
import { async } from "q";
// import SearchCategory from "./SearchEverythingByCategory";
// export PORT=5001;
// export CORSANYWHERE_WHITELIST="https://localhost:5001","http://localhost:5001","http://localhost:5001";
// node server.js;

const initialState = {
    email: "",
    password: "",
    username: "",
    fullName: "",
    address: "",
    city: "",
    kota: "",
    is_login: false,
    token: "",
    userType: "",
    listProducts: [],
    listPopProducts: [],
    productID: 0,
    productKategori: "", 
    productType: "", 
    productName: "", 
    productHarga: 0, 
    productBrand: "", 
    productDetail: "", 
    productTersedia: 0,
    productUrl: "",
    hargaReceived: 0,
    editProductID: 0,
    ongkir: 0,
    totalHarga: 0,
    qty: 0,
    productDetail: "",
    detailProductColor: "",
    detailProductSize: "",
    listCarts: [],
    idProduct: 0,
    cartUrl: "",
    cartName: "",
    cartPrice: "",
    cartId: 0,


}

const basicUrl = "http://0.0.0.0:8010/proxy"
// const basicUrl = "https://cors-anywhere.herokuapp.com/http://13.210.147.51"
// const basicUrl = "http://localhost:5001"
// const urlLokal = "https://cors-anywhere.herokuapp.com/http://13.210.147.51/product?p=1&rp=50"
// const urlLokal = "http://localhost:5001/product?p=1&rp=50"
// const urlLogin = "https://cors-anywhere.herokuapp.com/http://13.210.147.51/login"


export const store = createStore(initialState)

export const actions = store => ({
        setField: (state, event) => {
            return {[event.target.name]: event.target.value};
        },
        postLogout: state => {
            return {is_login: false};
        },
        postLogin: async state => {
            const data = {username: state.username, password: state.password};
            // const username = state.username
            // const Tokens = state.token
            // store.setState({token: Tokens})
            var body = {"username":state.username, "password": state.password};
            console.log("ini data sign in", data)
            await axios 
                .post (basicUrl+"/login", body)
                .then (response => {
                    console.log("postlogin response", response.data);
                    if (response.data.hasOwnProperty("token")) {
                        store.setState({
                            is_login: true,
                            token: response.data.token
                            });
                            }
                            var tokenNich = state.token
                            axios
                            .get (basicUrl+"/user", body, {headers: {'Authorization': "Bearer " + tokenNich}})
                            .then (response => {
                                store.setState({
                                    userType: response.data.user_type,
                                    username: response.data.username,
                                    fullName: response.data.name,
                                    address: response.data.address,
                                    city: response.data.kota,
                                    })
                                })
                            var tipeUser = state.userType
                            console.log("token user ini: ", store.getState().token)
                            console.log(response.data.name)
                        })

                // cons response = await axios.then()

                .catch(error => {
                    console.log(error);
                })
        },
    
    getUserProfile: async state => {
        await axios
        .get (basicUrl+"/user", {headers: 
            {"Authorization": "Bearer " + state.token}
        }
            )
        .then (response => {
            store.setState({
                userType: response.data.user.user_type,
                username: response.data.user.username,
                fullName: response.data.user.name,
                address: response.data.user.address,
                kota: response.data.user.kota,
                })
            console.log(response.data.user.name)
            })
            console.log("token di fungsi getUserProfile: ", state.token)
        

    },
    
    postNewProduct: async state => {
        var body = {
            "kategori": state.productKategori,
            "type": state.productType,
            "name": state.productName,
            "harga": state.productHarga,
            "brand": state.productName,
            "detail": state.productDetail,
            "tersedia": state.productTersedia,
            "urlimage": state.productUrl
        }
        await axios 
            .post (basicUrl+"/product", body, {headers:{"Authorization": "Bearer " + state.token}})
            .then (response => {
                if (response.data.hasOwnProperty("id")) {
                    store.setState({
                        is_login: true,
                        productKategori: response.data.product.kategori,
                        productType: response.data.product.type,
                        productName: response.data.product.name,
                        productHarga: response.data.product.harga,
                        productBrand: response.data.product.kota,
                        productDetail: response.data.product.detail,
                        productTersedia: response.data.product.tersedia,
                        productUrl: response.data.product.urlimage,
                    });
                }
            })
    },

    registerUser: async state => {
        if (state.username === "") {
            alert("Username cannot be empty")
        } else if (state.fullName === "") {
            alert("Full Name cannot be empty")
        } else if (state.password === "") {
            alert("Password cannot be empty")
        } else if (state.address === "") {
            alert("Address cannot be empty")
        } else if (state.kota === "") {
            alert("Kota cannot be empty")
        }
        else {
        var body = {
            "username": state.username,
            "name": state.fullName,
            "password": state.password,
            "address": state.address,
            "kota": state.kota
        }}
       
        await axios 
            .post (basicUrl+"/user", body,  {headers: {"Content-Type": "application/json"}})
            .then (response => {
                console.log("registerUser response", response.data);
                // if (response.data.hasOwnProperty("token")) {
                if (response.data.hasOwnProperty("data")) {
                    store.setState({
                        is_login: true,
                        userType: response.data.data.user_type,
                        username: response.data.data.username,
                        fullName: response.data.data.name,
                        address: response.data.data.address,
                        kota: response.data.data.kota,
                    });
                    } 
                })
            .catch(error => {
                console.log("error");
            })
    }, 


    registerSeller: async state => {
        if (state.username === "") {
            alert("Username cannot be empty")
        } else if (state.fullName === "") {
            alert("Full Name cannot be empty")
        } else if (state.password === "") {
            alert("Password cannot be empty")
        } else if (state.address === "") {
            alert("Address cannot be empty")
        } else if (state.kota === "") {
            alert("Kota cannot be empty")
        }
        else {
        var body = {
            "username": state.username,
            "name": state.fullName,
            "password": state.password,
            "address": state.address,
            "kota": state.kota
        }}
        await axios 
            .post (basicUrl+"/user?user_type=penjual", body, {headers: {"Content-Type": "application/json"}})
            .then (response => {
                console.log("registerUser response", response.data);
                // if (response.data.hasOwnProperty("token")) {
                if (response.data.hasOwnProperty("data")) {
                    store.setState({
                        is_login: true,
                        userType: response.data.data.user_type,
                        username: response.data.data.username,
                        fullName: response.data.data.name,
                        address: response.data.data.address,
                        kota: response.data.data.kota,
                    });
                    } 
                    // else {
                    //     alert ("Username has been used. Try choosing another user name.")
                    // }
                })
            .catch(error => {
                console.log("error");
            })
    }, 

    getProducts: async state => {
        const data = {
            listProducts: state.listProducts
        }
        await axios
            // .get(basicUrl+"/product?p=1&rp=50", 
            //     {headers: {"X-Requested-With": "http://13.210.147.51"}})
            .get(basicUrl+"/product?p=1&rp=50")
            .then  ( response => {
                store.setState({
                    listProducts: response.data.products
                    });
                })
            .catch(error => {
                console.log("error");
            })
        },

    getProductsWomen: async state => {
        const data = {
            listProducts: state.listProducts
        }
        await axios
            .get(basicUrl+"/product?kategori=women&p=1&rp=50")
            .then  ( response => {
                store.setState({
                    listProducts: response.data.products
                    });
                })
            .catch(error => {
                console.log("error");
            })
        },
    
    getProductsMen: async state => {
        const data = {
            listProducts: state.listProducts
        }
        await axios
            .get(basicUrl+"/product?kategori=men&p=1&rp=50")
            .then  ( response => {
                store.setState({
                    listProducts: response.data.products
                    });
                })
            .catch(error => {
                console.log("error");
            })
        },

    getProductsAksesoris: async state => {
        const data = {
            listProducts: state.listProducts
        }
        await axios
            .get(basicUrl+"/product?kategori=aksesoris&p=1&rp=50")
            .then  ( response => {
                store.setState({
                    listProducts: response.data.products
                    });
                })
            .catch(error => {
                console.log("error");
            })
        },

    filterByPriceCatWomen: async state => {
        const data = {
            listProducts: state.listProducts
        }
        var harga = state.amount
        await axios
            .get(basicUrl+"/product?kategori=women&p=1&rp=50&max_harga="+harga)
            .then  ( response => {
                store.setState({
                    listProducts: response.data.products
                    });
                })
            .catch(error => {
                console.log("error");
            })
        },
    
    filterByPriceCatAccessories: async state => {
        const data = {
            listProducts: state.listProducts
        }
        var harga = state.amount
        await axios
            .get(basicUrl+"/product?kategori=aksesoris&p=1&rp=50&max_harga="+harga)
            .then  ( response => {
                store.setState({
                    listProducts: response.data.products
                    });
                })
            .catch(error => {
                console.log("error");
            })
        },

    filterByPriceCatMen: async state => {
        const data = {
            listProducts: state.listProducts
        }
        var harga = state.amount
        await axios
            .get(basicUrl+"/product?kategori=men&p=1&rp=50&max_harga="+harga)
            .then  ( response => {
                store.setState({
                    listProducts: response.data.products
                    });
                })
            .catch(error => {
                console.log("error");
            })
        },

    getPopProducts: async state => {
        // const data = {
        //     listProducts: state.listProducts
        // }
        const token = store.getState
        await axios
            .get(basicUrl+"/pop_product?p=1&rp=50")
            .then  ( response => {
                store.setState({
                    listPopProducts: response.data.pop_products
                    });
                    console.log("produk ini",this.listPopProducts)
                })
            // .get()
            .catch(error => {
                console.log("error");
            })
        },
    
    editProduct: async (state, body) => {
        if (state.productBrand !== "") {
            var inputBrand = state.productBrand
           } if (state.productType !== "") {
             var inputType = state.productType
           } if (state.productName !== "") {
             var inputName = state.productName
           } if (state.productKategori !== "") {
             var inputKategori = state.productKategori
           } if (state.productDetail !== "") {
             var inputDetail = state.productDetail
           } if (state.productHarga !== 0) {
             var inputHarga = state.productHarga
           } if (state.productTersedia !== 0) {
               var inputTersedia = state.productTersedia
           } if (state.productUrl !== "") {
             var inputUrl = state.productUrl }
        console.log("token di editProduct function", store.getState().token)
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
        console.log("ini body di fungsi editproduct", body)
        await axios
            .put(basicUrl+"/product/penjual/"+state.idProduct, body, {headers: {'Authorization': "Bearer " + store.getState().token}})
            .then  ( response => {
                // store.setState({
                //     listPopProducts: response.data.pop_products
                //     });
                    console.log("produk ini berhasil diedit",state.idProduct)
                    alert("Your product has been successfully edited.")
                })
            .catch(error => {
                console.log("error");
            })
    },
    
    deleteProduct: async state => {
        // alert("product ID yang akan di delete: ", state.idProduct)
        await axios
            .delete(basicUrl+"/product/"+state.idProduct, {headers: {'Authorization': "Bearer " + store.getState().token}})
            .then  ( response => {
                alert("product with ID " + state.idProduct + "has been successfully deleted.")
            })
            .catch(error => {
                console.log("error");
            })
    },

    deleteCart: async state => {
        // alert("product ID yang akan di delete: ", state.idProduct)
        await axios
            .delete(basicUrl+"/cart/"+state.idProduct, {headers: {'Authorization': "Bearer " + store.getState().token}})
            .then  ( response => {
                alert("Cart with ID " + state.idProduct + "has been successfully deleted.")
            })
            .catch(error => {
                console.log("error");
            })
    },

    setIdProduct: (state, value) => {
        store.setState ({
            idProduct: value
        })
    },
    
    setCartId: (state, value) => {
        store.setState ({
            cartId: value
        })
    },

    sendProductDetailsToCart: (state, valueImg, valueName, valueHarga) => {
        store.setState ({
            productUrl: valueImg,
            productName: valueName,
            productHarga: valueHarga,
        })
    },

    buyProduct: async (state, body) => {
        console.log("ini di buyproduct")
        var body = {
            "status": "paid"
        }
        await axios
        .put(basicUrl+"/cart/"+state.idProduct, body, {headers: {'Authorization': "Bearer " + store.getState().token}})
        .then  ( response => {
                console.log("Thanks for buying our product.",state.idProduct)
            })
        .catch(error => {
            console.log("error");
        })
    },

    addToCart: async (state, body) => {
        console.log("token di addToCart function", store.getState().token)
        var body = {
            "product_id": state.idProduct,
            "jumlah" : state.amount,
            "detail" : "Color: "+ state.detailProductColor + ", Size : " + state.detailProductSize,
        } 
        
        console.log("ini body", body)
        await axios
            .post(basicUrl+"/cart", body, {headers: {'Authorization': "Bearer " + store.getState().token}})
            .then  ( response => {
                store.setState({
                    productUrl: response.data.data.urlimage,
                    productName: response.data.data.item,
                    productHarga: response.data.data.harga,
                    productHarga: response.data.data.harga,
                    ongkir: response.data.data.ongkir,
                    totalHarga: response.data.data.total_harga,
                    productDetail: response.data.data.detail
                    });
                    console.log("produk ini berhasil dimasukkan cart",state.idProduct)
                })
            .catch(error => {
                console.log("error");
            })
    },

    editCart: async (state, body) => {
        console.log("cart id di editCart function", state.cartId)
        var body = {
            "jumlah" : state.amount,
            "detail" : "Color: "+ state.detailProductColor + ", Size : " + state.detailProductSize,
        } 
        
        console.log("ini body", body)
        await axios
            .put(basicUrl+"/cart/"+state.cartId, body, {headers: {'Authorization': "Bearer " + store.getState().token}})
            .then  ( response => {
                    console.log("cart ini berhasil diedit",state.idProduct)
                })
            .catch(error => {
                console.log("error");
            })
    },

    sendHargaProduct: (harga) => {
        store.setState ({
            hargaReceived : harga
        })
    },

    onQtyChange: async state => {
        console.log("qty",state.amount)
        console.log("id product di store", state.idProduct)
        console.log("harga product ", state.hargaReceived.productHarga)
        store.setState({
          totalHarga: state.amount * (state.hargaReceived.productHarga+15000)
        });
        console.log("qty", state.amount)
        console.log("total price: ", state.totalHarga)
      },

    getCartById: async state => {
        console.log("ini di getCartById function", state.cartId)
    await axios
        .get(basicUrl+"/cart/"+state.cartId, {headers: {'Authorization': "Bearer " + store.getState().token}})
        .then  ( response => {
            store.setState({
                cartUrl: response.data.cart.urlimage,
                cartName: response.data.cart.item,
                cartPrice: response.data.cart.harga
                });
                console.log("ini carts nya", response.data.data)
                console.log("ini carts nya", state.cartName)
                console.log("ini carts nya", state.cartPrice)

            })
        .catch(error => {
            console.log("error");
        })
    },
    

    getCarts: async state => {
        console.log("ini di getCarts function")
    await axios
        .get(basicUrl+"/cart?p=1&rp=50", {headers: {'Authorization': "Bearer " + store.getState().token}})
        .then  ( response => {
            store.setState({
                listCarts: response.data.data
                });
                console.log("ini carts nya", state.listCarts)
            })
        .catch(error => {
            console.log("error");
        })
    },

    getTransactions: async state => {
        console.log("ini di getCarts function")
    await axios
        .get(basicUrl+"/cart?p=1&rp=50", {headers: {'Authorization': "Bearer " + store.getState().token}})
        .then  ( response => {
            store.setState({
                listCarts: response.data.data
                });
                console.log("ini carts nya", state.listCarts)
            })
        .catch(error => {
            console.log("error");
        })
    },
});