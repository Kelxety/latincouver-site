import React, { useEffect, useState } from 'react'
import VolunteerView from "./VolunteerView"

import { useLoaderData, useNavigate } from 'react-router-dom';
import api from '../../../constants/Interceptor/Interceptor'
import { HR_VOLUNTEERS, HR_EMPLOYEES } from "../../../constants/api/hr"
import { AUTH_LOGIN } from "../../../constants/api/auth"


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
    
    return <VolunteerView volunteers={volunteers} />
}

export default VolunteerContainer