import logo from "../logo.svg";
import "./App.css";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import Aside from "../components/Aside/Aside";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import FlatList from 'flatlist-react';
import axios from "axios";
import React, { useState, useEffect } from "react";
import "../styles/bootstrap4/bootstrap.min.css"
import "../plugins/OwlCarousel2-2.2.1/owl.carousel.css"
import "../plugins/OwlCarousel2-2.2.1/owl.theme.default.css"
import "../plugins/OwlCarousel2-2.2.1/animate.css"
import "../styles/main_styles.css"
import "../styles/responsive.css"

function Home() {
    const [data, setData] = useState()
    useEffect(() => {
        async function fetchData() {
            // You can await here
            //   console.log("test");
            try {
                const response = await axios.get("http://localhost:5000/getAllProduct");
                setData(response.data)
                console.log(response);

            } catch (error) {
                console.log(error);
            }


            // ...
        }
        fetchData();
    }, [])

    const renderPerson = (product, idx) => {
        return (
            <div class="product-grid" data-isotope='{ "itemSelector": ".product-item", "layoutMode": "fitRows" }'>
            <div class="product-item men">
                <div class="product discount product_filter">
                    <div class="product_image">
                        <img src={product.image} alt="" />
                    </div>
                    <div class="favorite favorite_left"></div>
                    <div class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
                    <div class="product_info">
                        <h6 class="product_name"><a href="single.html">{product.name}</a></h6>
                        <div class="product_price">${product.unitPrice*0.8}<span>${product.unitPrice}</span></div>
                    </div>
                </div>
                <div class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
            </div>
            </div>
        );
    }
    return (
        <>
            <div class="super_container">
                <header class="header trans_300">

                    <div class="top_nav">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="top_nav_left">free shipping on all u.s orders over $50</div>
                                </div>
                                <div class="col-md-6 text-right">
                                    <div class="top_nav_right">
                                        <ul class="top_nav_menu">





                                            <li class="account">
                                                <a href="#">
                                                    My Account
                                                    <i class="fa fa-angle-down"></i>
                                                </a>
                                                <ul class="account_selection">
                                                    <li><a href="/login"><i class="fa fa-sign-in" aria-hidden="true"></i>Sign In</a></li>
                                                    <li><a href="#"><i class="fa fa-user-plus" aria-hidden="true"></i>Register</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="main_nav_container">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12 text-right">
                                    <div class="logo_container">
                                        <a href="#">eStore</a>
                                    </div>
                                    <nav class="navbar">
                                        <ul class="navbar_menu">
                                            <li><a href="#">home</a></li>
                                            <li><a href="#">shop</a></li>
                                            <li><a href="#">promotion</a></li>
                                            <li><a href="#">pages</a></li>
                                            <li><a href="#">blog</a></li>
                                            <li><a href="contact.html">contact</a></li>
                                        </ul>
                                        <ul class="navbar_user">
                                            <li><a href="#"><i class="fa fa-search" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i class="fa fa-user" aria-hidden="true"></i></a></li>
                                            <li class="checkout">
                                                <a href="#">
                                                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                                    <span id="checkout_items" class="checkout_items">2</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <div class="hamburger_container">
                                            <i class="fa fa-bars" aria-hidden="true"></i>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>

                </header>
                {/* <div class="new_arrivals">
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
                                        <li class="grid_sorting_button button d-flex flex-column justify-content-center align-items-center active is-checked" data-filter="*">all</li>
                                        <li class="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".women">women's</li>
                                        <li class="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".accessories">accessories</li>
                                        <li class="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".men">men's</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                
                                    <FlatList
                                        list={data}
                                        renderItem={renderPerson}
                                        renderWhenEmpty={() => <div>List is empty!</div>}
                                       
                                        displayGrid
                                    />

                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    );
}

export default Home;