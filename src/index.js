import React from "react";
import {render} from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import Main from "./components/main.jsx";
import App from "./components/app.jsx";
import Products from "./components/products.jsx";
import Testimonials from "./components/testimonials.jsx";
import About from "./components/about.jsx";
import Faq from "./components/faq.jsx";
import Awards from "./components/awards.jsx";
import Contact from "./components/contact.jsx";

var router = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Main}></IndexRoute>
            <Route path="/products" component={Products}></Route>
            <Route path="/testimonials" component={Testimonials}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/faq" component={Faq}></Route>
            <Route path="/awards" component={Awards}></Route>
            <Route path="/contact" component={Contact}></Route>
            
        </Route>
    </Router>
);

render(router, document.getElementById("app"));