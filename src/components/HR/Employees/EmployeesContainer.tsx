import React, { useEffect, useMemo, useState } from 'react'
import EmployeeView from "./EmployeeView"

import { AUTH_LOGIN } from "../../../constants/api/auth"
import { HR_EMPLOYEES, JOB_TITLES, HR_DEPARTMENTS } from "../../../constants/api/hr"
import { USERS } from "../../../constants/api/users"

import api from '../../../constants/Interceptor/Interceptor'
import { useLoaderData, useNavigate } from 'react-router-dom'

import { EmployeeDataType, JobTitleDataType, DepartmentDataType, UsersDataType } from "../../../constants/interface/it"

function EmployeesContainer() {

    const [employees, setEmployees] = useState<EmployeeDataType[]>([]);
    const [jobtitles, setJobtitles] = useState<JobTitleDataType[]>([]);
    const [departments, setDepartments] = useState<DepartmentDataType[]>([]);
    const [users, setUsers] = useState<UsersDataType[]>([]);

    const [loading, setIsLoading] = useState<boolean>(true);

    const [open, setOpen] = useState<boolean>(false);
    const [confirmLoading, setConfirmLoading] = useState<boolean>(false);

    const navigate = useNavigate();

    const abortController = new AbortController();

    useEffect(() => {

      const get_data_api = async () => {

        function getEmployeeRecords() { return api.get(HR_EMPLOYEES); }
        
        function getJobTitles() { return api.get(JOB_TITLES); }

        function getDepartments() { return api.get(HR_DEPARTMENTS); }

        function getusers() { return api.get(USERS); }

        setIsLoading(true);
  
        try {

          const [
            employee_res_data, job_titles_res_data, department_res_data, users_res_data
          ] = await Promise.all(
            [getEmployeeRecords(), getJobTitles(), getDepartments(), getusers()]
          );

          const employee_data: any = employee_res_data?.data?.results || [];
          const job_title_data: any = job_titles_res_data?.data?.results || [];
          const department_data: any = department_res_data?.data?.results || [];
          const users_data: any = users_res_data?.data?.results || [];

          if(employee_data !== null && employee_data.length !== 0){
            setEmployees(employee_data.map((row: any) => {
              return {
                key: row?.pk,
                fname: row?.user?.first_name,
                lname: row?.user?.last_name,
                gender: row?.gender === 1 ? "Male" : row?.gender === 2 ? "Female" : "Others",
                department: row?.department,
              }
            }))
          }

          if(job_title_data !== null && job_title_data.length !== 0){
            setJobtitles(job_title_data.map((row: any) => {
              return {
                key: row?.id,
                name: row?.name,
                status: row?.status,
              }
            }))
          }

          if(department_data !== null && department_data.length !== 0){
            setDepartments(department_data.map((row: any) => {
              return {
                key: row?.id,
                name: row?.name,
              }
            }))
          }

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
    }, []);

    const handleOk = () => {
      setConfirmLoading(true);
      setTimeout(() => {
        setOpen(false);
        setConfirmLoading(false);
      }, 1000);
  
    };

    const handleCancel = () => {
      console.log("Clicked cancel button");
      setOpen(false);
    };

    const showModal = () => { setOpen(true); }
    // console.log("users");
    // console.table(users);
    return(
      <EmployeeView
        employees={employees} open={open} confirmLoading={confirmLoading} handleCancel={handleCancel}
        handleOk={handleOk} showModal={showModal} loading={loading} jobtitles={jobtitles} departments={departments}
        users={users}
      />
    )
  };


export default EmployeesContainer