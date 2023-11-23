import React, { useEffect, useMemo, useState } from 'react'
import ProfileView from "./ProfileView"
import { useParams } from 'react-router-dom';

import { COUNTRIES_API, HR_EMPLOYEES, HR_EMPLOYEE_DETAIL, HR_VOLUNTEERING_APPLICATION, HR_VOLUNTEERS } from "../../../../constants/api/hr"

import api from "../../../../constants/Interceptor/Interceptor"
import { useMutation, useQuery } from 'react-query';
import { notification } from 'antd';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

function VolunteerProfileContainer() {

    const params: any = useParams();
    const volunteerProfileID: number = params.volunteerId;

    const [apiAlert, contextHolderAlert] = notification.useNotification();

    const [profile, setProfile] = useState<any>();

    const {isLoading: profile_loading, error: profile_err, data: profile_data} = useQuery({
      queryFn: () => api.get(`${HR_VOLUNTEERS}${volunteerProfileID}/`).then(res => res.data),
      queryKey: ['profiles'],
      cacheTime: 0,
    })

    const openNotificationWithIcon = (type: NotificationType, msg: string, description: string) => {
      apiAlert[type]({
        message: msg,
        description: description,
      });
    };

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


    const {isLoading: countriesLoading, error: countriesError, data: countriesData} = useQuery({
      queryFn: () => api.get(COUNTRIES_API),
      queryKey: ['countries'],
      cacheTime: 0,
    })

    const countriesAPI: any[] = useMemo(()=> {
      const countriesArray: any[] = [];

      for (const key in countriesData?.data) {
          if (countriesData?.data.hasOwnProperty(key)) {
              const country = {
                  value: key,
                  label: countriesData?.data[key]
              };
              countriesArray.push(country);
          }
      }

      return countriesArray;

    }, [countriesData])


    const {isLoading: volunteeringApplication, error: volunteeringApplicationErr, data: volunteeringAppData} = useQuery({
      queryFn: () => api.get(HR_VOLUNTEERING_APPLICATION),
      queryKey: ['volunteeringApplicationKey'],
      cacheTime: 0,
    })

    const volunteering_application: any[] = useMemo(()=> {

      const volunteering_application_data: any[] = [];
      volunteeringAppData?.data?.results.map((data: any)=> {
        volunteering_application_data.push({
          "value": data?.pk,
          "label": `${data?.first_name} ${data?.last_name}`
        })

      })

      return volunteering_application_data;
    }, [volunteeringAppData?.data?.results]);

    const { isLoading: employee_data_loading, error: employee_data_err, data: employee_res } = useQuery({
      queryFn: () => api.get(HR_EMPLOYEES).then(res => res.data),
      queryKey: ['employeeData'],
      cacheTime: 3,
    })

    const supervisor_data: any[] = useMemo(() => {

      const res_data: any[] = [];

      employee_res?.results?.map((data: any) => {

        res_data.push({
          "value": data?.pk,
          "label": `${data?.user_info?.first_name} ${data?.user_info?.last_name}`
        })
      })

      return res_data;
    }, [employee_res])


    const handleChangeCountry = (value: string) => {
      setProfile((prevState: any) => ({
        ...prevState,
        country: value,
      }));
    };

    const handleChangeApplication = (value: number) => {
      setProfile((prevState: any) => ({
        ...prevState,
        application: value,
      }));
    };

    const handleChangeSupervisor = (value: number) => {
      setProfile((prevState: any) => ({
        ...prevState,
        supervisor: value,
      }));
    };

    console.log("profile");
    console.log(profile)

    const { mutateAsync: updateVolunteer } = useMutation({
      mutationFn: () =>
        api.put(`${HR_VOLUNTEERS}${profile?.pk}/`, profile).then((res) => res.data),

        onSuccess: () => {
          const message: string = 'Volunteer Record Updated'
          const description: string = 'This Volunteer profile has been updated successfully!'
          openNotificationWithIcon('success', message, description);
        },
        onError: (error, variables, context) => {
          const message: string = 'Volunteer Record Update Failed'
          const description: string = "There's something wrong when updating this record. try again."
          openNotificationWithIcon('error', message, description);
        },
    });

    const SubmitUpdateForm = () => {
      delete profile.user_info;
      delete profile.application_name;
      delete profile.supervisor_name;
      delete profile.photo;
      updateVolunteer();
    }

    return(
      <ProfileView
        profile={profile}
        countriesAPI={countriesAPI}
        handleChangeCountry={handleChangeCountry}
        volunteering_application={volunteering_application} handleChangeApplication={handleChangeApplication}
        supervisor_data={supervisor_data} handleChangeSupervisor={handleChangeSupervisor}
        SubmitUpdateForm={SubmitUpdateForm} contextHolderAlert={contextHolderAlert}
      />
    )
}

export default VolunteerProfileContainer