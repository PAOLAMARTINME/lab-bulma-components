import React from 'react'

import 'bulma/css/bulma.css';
import './Navbar.css'

const Navbar = () => {

    return ( 

        <nav class="navbar" role="navigation" aria-label="main navigation">
                  
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img>
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>
        </div>
      </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          
            <button class="button is-rounded my-class is-danger is-small"> Sign up </button>
          
          
             <button class="button is-small is-success"> Log in </button>
          
        </div>
      </div>
    </div>
  
</nav>

    )
}

export default Navbar