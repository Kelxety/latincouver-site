import React, { useEffect, useMemo, useState } from 'react'
import ProfileView from "./ProfileView"
import { useParams } from 'react-router-dom';

import { HR_EMPLOYEE_DETAIL, JOB_TITLES, HR_DEPARTMENTS } from "../../../../constants/api/hr"

import api from "../../../../constants/Interceptor/Interceptor"
import { useQuery } from 'react-query';

import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import type { DatePickerProps } from 'antd';

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

function ProfileContainer() {

    const params: any = useParams();

    // var profile_department: any[] = [];
    // const [profile_department, setProfileDepartment] = useState<any[]>([]);

    const [employee_profile_data, setEmployeeProfileData] = useState<any>();

    const employeeID: number = params.employeeId;

    const {isLoading: profile_loading, error: profile_err, data: profile_data} = useQuery({
      queryFn: () => api.get(`${HR_EMPLOYEE_DETAIL}/${employeeID}`).then(res => res.data),
      queryKey: ['profiles'],
      cacheTime: 0,
    })

    let employee_profile = useMemo(()=> {
      return {
        pk: profile_data?.pk,
        user: profile_data?.user,
        department: profile_data?.department,
        title: profile_data?.title,
        bio: profile_data?.bio,
        notes: profile_data?.notes,
        contract: profile_data?.contract,
        gender: profile_data?.gender,
        work_type: profile_data?.work_type === 1 ? "FT" : "PT",
        pay_method: profile_data?.pay_method === 1 ? "SL" : "HR",
        salary: parseFloat(profile_data?.salary),
        is_manager: profile_data?.is_manager,
        start_date: profile_data?.start_date !== null ? dayjs(profile_data?.start_date, "YYYY-MM-DD") : "",
        end_date: profile_data?.end_date !== null ? dayjs(profile_data?.end_date, "YYYY-MM-DD") : "",
        // start_date: profile_data?.start_date !== null ? moment(profile_data?.start_date) : null,
        // end_date: profile_data?.end_date !== null ? moment(profile_data?.end_date) : null,
        // start_date: profile_data?.start_date ?? null,
        // end_date: profile_data?.end_date ?? null,
        medical_conditions: profile_data?.medical_conditions,
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
          label: data?.name,
        }
      })
    }, [job_title_res_data])

    // const {isLoading: loadingDepartment, data: departmentData, error: departmentError} = useQuery('departmentData', () =>
    //   api.get(`${HR_DEPARTMENTS}`).then(res => res.data)
    // )

    const {isLoading: loadingDepartment, data: department_res_data, error: departmentError} = useQuery({
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

    // for(let x = 0; x < employee_profile?.department?.length; x++){
    //   const department = departments_api_data?.find((obj: any) => obj.label === employee_profile?.department[x].toUpperCase());
    //   // profile_department.push(department);
    //   profile_department.push(department.value);
    // }

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
      console.log(`value`);
      console.log(value);

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
      console.log(`${e.target.checked}`);

      setEmployeeProfileData((prevState: any) => ({
        ...prevState,
        is_manager: e.target.checked,
      }));
    };

    const handleChangeNotes = (value: string) => {
      console.log(`value: ${value}`);

      console.log(`notes:: ${employee_profile_data?.notes}`);

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

    const onChangeStartDate: DatePickerProps['onChange'] = (date) => {
      setEmployeeProfileData((prevState: any) => ({
        ...prevState,
        start_date: date,
      }));
    };

    const onChangeEndDate: DatePickerProps['onChange'] = (date) => {
      setEmployeeProfileData((prevState: any) => ({
        ...prevState,
        end_date: date,
      }));
    };

    return (
      <
        ProfileView
        employee_profile={employee_profile} profile_loading={profile_loading} job_titles={job_titles}
        handleChangeDepartments={handleChangeDepartments} handleChangeWorkType={handleChangeWorkType}
        handleChangePaymentMethod={handleChangePaymentMethod} handleChangeJobTitle={handleChangeJobTitle}
        departments_api_data={departments_api_data} onChangeIsManager={onChangeIsManager} profile_department={profile_department}
        handleChangeNotes={handleChangeNotes} handleChangeBio={handleChangeBio} onChangeAllergies={onChangeAllergies}
        onChangeMedicalCondition={onChangeMedicalCondition} employee_profile_data={employee_profile_data} onChangeSalary={onChangeSalary}
        onChangeStartDate={onChangeStartDate} onChangeEndDate={onChangeEndDate}
      />
    )
}

export default ProfileContainer