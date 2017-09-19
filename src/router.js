import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './components/Landing/Landing'
import Shop from './components/Shop/Shop';
import Details from './components/Details/Details';
import Cart from './components/Cart/Cart';
import ThankYou from './components/ThankYou/ThankYou';


export default (
    <Switch>
        <Route component={Landing} exact path='/' />
        <Route component={Shop} path='/shop' />
        <Route component={Details} path='/details/:name' />
        <Route component={Cart} path='/cart' />
        <Route component={ThankYou} path='/thank-you' />
    </Switch>
)