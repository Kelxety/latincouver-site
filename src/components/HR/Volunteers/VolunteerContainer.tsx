import React, { useEffect, useState } from 'react'
import VolunteerView from "./VolunteerView"

import { useLoaderData, useNavigate } from 'react-router-dom';
import api from '../../../constants/Interceptor/Interceptor'
import { HR_VOLUNTEERS, HR_EMPLOYEES } from "../../../constants/api/hr"

import { UsersDataType } from "../../../constants/interface/it"

import { USERS } from "../../../constants/api/users"


interface VolunteerDataType {
    key: string;
    fname: string;
    lname: string;
    gender: string;
    application: string;
    supervisor: any;
    country: string;
}


function VolunteerContainer() {
    const [volunteers, setVolunteers] = useState<VolunteerDataType[]>([]);
    const navigate = useNavigate();

    const [users, setUsers] = useState<UsersDataType[]>([]);
    const [loading, setIsLoading] = useState<boolean>(true);

    const abortController = new AbortController();

    console.log("outside");

    useEffect(()=> {
        const get_data_api  = async () => {
            function getusers() { return api.get(USERS); }

            setIsLoading(true);
    
            try {
    
                const [
                  users_res_data
                ] = await Promise.all(
                  [getusers()]
                );
    
                const users_data: any = users_res_data?.data?.results || [];
      
                if(users_data !== null && users_data.length !== 0){
                  setUsers(users_data.map((row: any) => {
                    return {
                      key: row?.id,
                      first_name: row?.first_name,
                      last_name: row?.last_name,
                    }
                  }))
                }
      
              } catch (error) {
                console.log(`error: ${error}`);
              } finally {
                setIsLoading(false);
              }
        }

        get_data_api();

        return () =>  { abortController.abort(); }
    }, [])
    
    return <VolunteerView volunteers={volunteers} />
}

export default VolunteerContainer