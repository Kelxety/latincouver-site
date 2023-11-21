import React, { useEffect, useMemo, useState } from 'react'
import ProfileView from "./ProfileView"
import { useNavigate, useParams } from 'react-router-dom';

import { HR_EMPLOYEE_DETAIL, HR_VOLUNTEERS } from "../../../../constants/api/hr"
import { AUTH_LOGIN } from "../../../../constants/api/auth"

import api from "../../../../constants/Interceptor/Interceptor"
import { useQuery } from 'react-query';

function VolunteerProfileContainer() {

    const params: any = useParams();
    const volunteerProfileID: number = params.volunteerId;

    const [profile, setProfile] = useState<any>();
    const navigate = useNavigate();

    const {isLoading: profile_loading, error: profile_err, data: profile_data} = useQuery({
      queryFn: () => api.get(`${HR_VOLUNTEERS}${volunteerProfileID}/`).then(res => res.data),
      queryKey: ['profiles'],
      cacheTime: 0,
    })

    const volunteer_profile_data = useMemo(()=> {
      return {
        "pk": profile_data?.pk,
        "user": profile_data?.user,
        "user_info": `${profile_data?.user_info?.first_name} ${profile_data?.user_info?.last_name}`,
        "gender": profile_data?.gender,
        "application": profile_data?.application,
        "application_name": `${profile_data?.application_name?.first_name} ${profile_data?.application_name?.last_name}`,
        "supervisor": profile_data?.supervisor,
        "supervisor_name": profile_data?.supervisor_name,
        "country": profile_data?.country,
        "photo": profile_data?.photo
      }
    }, [profile_data])

    useEffect(()=> {
      setProfile(volunteer_profile_data);

      return () => {
        setProfile([]);
      }
    }, [volunteer_profile_data]);

    return <ProfileView profile={profile} />
}

export default VolunteerProfileContainer