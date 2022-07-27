import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import { Tab } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useAsyncState } from '../../utils/helpers';

function Nav() {
    const tabs = ['About', 'Portfolio', 'Resume', 'Contact'];
    const navigate = useNavigate();

    const [currentTab, handleTabChange] = useAsyncState(0);

    const renderPage = async (event, value) => {
        const currentState = await handleTabChange(value);
        console.log(currentState);
        console.log(tabs[currentState]);
        navigate(`/${tabs[currentState]}`);
    };

    // useEffect(() => {
    //     console.log(currentTab);
    //     navigate(`/${tabs[currentTab]}`);
    // }, [currentTab, navigate])

    return (
        <>
            <Tabs 
            value={currentTab}
            onChange={renderPage}
            textColor="secondary"
            indicatorColor="secondary"
            >
                {tabs.map((tab, i) => (
                    <Tab value={i} label={tab} key={tab} />
                 ))}
            </Tabs>
        </>
    );
}

export default Nav;