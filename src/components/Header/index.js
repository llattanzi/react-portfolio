import React from 'react';
import Nav from '../Nav';

function Header({currentPage, handlePageChange}) {


    return (
        <header>
                <Nav currentPage={currentPage} handlePageChange={handlePageChange}>
                </Nav>
            <section class="hero">
                <h1>
                    <a href="/">Lauren Lattanzi</a>
                </h1>
            </section>
        </header>
    );
}
  
  export default Header;