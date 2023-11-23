import React, { useEffect, useMemo, useState } from 'react'
import ProfileView from "./ProfileView"
import { useParams } from 'react-router-dom';

import { JOB_TITLES, HR_DEPARTMENTS, HR_EMPLOYEES } from "../../../../constants/api/hr"

import api from "../../../../constants/Interceptor/Interceptor"
import { useMutation, useQuery } from 'react-query';

import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { notification } from 'antd';


import { format } from 'date-fns';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

function ProfileContainer() {

    const params: any = useParams();

    const [employee_profile_data, setEmployeeProfileData] = useState<any>();
    const [apiAlert, contextHolder] = notification.useNotification();

    const employeeID: number = params.employeeId;

    const {isLoading: profile_loading, error: profile_err, data: profile_data} = useQuery({
      queryFn: () => api.get(`${HR_EMPLOYEES}${employeeID}/`).then(res => res.data),
      queryKey: ['profiles'],
      cacheTime: 0,
    })

    let employee_profile = useMemo(()=> {
      return {
        pk: profile_data?.pk,
        user: profile_data?.user,
        user_info: `${profile_data?.user_info?.first_name} ${profile_data?.user_info?.last_name}`,
        department: profile_data?.department_names,
        title: profile_data?.title,
        bio: profile_data?.bio,
        notes: profile_data?.notes,
        contract: profile_data?.contract,
        gender: profile_data?.gender,
        work_type: profile_data?.work_type,
        pay_method: profile_data?.pay_method,
        salary: parseFloat(profile_data?.salary),
        is_manager: profile_data?.is_manager,
        start_date: profile_data?.start_date ?? "",
        end_date: profile_data?.end_date ?? "",
        medical_condition: profile_data?.medical_condition,
        allergies: profile_data?.allergies,
        photo: profile_data?.photo

      };
    }, [profile_data]);

    useEffect(() => {
      setEmployeeProfileData(employee_profile);

      return () => { setEmployeeProfileData(null) }
    }, [employee_profile])

    const {isLoading: job_title_loading, data: job_title_res_data} = useQuery('jobtitleData', () =>
      api.get(`${JOB_TITLES}`).then(res => res.data)
    );


    const job_titles = useMemo(()=> {
      return job_title_res_data?.results.map((data: any) => {
        return {
          value: data?.id,
          label: data?.name.toLowerCase().replace(/\b\w/g, (s: string) => s.toUpperCase()),
        }
      })
    }, [job_title_res_data])

    const {data: department_res_data} = useQuery({
      queryFn: () => api.get(`${HR_DEPARTMENTS}`).then(res => res.data),
      queryKey: ['departmentData'],
      cacheTime: 0,
    })


    const departments_api_data = useMemo(()=> {
      return department_res_data?.results?.map((data: any) => {
        return {
          value: data?.id,
          label: data?.name.toUpperCase(),
        }
      })
    }, [department_res_data])

    const profile_department: any[] = useMemo(() => {

      const depart_list: any[] = [];

      for(let x = 0; x < employee_profile?.department?.length; x++){
        const department = departments_api_data?.find((obj: any) => obj.label === employee_profile?.department[x].toUpperCase());
        depart_list.push(department.value);
      }

      return depart_list;
    }, [employee_profile])

    useEffect(()=> {
      setEmployeeProfileData((prevState: any) => ({
        ...prevState,
        department: profile_department,
      }));
    }, [profile_department
    ])


    const handleChangeDepartments = (value: string[]) => {

      setEmployeeProfileData((prevState: any) => ({
        ...prevState,
        department: value,
      }));
    };

    const handleChangeWorkType = (value: string) => {
      setEmployeeProfileData((prevState: any) => ({
        ...prevState,
        work_type: value,
      }));
    };

    const handleChangePaymentMethod = (value: string) => {
      setEmployeeProfileData((prevState: any) => ({
        ...prevState,
        pay_method: value,
      }));
    }

    const handleChangeJobTitle= (value: number) => {
      setEmployeeProfileData((prevState: any) => ({
        ...prevState,
        title: value,
      }));
    }
    
    const onChangeIsManager = (e: CheckboxChangeEvent) => {
      setEmployeeProfileData((prevState: any) => ({
        ...prevState,
        is_manager: e.target.checked,
      }));
    };

    const handleChangeNotes = (value: string) => {

      setEmployeeProfileData((prevState: any) => ({
        ...prevState,
        notes: value,
      }));
    }

    const handleChangeBio = (value: string) => {
      setEmployeeProfileData((prevState: any) => ({
        ...prevState,
        bio: value,
      }));
    }

    const onChangeAllergies = (value: string) => {
      setEmployeeProfileData((prevState: any) => ({
        ...prevState,
        allergies: value,
      }));
    }

    const onChangeMedicalCondition = (value: string) => {
      setEmployeeProfileData((prevState: any) => ({
        ...prevState,
        medical_condition: value,
      }));
    }

    const onChangeSalary = (value: number) => {
      setEmployeeProfileData((prevState: any) => ({
        ...prevState,
        salary: value,
      }));
    };

    const onChangeStartDate = (date: any) => {
      const originalDate = new Date(date);
      const formattedDate = format(originalDate, 'yyyy-MM-dd');
      setEmployeeProfileData((prevState: any) => ({
        ...prevState,
        start_date: formattedDate,
      }));
    };

    const onChangeEndDate = (date: any) => {
      const originalDate = new Date(date);
      const formattedDate = format(originalDate, 'yyyy-MM-dd');
      setEmployeeProfileData((prevState: any) => ({
        ...prevState,
        end_date: formattedDate,
      }));
    };

    const onChangeContract = (value: string) => {
      setEmployeeProfileData((prevState: any) => ({
        ...prevState,
        contract: value,
      }));
    }

    const openNotificationWithIcon = (type: NotificationType, msg: string, description: string) => {
      apiAlert[type]({
        message: msg,
        description: description,
      });
    };

    const { mutateAsync: updateEmployee } = useMutation({
      mutationFn: () =>
        api.put(`${HR_EMPLOYEES}${employee_profile_data?.pk}/`, employee_profile_data).then((res) => res.data),

        onSuccess: () => {
          const message: string = 'Employee Record Updated'
          const description: string = 'This Employee profile has been updated successfully!'
          openNotificationWithIcon('success', message, description);
        },
        onError: (error, variables, context) => {
          const message: string = 'Employee Record Update Failed'
          const description: string = "There's something wrong when updating this record. try again."
          openNotificationWithIcon('error', message, description);
        },
    });

    const SubmitUpdateForm = () => {
      delete employee_profile_data.user_info;
      delete employee_profile_data.photo;
      updateEmployee();
    }


    return (
      <
        ProfileView
        employee_profile={employee_profile} profile_loading={profile_loading} job_titles={job_titles}
        handleChangeDepartments={handleChangeDepartments} handleChangeWorkType={handleChangeWorkType}
        handleChangePaymentMethod={handleChangePaymentMethod} handleChangeJobTitle={handleChangeJobTitle}
        departments_api_data={departments_api_data} onChangeIsManager={onChangeIsManager} profile_department={profile_department}
        handleChangeNotes={handleChangeNotes} handleChangeBio={handleChangeBio} onChangeAllergies={onChangeAllergies}
        onChangeMedicalCondition={onChangeMedicalCondition} employee_profile_data={employee_profile_data} onChangeSalary={onChangeSalary}
        onChangeStartDate={onChangeStartDate} onChangeEndDate={onChangeEndDate} onChangeContract={onChangeContract} SubmitUpdateForm={SubmitUpdateForm}
        contextHolder={contextHolder}
      />
    )
}

export default ProfileContainer