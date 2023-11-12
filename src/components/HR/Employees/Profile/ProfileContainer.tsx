import React, { useEffect, useState } from 'react'
import ProfileView from "./ProfileView"
import { useNavigate, useParams } from 'react-router-dom';

import { HR_EMPLOYEE_DETAIL } from "../../../../constants/api/hr"
import { AUTH_LOGIN } from "../../../../constants/api/auth"

import api from "../../../../constants/Interceptor/Interceptor"

function ProfileContainer() {

    const params: any = useParams();
    const employeeID: number = params.employeeId;

    const [profile, setProfile] = useState<any>();
    const navigate = useNavigate();

      useEffect(() => {
        const fetchProfile = async () => {
          try {
            const response: any = await api.get(`${HR_EMPLOYEE_DETAIL}/${employeeID}`);
            const employeedata: any = response || null;
            setProfile(employeedata?.data);
          } catch (error) { console.log("fetching error"); navigate(AUTH_LOGIN); }
        };
    
        fetchProfile();
      }, []);

      console.log(`profile`);
      console.log(profile);

    return <ProfileView profile={profile} />
}

export default ProfileContainer