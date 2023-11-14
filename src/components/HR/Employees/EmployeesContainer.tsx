import React, { useMemo, useState } from 'react'
import EmployeeView from "./EmployeeView"


import { HR_DEPARTMENTS, HR_EMPLOYEES_RECORDS, JOB_TITLES } from "../../../constants/api/hr"

import api from '../../../constants/Interceptor/Interceptor'

import { ExclamationCircleOutlined } from '@ant-design/icons'
import { Modal } from 'antd'
import { useQuery } from 'react-query'
import { USERS } from '../../../constants/api/users'

function EmployeesContainer() {

    const [open, setOpen] = useState<boolean>(false);
    const [confirmLoading, setConfirmLoading] = useState<boolean>(false);

    const [modal, contextHolder] = Modal.useModal();

    // const { isLoading: employee_data_loading, error: employee_data_err, data: employee_res} = useQuery('emploteeData', () => 
    // api.get(HR_EMPLOYEES_RECORDS).then(res => res.data)
    // )

    const { isLoading: employee_data_loading, error: employee_data_err, data: employee_res } = useQuery({
      queryFn: () => api.get(HR_EMPLOYEES_RECORDS).then(res => res.data),
      queryKey: ['employeeData'],
      cacheTime: 3,
    })

    const employee_data:any = useMemo(() => {

      return employee_res?.results.map((data: any) => {
        return {
          key: data?.pk,
          user: data?.user,
          department: data?.department,
          title: data?.title,
          bio: data?.bio,
          notes: data?.notes,
          start_date: data?.start_date,
          end_date: data?.end_date,
          is_manager: data?.is_manager,
          medical_condition: data?.medical_condition,
          alergies: data?.allergies,
          gender: data?.gender === 1 ? "Male" : data?.gender === 2 ? "Female" : "Others",
          photo: data?.photo,
          contract: data?.contract,
          salary: data?.salary,
          work_type: data?.work_type === 1 ? "Full Time" : "Part Time",
          payment_method: data?.pay_method === 1 ? "Salary" : "Hourly",
        }
      })
    }, [employee_res]);

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

    const {isLoading: job_title_loading, data: job_title_res_data} = useQuery('jobtitleData', () =>
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

    const handleCancel = () => {
      console.log("Clicked cancel button");
      setOpen(false);
    };

    const showModal = () => { setOpen(true); }
    const confirmDelete = () => {
      modal.confirm({
        title: 'Confirm',
        icon: <ExclamationCircleOutlined />,
        content: 'Delete this Employee Record?',
        okText: 'Delete',
        cancelText: 'Cancel',
        okButtonProps: {style: { backgroundColor: "#f83e37", color: "white" }}
      });
    };

    const handleChangeDepartments = (value: string[]) => {
      console.log(`selected ${value}`);
    };

    const onChangeFormJobTitle = (value: string) => {
      console.log(`selected ${value}`);
    };

    const handleChangeWorkType = (value: string) => {
      console.log(`selected ${value}`);
    };

    return(
      <EmployeeView
        employee_data={employee_data} open={open} confirmLoading={confirmLoading} handleCancel={handleCancel}
        handleOk={handleOk} showModal={showModal} employee_data_loading={employee_data_loading}
        confirmDelete={confirmDelete} contextHolder={contextHolder} departments_api_data={departments_api_data}
        handleChangeDepartments={handleChangeDepartments} job_titles={job_titles} onChangeFormJobTitle={onChangeFormJobTitle}
        handleChangeWorkType={handleChangeWorkType} users_api_data={users_api_data}
      />
    )
  };


export default EmployeesContainer