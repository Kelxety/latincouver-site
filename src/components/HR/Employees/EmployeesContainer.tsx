import React, { useEffect, useMemo, useState } from 'react'
import EmployeeView from "./EmployeeView"


import { HR_DEPARTMENTS, HR_EMPLOYEES, JOB_TITLES } from "../../../constants/api/hr"

import api from '../../../constants/Interceptor/Interceptor'

import { ExclamationCircleOutlined } from '@ant-design/icons'
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { Modal } from 'antd'
import { useQuery } from 'react-query'
import { USERS } from '../../../constants/api/users'


function EmployeesContainer() {

    const [open, setOpen] = useState<boolean>(false);
    const [confirmLoading, setConfirmLoading] = useState<boolean>(false);

    const [modal, contextHolder] = Modal.useModal();

    const [employeeSubmit, setEmployeeSubmit] = useState<any[]>([]);

    const { isLoading: employee_data_loading, error: employee_data_err, data: employee_res } = useQuery({
      queryFn: () => api.get(HR_EMPLOYEES).then(res => res.data),
      queryKey: ['employeeData'],
      cacheTime: 3,
    })

    // useEffect(()=> {
    //   employee_res?.results?.map((data: any) => {
    //     return {
    //       "key": data?.pk,
    //       "user": data?.user,
    //       "username": data?.user_info?.username,
    //       "first_name": data?.user_info?.first_name,
    //       "last_name": data?.user_info?.last_name,
    //       "department": data?.department,
    //       "department_names": data?.department_names,
    //       "title": data?.title,
    //       "role": data?.role,
    //       "work_type": data?.work_type === 1 ? "Full Time" : "Part Time",
    //       "pay_method": data?.pay_method,
    //       "is_manager": data?.is_manager,
    //       "start_date": data?.start_date,
    //       "end_date": data?.end_date,
    //       "photo": data?.photo
    //     }
    //   })
    // }, [employee_res])

    const employee_res_data: any[] = useMemo(() => {

      const res_data: any[] = [];

      employee_res?.results?.map((data: any) => {

        res_data.push({
          "key": data?.pk,
          "user": data?.user,
          "username": data?.user_info?.username,
          "first_name": data?.user_info?.first_name,
          "last_name": data?.user_info?.last_name,
          "department": data?.department,
          "department_names": data?.department_names,
          "title": data?.title,
          "role": data?.role,
          "work_type": data?.work_type === 1 ? "Full Time" : "Part Time",
          "pay_method": data?.pay_method,
          "is_manager": data?.is_manager,
          "start_date": data?.start_date,
          "end_date": data?.end_date,
          "photo": data?.photo
        })
      })

      return res_data;
    }, [employee_res])

    const {isLoading: loadingDepartment, data: departmentData, error: departmentError} = useQuery('departmentData', () =>
      api.get(`${HR_DEPARTMENTS}`).then(res => res.data)
    )

    const departments_api_data = useMemo(()=> {
      return departmentData?.results?.map((data: any) => {
        return {
          value: data?.id,
          label: data?.name.toUpperCase(),
        }
      })
    }, [departmentData])

    const {data: job_title_res_data} = useQuery('jobtitleData', () =>
      api.get(`${JOB_TITLES}`).then(res => res.data)
    );

    const job_titles = useMemo(()=> {
      return job_title_res_data?.results.map((data: any) => {
        return {
          value: data?.id,
          label: data?.name,
        }
      })
    }, [job_title_res_data])

    const { isLoading: users_loading, data: users_data } = useQuery('usersData', () =>
      api.get(`${USERS}`).then(res => res.data)
    )
  

    const users_api_data = useMemo(()=> {
      return users_data?.results.map((data: any) => {
        return {
          value: data?.id,
          label: `${data?.first_name} ${data?.last_name}`
        }
      })
    }, [users_data])

    const handleOk = () => {
      setConfirmLoading(true);
      setTimeout(() => {
        setOpen(false);
        setConfirmLoading(false);
      }, 1000);
  
    };

    const handleCancel = () => { setOpen(false); setEmployeeSubmit([]); };

    const showModal = () => { setOpen(true); }
    const confirmDelete = (pk: number, fname: string, lname: string) => {
      modal.confirm({
        title: 'Are you sure you want to delete this employee?',
        icon: <ExclamationCircleOutlined />,
        content: `Delete ${fname} ${lname} record?`,
        okText: 'Delete',
        cancelText: 'Cancel',
        okButtonProps: {style: { backgroundColor: "#f83e37", color: "white" }}
      });
    };

    const handleChangeDepartments = (value: string[]) => {
      setEmployeeSubmit((prevState: any) => ({
        ...prevState,
        department: value,
      }));
    };

    const onChangeFormJobTitle = (value: string) => {
      setEmployeeSubmit((prevState: any) => ({
        ...prevState,
        job_title: value,
      }));
    };

    const handleChangeWorkType = (value: string) => {
      setEmployeeSubmit((prevState: any) => ({
        ...prevState,
        work_type: value,
      }));
    };


    const onChangeStartDate = (date: any) => {
      setEmployeeSubmit((prevState: any) => ({
        ...prevState,
        start_date: date,
      }));
    }

    const onChangeEndDate = (date: any) => {
      setEmployeeSubmit((prevState: any) => ({
        ...prevState,
        end_date: date,
      }));
    }

    const onChangeIsManager = (e: CheckboxChangeEvent) => {
      console.log(`${e.target.checked}`);

      setEmployeeSubmit((prevState: any) => ({
        ...prevState,
        is_manager: e.target.checked,
      }));
    };

    const handleChangeBio = (value: string) => {
      setEmployeeSubmit((prevState: any) => ({
        ...prevState,
        bio: value,
      }));
    };

    const handleChangeNotes = (value: string) => {
      setEmployeeSubmit((prevState: any) => ({
        ...prevState,
        notes: value,
      }));
    };

    const handleChangeContract = (value: string) => {
      setEmployeeSubmit((prevState: any) => ({
        ...prevState,
        contract: value,
      }));
    };

    const handleChangeGender = (value: string) => {
      setEmployeeSubmit((prevState: any) => ({
        ...prevState,
        gender: value,
      }));
    };

    const onChangeSalary = (value: number) => {
      setEmployeeSubmit((prevState: any) => ({
        ...prevState,
        salary: value,
      }));
    };

    const handleChangeUser = (value: number) => {
      setEmployeeSubmit((prevState: any) => ({
        ...prevState,
        user: value,
      }));
    };

    const onChangeAllergies = (value: string) => {
      setEmployeeSubmit((prevState: any) => ({
        ...prevState,
        allergies: value,
      }));
    };

    const onChangeMedicalCondition = (value: string) => {
      setEmployeeSubmit((prevState: any) => ({
        ...prevState,
        medical_condition: value,
      }));
    };

    return(
      <EmployeeView
        employee_res_data={employee_res_data} open={open} confirmLoading={confirmLoading} handleCancel={handleCancel}
        handleOk={handleOk} showModal={showModal} employee_data_loading={employee_data_loading}
        confirmDelete={confirmDelete} contextHolder={contextHolder} departments_api_data={departments_api_data}
        handleChangeDepartments={handleChangeDepartments} job_titles={job_titles} onChangeFormJobTitle={onChangeFormJobTitle}
        handleChangeWorkType={handleChangeWorkType} users_api_data={users_api_data} onChangeStartDate={onChangeStartDate} onChangeEndDate={onChangeEndDate}
        onChangeIsManager={onChangeIsManager} handleChangeBio={handleChangeBio} handleChangeNotes={handleChangeNotes} handleChangeContract={handleChangeContract}
        handleChangeGender={handleChangeGender} onChangeSalary={onChangeSalary} handleChangeUser={handleChangeUser} onChangeAllergies={onChangeAllergies}
        onChangeMedicalCondition={onChangeMedicalCondition}
      />
    )
  };


export default EmployeesContainer