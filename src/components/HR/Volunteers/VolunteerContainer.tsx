import React, { useState } from 'react'
import VolunteerView from "./VolunteerView"
import { useNavigate } from 'react-router-dom';


interface VolunteerDataType {
    key: string;
    fname: string;
    lname: string;
    gender: string;
    supervisor: any;
    country: string;
}

function VolunteerContainer() {
    const [volunteers, setVolunteers] = useState<VolunteerDataType[]>([]);
    const navigate = useNavigate();
    
    return <VolunteerView volunteers={volunteers} />
}

export default VolunteerContainer