import React from 'react';
import Tabs from '@mui/material/Tabs';
import { Tab } from '@mui/material';

function Nav(props) {
    const tabs = ['About', 'Portfolio', 'Resume', 'Contact'];

    const [value, setValue] = React.useState(props.currentPage);

    return (
        <div className="row">
            <div className="col s12">
                <Tabs 
                value={value}
                onChange={value}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
                className='nav'
                >
                    {tabs.map(tab => (
                        <a
                        href={'#' + tab.toLowerCase()}
                        onClick={() => {props.handlePageChange(tab); setValue(tab)}}>
                        
                        <Tab value={tab} label={tab} key={tab}>
                            {/* <a
                                href={'#' + tab.toLowerCase()}
                                onClick={() => props.handlePageChange(tab)}
                                className={
                                props.currentPage === tab ? 'nav-link active' : 'nav-link'
                                }
                            >
                                {tab}
                            </a> */}
                        </Tab>
                        </a>
                    ))}
                </Tabs>
            </div>
        </div>
    );
}

export default Nav;