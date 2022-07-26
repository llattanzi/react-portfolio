import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import { Tab } from '@mui/material';
import { Link } from "react-router-dom";

function Nav(props) {
    const tabs = ['About', 'Portfolio', 'Resume', 'Contact'];

    const [currentTab, handleTabChange] = useState(0);

    // const renderPage = () => {
    //     switch(currentTab) {
    //       case "About":
    //         return <About></About>
    //       case "Portfolio":
    //         return <Project></Project>
    //       case "Resume":
    //         return <Resume></Resume>
    //       case "Contact":
    //         return <ContactForm></ContactForm>
    //     }
    // };

    return (
        <div className="row">
            <div className="col s12">
                {/* <Tabs 
                value={currentTab}
                onChange={handleTabChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
                className='nav'
                > */}
                    {tabs.map((tab, i) => (
                        // <a
                        // href={'#' + tab.toLowerCase()}
                        // onClick={() => {props.handlePageChange(tab); setValue(tab)}}>
                        
                        // <Tab value={i} label={tab} key={tab}>
                                                    <Link to={`/${tab}`} key={tab}>
                            {/* <a
                                href={'#' + tab.toLowerCase()}
                                className={
                                props.currentPage === tab ? 'nav-link active' : 'nav-link'
                                }
                            > */}
                                {tab}
                            {/* </a> */}
                            </Link>
                        // </Tab>
                        // {/* </a> */}
                    ))}
                {/* </Tabs> */}
            </div>
        </div>
    );
}

export default Nav;