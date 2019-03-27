import React, { Component } from "react";

class NewArrivals extends Component {
    render() {
      return (
        <div class="new_arrivals">
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
                             data-filter="*">all</li>
                            <li class="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".women">women's</li>
                            <li class="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".accessories">accessories</li>
                            <li class="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".men">men's</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <div class="product-grid" data-isotope='{ "itemSelector": ".product-item", "layoutMode": "fitRows" }'>

                        {/* <!-- Product 1 --> */}

                        <div class="product-item men">
                            <div class="product product_filter">
                                <div class="product_image">
                                    <img src={require('../assets/img/single_3.jpg')} alt="image_product" />
                                </div>
                                <div class="favorite favorite_left"></div>
                                <div class="product_info">
                                    <h6 class="product_name"><a href="single.html">Pocket cotton sweatshirt. Elegant for men.</a></h6>
                                    <div class="product_price">Rp 250.000</div>
                                </div>
                            </div>
                            <div class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                        </div>

                        {/* <!-- Product 2 --> */}

                        <div class="product-item women">
                            <div class="product product_filter">
                                <div class="product_image">
                                    <img src={require('../assets/img/cewe1.jpeg')} alt="image_product" />
                                </div>
                                <div class="favorite"></div>
                                <div class="product_info">
                                    <h6 class="product_name"><a href="single.html">Baju wanita muslimah. Chick, modern, cool tone. Corak putih.</a></h6>
                                    <div class="product_price">Rp 250.000</div>
                                </div>
                            </div>
                            <div class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                        </div>

                        {/* <!-- Product 3 --> */}

                        <div class="product-item women">
                            <div class="product product_filter">
                                <div class="product_image">
                                    <img src={require('../assets/img/baju.jpg')} alt=""/>
                                </div>
                                <div class="favorite"></div>
                                <div class="product_info">
                                    <h6 class="product_name"><a href="single.html">Baju kaos muslimah. Nyaman dipakai untuk keperluan
                                            sehari-hari.</a></h6>
                                    <div class="product_price">Rp 120.000</div>
                                </div>
                            </div>
                            <div class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                        </div>

                        {/* <!-- Product 4 --> */}

                        <div class="product-item accessories">
                            <div class="product product_filter">
                                <div class="product_image">
                                    <img src={require('../assets/img/product_4.png')}  alt=""/>
                                </div>
                                <div class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>sale</span></div>
                                <div class="favorite favorite_left"></div>
                                <div class="product_info">
                                    <h6 class="product_name"><a href="single.html">Sling bag modern. Ringan, banyak kantong. Muat untuk banyak
                                            barang.</a></h6>
                                    <div class="product_price">Rp 175.000</div>
                                </div>
                            </div>
                            <div class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                        </div>

                        {/* <!-- Product 5 --> */}

                        <div class="product-item women">
                            <div class="product product_filter">
                                <div class="product_image">
                                    <img src={require('../assets/img/rok1.jpg')} alt=""/>
                                </div>
                                <div class="favorite"></div>
                                <div class="product_info">
                                    <h6 class="product_name"><a href="single.html">Rok muslimah nan trendy, ga transparan. Nyaman dipakai.</a></h6>
                                    <div class="product_price">Rp 180.000</div>
                                </div>
                            </div>
                            <div class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                        </div>

                        {/* <!-- Product 6 --> */}

                        <div class="product-item accessories">
                            <div class="product product_filter">
                                <div class="product_image">
                                    <img src={require('../assets/img/tas2.jpg')} alt="" />
                                </div>
                                <div class="favorite favorite_left"></div>
                                <div class="product_info">
                                    <h6 class="product_name"><a href="#single.html">Tas tangan elegan. Ringan, enak dipakai. Chick dan trendy.</a></h6>
                                    <div class="product_price">Rp 135.000</div>
                                </div>
                            </div>
                            <div class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                        </div>

                        {/* <!-- Product 7 --> */}

                        <div class="product-item women">
                            <div class="product product_filter">
                                <div class="product_image">
                                    <img src={require('../assets/img/black.png')} alt="" />
                                </div>
                                <div class="favorite"></div>
                                <div class="product_info">
                                    <h6 class="product_name"><a href="single.html">Baju kaos muslimah yang fashionable, trendy dan nyaman
                                            dipakai.</a></h6>
                                    <div class="product_price">Rp 210.000</div>
                                </div>
                            </div>
                            <div class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                        </div>

                        {/* <!-- Product 8 --> */}

                        <div class="product-item accessories">
                            <div class="product product_filter">
                                <div class="product_image">
                                    <img src={require('../assets/img/product_8.png')} alt="" />
                                </div>
                                <div class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>sale</span></div>
                                <div class="favorite favorite_left"></div>
                                <div class="product_info">
                                    <h6 class="product_name"><a href="single.html">Dompet chick nan cantik. Ada resleting untuk duit koin.</a></h6>
                                    <div class="product_price">Rp 150.000</div>
                                </div>
                            </div>
                            <div class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                        </div>

                        {/* <!-- Product 9 --> */}

                        <div class="product-item men">
                            <div class="product product_filter">
                                <div class="product_image">
                                    <img src={require('../assets/img/koko5.jpg')} alt=""/>
                                </div>
                                <div class="favorite favorite_left"></div>
                                <div class="product_info">
                                    <h6 class="product_name"><a href="single.html">Baju muslim pria. Lengan pendek. Menawan dan nyaman dipakai.</a></h6>
                                    <div class="product_price">Rp 110.000</div>
                                </div>
                            </div>
                            <div class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                        </div>

                        {/* <!-- Product 10 --> */}

                        <div class="product-item men">
                            <div class="product product_filter">
                                <div class="product_image">
                                    <img src={require('../assets/img/koko4.jpg')}  alt="" />
                                </div>
                                <div class="favorite"></div>
                                <div class="product_info">
                                    <h6 class="product_name"><a href="single.html">Baju muslimah pria, lengan panjang. Nyaman dipakai, ga transparan.</a></h6>
                                    <div class="product_price">Rp 150.000</div>
                                </div>
                            </div>
                            <div class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                        </div>

                        {/* <!-- Product 11 --> */}

                        <div class="product-item men">
                            <div class="product product_filter">
                                <div class="product_image">
                                    <img src={require('../assets/img/koko57.jpg')} alt="" />
                                </div>
                                <div class="favorite"></div>
                                <div class="product_info">
                                    <h6 class="product_name"><a href="single.html">Baju muslimah pria, trendy dan kekinian. Nyaman dipakai.</a></h6>
                                    <div class="product_price">Rp 165.000</div>
                                </div>
                            </div>
                            <div class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                        </div>

                        {/* <!-- Product 12 --> */}

                        <div class="product-item women">
                            <div class="product product_filter">
                                <div class="product_image">
                                    <img src={require('../assets/img/kaoskeren.png')} alt="" />
                                </div>
                                <div class="favorite"></div>
                                <div class="product_info">
                                    <h6 class="product_name"><a href="single.html">Baju kaos muslimah yang fashionable, trendy dan nyaman
                                            dipakai.</a></h6>
                                    <div class="product_price">Rp 210.000</div>
                                </div>
                            </div>
                            <div class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                        </div>

                        {/* <!-- Product 13 --> */}

                        <div class="product-item accessories">
                            <div class="product product_filter">
                                <div class="product_image">
                                    <img src={require('../assets/img/dompet.jpg')} alt="" />
                                </div>
                                <div class="favorite favorite_left"></div>
                                <div class="product_info">
                                    <h6 class="product_name"><a href="#single.html">Dompet pria elegan. Chick dan trendy. Tersedia pilihan warna.</a></h6>
                                    <div class="product_price">Rp 115.000</div>
                                </div>
                            </div>
                            <div class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                        </div>

                        {/* <!-- Product 14 --> */}

                        <div class="product-item men">
                            <div class="product product_filter">
                                <div class="product_image">
                                    <img src={require('../assets/img/celanapria.jpg')}  alt="" />
                                </div>
                                <div class="favorite"></div>
                                <div class="product_info">
                                    <h6 class="product_name"><a href="single.html">Celana panjang pria, trendy dan kekinian. Nyaman dipakai.</a></h6>
                                    <div class="product_price">Rp 185.000</div>
                                </div>
                            </div>
                            <div class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                        </div>
                        {/* <!-- Product 15 --> */}

                        <div class="product-item accessories">
                            <div class="product product_filter">
                                <div class="product_image">
                                    <img src={require('../assets/img/taspria.jpg')} alt="" />
                                </div>
                                <div class="favorite favorite_left"></div>
                                <div class="product_info">
                                    <h6 class="product_name"><a href="#single.html">Tas pria elegan, unik, berbahan kulit. Modern dan trendy.</a></h6>
                                    <div class="product_price">Rp 115.000</div>
                                </div>
                            </div>
                            <div class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

            );
    }
}
export default NewArrivals;
