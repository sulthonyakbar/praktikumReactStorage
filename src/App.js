import React from 'react';
import Utama from './utama';
import {Link} from "react-router-dom";

class App extends React.Component {
  render () {
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" name="beranda" href="/">Beranda</a>
          </li>
          <li class="nav-item">
          <a class="nav-link active" aria-current="page" name="tentangsaya" href="/tentangsaya">Tentang Saya</a>
          </li>
          <li class="nav-item">
          <a class="nav-link active" aria-current="page" name="karya" href="/karya">Karya</a>
          </li>
          <li class="nav-item">
          <a class="nav-link active" aria-current="page" name="kontak" href="/kontak">Kontak</a>
          </li>
          <li class="nav-item">
          <a class="nav-link active" aria-current="page" name="gallery" href="/gallery">Gallery</a>
          </li>
          <li class="nav-item">
          <a class="nav-link active" aria-current="page" name="cart" href="/cart">Cart</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <p><Utama /></p>
  </div>
  );
}
}

export default App;
