import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import { Tab } from '@mui/material';
import { useNavigate, useLocation } from "react-router-dom";
import { useAsyncState } from '../../utils/helpers';

function Nav() {
    const tabs = ['About', 'Portfolio', 'Resume', 'Contact'];
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.pathname);

    let initialState;

    switch (location.pathname) {
        case "/Portfolio":
            initialState = 1;
            break
        case "/Resume":
            initialState = 2;
            break
        case "/Contact":
            initialState = 3;
            break
        default:
            initialState = 0;
            break
    }
    console.log(initialState);

    const [currentTab, handleTabChange] = useAsyncState(initialState);

    const renderPage = async (event, value) => {
        const currentState = await handleTabChange(value);
        console.log(currentState);
        console.log(tabs[currentState]);
        navigate(`/${tabs[currentState]}`);
    };

    return (
        <div className='nav-tabs'>
            <Tabs 
            value={currentTab}
            onChange={renderPage}
            textColor="inherit"
            TabIndicatorProps={{
                style: {
                  backgroundColor: "#ffffff"
                }
            }}
            >
                {tabs.map((tab, i) => (
                    <Tab 
                    value={i} 
                    label={tab} 
                    key={tab} 
                    className='tab'
                    />
                 ))}
            </Tabs>
        </div>
    );
}

export default Nav;