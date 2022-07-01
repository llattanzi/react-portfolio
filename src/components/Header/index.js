import React from 'react';
import { Nav } from './components/Nav';

function Header({currentPage, handlePageChange}) {


    return (
        <header>
            <section class="hero">
                <h1>
                    <a href="/">Lauren Lattanzi</a>
                </h1>
                <Nav currentPage={currentPage} handlePageChange={handlePageChange}>
                </Nav>
            </section>
        </header>
    );
}
  
  export default Header;