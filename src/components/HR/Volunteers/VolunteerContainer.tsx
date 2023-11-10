import React, { useEffect, useState } from 'react'
import VolunteerView from "./VolunteerView"

import { useLoaderData, useNavigate } from 'react-router-dom';
import api from '../../../constants/Interceptor/Interceptor'
import { HR_VOLUNTEERS } from "../../../constants/api/hr"
import { AUTH_LOGIN } from "../../../constants/api/auth"


interface VolunteerDataType {
    key: string;
    fname: string;
    lname: string;
    gender: string;
    supervisor: any;
    country: string;
}

export async function loader() {
    const navigate = useNavigate();

    try {
        const response = await api.get(HR_VOLUNTEERS);
        const data_results: any = response.data.results || [];

        return { data_results };
        // if(data_results !== null && data_results.length !== 0){
        //   setVolunteers(data_results.map((row: any) => {
        //     return {
        //       key: row?.pk,
        //       fname: row?.user?.first_name,
        //       lname: row?.user?.last_name,
        //       gender: row?.gender === 1 ? "Male" : row?.gender === 2 ? "Female" : "Others",
        //       department: ["Marketing", "Finance"],
        //     }
        //   }))
        // }
    } catch (error) { navigate(AUTH_LOGIN); }
}


function VolunteerContainer() {
    const [volunteers, setVolunteers] = useState<VolunteerDataType[]>([]);
    const navigate = useNavigate();

    // useEffect(()=> {
    //     const { data_results  } = useLoaderData();

    //     if(data_results !== null && data_results.length !== 0){
    //         setVolunteers(data_results.map((row: any) => {
    //           return {
    //             key: row?.pk,
    //             fname: row?.user?.first_name,
    //             lname: row?.user?.last_name,
    //             gender: row?.gender === 1 ? "Male" : row?.gender === 2 ? "Female" : "Others",
    //             department: ["Marketing", "Finance"],
    //           }
    //         }))
    //     }
    // }, [])
    
    return <VolunteerView volunteers={volunteers} />
}

export default VolunteerContainer