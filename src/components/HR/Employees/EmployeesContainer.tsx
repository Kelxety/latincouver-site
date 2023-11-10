import React, { useEffect, useState } from 'react'
import EmployeeView from "./EmployeeView"

import { AUTH_LOGIN } from "../../../constants/api/auth"
import { HR_EMPLOYEES } from "../../../constants/api/hr"
import api from '../../../constants/Interceptor/Interceptor'
import { useLoaderData, useNavigate } from 'react-router-dom'


interface EmployeeDataType {
  key: string;
  fname: string;
  lname: string;
  gender: string;
  department: string[];
}

function EmployeesContainer() {

    const [employees, setEmployees] = useState<EmployeeDataType[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
      const fetchProfile = async () => {
        try {
          const response = await api.get(HR_EMPLOYEES);
          const data_results: any = response.data.results || [];
          if(data_results !== null && data_results.length !== 0){
            setEmployees(data_results.map((row: any) => {
              return {
                key: row?.pk,
                fname: row?.user?.first_name,
                lname: row?.user?.last_name,
                gender: row?.gender === 1 ? "Male" : row?.gender === 2 ? "Female" : "Others",
                department: ["Marketing", "Finance"],
              }
            }))
          }
        } catch (error) { navigate(AUTH_LOGIN); }
      };
  
      fetchProfile();
    }, []);

    return <EmployeeView employees={employees} />
}

export default EmployeesContainer