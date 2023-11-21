import React, { useEffect, useState } from 'react'
import VolunteerView from "./VolunteerView"

import api from '../../../constants/Interceptor/Interceptor'
import { HR_VOLUNTEERS, HR_EMPLOYEES } from "../../../constants/api/hr"

import { USERS } from "../../../constants/api/users"
import { useQuery } from 'react-query';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons'

function VolunteerContainer() {
    const [volunteers, setVolunteers] = useState<any[]>([]);
    const [open, setOpen] = useState<boolean>(false);

    const [modal, contextHolder] = Modal.useModal();

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

    // console.log("volunteer_res");
    // console.log(volunteer_res?.results);

    const showModal = () => { setOpen(true); }
    const confirmDelete = () => {
      modal.confirm({
        title: 'Confirm',
        icon: <ExclamationCircleOutlined />,
        content: "Delete this Volunteer's Record?",
        okText: 'Delete',
        cancelText: 'Cancel',
        okButtonProps: {style: { backgroundColor: "#f83e37", color: "white" }}
      });
    };
    
    return (
      <
        VolunteerView
        volunteers={volunteers} confirmDelete={confirmDelete} showModal={showModal}
        contextHolder={contextHolder} volunteers_loading={volunteers_loading}
      />
    )
}

export default VolunteerContainer