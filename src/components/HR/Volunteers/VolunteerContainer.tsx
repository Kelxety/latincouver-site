import React, { useEffect, useMemo, useState } from 'react'
import VolunteerView from "./VolunteerView"

import api from '../../../constants/Interceptor/Interceptor'
import { HR_VOLUNTEERS, HR_EMPLOYEES, HR_VOLUNTEERING_APPLICATION, COUNTRIES_API } from "../../../constants/api/hr"

import { USERS } from "../../../constants/api/users"
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Modal, notification } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons'

type NotificationType = 'success' | 'info' | 'warning' | 'error';

function VolunteerContainer() {
    const [volunteers, setVolunteers] = useState<any[]>([]);
    const [addVounteer, setAddVolunteer] = useState<any[]>([]);
    const [open, setOpen] = useState<boolean>(false);
    const [confirmLoading, setConfirmLoading] = useState<boolean>(false);
    const [apiAlert, contextHolderAlert] = notification.useNotification();

    const [modal, contextHolder] = Modal.useModal();

    const queryClient = useQueryClient();

    const { isLoading: volunteers_loading, error: volunteer_err, data: volunteer_res } = useQuery({
      queryFn: () => api.get(HR_VOLUNTEERS).then(res => res.data),
      queryKey: ['volunteerData'],
      cacheTime: 3,
    })

    useEffect(()=> {
      setVolunteers(volunteer_res?.results?.map((data: any) => {
        return {
          "key": data?.pk,
          "user": data?.user,
          "first_name": data?.user_info?.first_name,
          "last_name": data?.user_info?.last_name,
          "application": data?.application,
          "application_name": `${data?.application_name?.first_name} ${data?.application_name?.last_name}`,
          "supervisor": data?.supervisor,
          "supervisor_name": data?.supervisor_name,
          "country": data?.country,
          "latitude": data?.latitude,
          "longitude" : data?.longitude,
        }
      }))
    }, [volunteer_res]);

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

    const {isLoading: loadingVolunteeringApplication, data: VolAppData, error: VolAppError} = useQuery('VolunteeringAppData', () =>
      api.get(`${HR_VOLUNTEERING_APPLICATION}`).then(res => res.data)
    )

    const volunteering_application_data = useMemo(()=> {
      return VolAppData?.results?.map((data: any) => {
        return {
          value: data?.pk,
          label: `${data?.first_name} ${data?.last_name}`
        }
      })
    }, [VolAppData])


    const { isLoading: supervisorLoading, error: supervisorErr, data: supervisorData } = useQuery({
      queryFn: () => api.get(HR_EMPLOYEES).then(res => res.data),
      queryKey: ['supervisorData'],
      cacheTime: 3,
    })

    const supervisor_api_data = useMemo(()=> {
      return supervisorData?.results?.map((data: any) => {
        return {
          value: data?.pk,
          label: `${data?.user_info?.first_name} ${data?.user_info?.last_name}`
        }
      })
    }, [supervisorData]);

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

    const showModal = () => { setOpen(true); }


    const { mutateAsync: deleteVolunteerMutation } = useMutation({
      mutationFn: (primaryKey: number) =>
        api.delete(`${HR_VOLUNTEERS}${primaryKey}/`).then((res) => res.data),
        onSuccess: () => {
          queryClient.invalidateQueries(['volunteerData']);
          const message: string = 'Volunteer Record Deleted'
          const description: string = 'Volunteer record has been deleted!'

          openNotificationWithIcon('success', message, description);
        },
        onError: (error, variables, context) => {
          const message: string = 'Failed to delete this Volunteer record'
          const description: string = "There's something wrong when trying to delete this record. try again."

          openNotificationWithIcon('error', message, description);
        },
    });


    const confirmDelete = (pk: any) => {
      modal.confirm({
        title: 'Are you sure you want to delete this record?',
        icon: <ExclamationCircleOutlined />,
        content: "You won't be able to retrieve this record",
        okText: 'Delete',
        cancelText: 'Cancel',
        okButtonProps: {style: { backgroundColor: "#f83e37", color: "white" }},
        onOk: async() => {
          try{
            await deleteVolunteerMutation(pk);
          }catch (e){
            console.error(e);
          }
        },
      });
    };

    const openNotificationWithIcon = (type: NotificationType, msg: string, description: string) => {
      apiAlert[type]({
        message: msg,
        description: description,
      });
    };

    const handleCancel = () => { setOpen(false); setVolunteers([]); };

    const { mutateAsync: addVolunteerRecord } = useMutation({
      mutationFn: (volunteerRecord: any) =>
        api.post(`${HR_VOLUNTEERS}`, volunteerRecord).then((res) => res.data),

        onSuccess: () => {
          queryClient.invalidateQueries(['volunteerData']);
          const message: string = 'Volunteer Record created'
          const description: string = 'Volunteer record has been created successfully!'
          openNotificationWithIcon('success', message, description);
        },
        onError: (error, variables, context) => {
          const err_msg: any = error;
          const message: string = 'Failed to create Volunteer record'
          const description: string = `${err_msg?.message}. Failed to create volunteer's record`
          openNotificationWithIcon('error', message, description);
        },
    });

    const handleSubmitVolunteerData = () => {
      setConfirmLoading(true);
      setTimeout(() => {
        setOpen(false);
        setConfirmLoading(false);
      }, 2000);

      addVolunteerRecord(addVounteer);
    };

    const handleChangeUser = (value: number) => {
      setAddVolunteer((prevState: any) => ({
        ...prevState,
        user: value,
      }));
    };

    const handleChangeGender = (value: string) => {
      setAddVolunteer((prevState: any) => ({
        ...prevState,
        gender: value,
      }));
    };

    const handleChangeApplication = (value: number) => {
      setAddVolunteer((prevState: any) => ({
        ...prevState,
        application: value,
      }));
    };

    const handleChangeSupervisor = (value: number) => {
      setAddVolunteer((prevState: any) => ({
        ...prevState,
        supervisor: value,
      }));
    };

    const handleChangeCountry = (value: string) => {
      setAddVolunteer((prevState: any) => ({
        ...prevState,
        country: value,
      }));
    };

    const onChangeUploadProfile = (img: any) => {
      setAddVolunteer((prevState: any) => ({
        ...prevState,
        photo: img,
      }));
    };
    
    return (
      <
        VolunteerView
        volunteers={volunteers} confirmDelete={confirmDelete} showModal={showModal}
        contextHolder={contextHolder} volunteers_loading={volunteers_loading} open={open}
        handleCancel={handleCancel} handleSubmitVolunteerData={handleSubmitVolunteerData}
        confirmLoading={confirmLoading} contextHolderAlert={contextHolderAlert} handleChangeUser={handleChangeUser}
        users_api_data={users_api_data} handleChangeGender={handleChangeGender} volunteering_application_data={volunteering_application_data}
        handleChangeApplication={handleChangeApplication} supervisor_api_data={supervisor_api_data} handleChangeSupervisor={handleChangeSupervisor}
        countriesAPI={countriesAPI} handleChangeCountry={handleChangeCountry} onChangeUploadProfile={onChangeUploadProfile}
      />
    )
}

export default VolunteerContainer