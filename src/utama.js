import React from 'react'
import {Switch, Route} from 'react-router-dom';

import Beranda from './beranda';
import TentangSaya from './tentangsaya';
import Karya from './karya';
import Kontak from './kontak';
import Gallery from './pages/gallery';
import Cart from './pages/cart';


const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route exact path="/tentangsaya" component={TentangSaya} />
        <Route exact path="/karya" component={Karya} />
        <Route exact path="/kontak" component={Kontak} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/cart" component={Cart} />
    </Switch>
)

export default Utama;