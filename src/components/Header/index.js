import React from 'react';
import { Nav } from './components/Nav';

function Header({currentPage, handlePageChange}) {


    return (
        <header>
            <h1>
                <a href="/">Lauren Lattanzi</a>
            </h1>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange}>
            </Nav>
            <section class="hero"></section>
        </header>
    );
}
  
  export default Header;