import React, { useEffect, useState } from 'react'
import HomePage from "./HomePage"
import { useNavigate } from 'react-router-dom';


function HomePageContainer() {

    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('access') === null){                   
            navigate('/auth/login');
        }
    }, []);

    return(
        <HomePage
        />
    )
}

export default HomePageContainer