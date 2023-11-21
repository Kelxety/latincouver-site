import React from 'react'
import { Space, Table, Tag, Button } from 'antd';
import type { ColumnsType,TableProps } from 'antd/es/table';
import { Link } from 'react-router-dom';


interface VolunteerDataType {
  key: string;
  fname: string;
  lname: string;
  gender: string;
  application: string;
  supervisor: any;
  country: string;
}


const onChange: TableProps<VolunteerDataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

type VolunteerProps = {
  volunteers: VolunteerDataType[],
  confirmDelete: () => void,
  showModal: () => void,
  contextHolder: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  volunteers_loading: boolean,
}

const VolunteerView = ({
  volunteers, confirmDelete, showModal, contextHolder, volunteers_loading
}: VolunteerProps) => {


  const columns: ColumnsType<VolunteerDataType> = [
    {
      title: 'First Name',
      dataIndex: 'first_name',
      key: 'first_name',
      render: (text, record) => <Link to={`volunteer/${record.key}`}>{text.toLowerCase().replace(/\b\w/g, (s: string) => s.toUpperCase())}</Link>,
    },
    {
      title: 'Last Name',
      dataIndex: 'last_name',
      key: 'last_name',
      render: (text, record) => <Link to={`volunteer/${record.key}`}>{text.toLowerCase().replace(/\b\w/g, (s: string) => s.toUpperCase())}</Link>,
    },
    {
      title: 'Application',
      dataIndex: 'application_name',
      key: 'application_name',
      render: (text) => <>{text.toLowerCase().replace(/\b\w/g, (s: string) => s.toUpperCase())}</>,
    },
    {
      title: 'Supervisor',
      dataIndex: 'supervisor_name',
      key: 'supervisor_name',
      render: (text) => <>{text.toLowerCase().replace(/\b\w/g, (s: string) => s.toUpperCase())}</>,
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Latitude',
      dataIndex: 'latitude',
      key: 'latitude',
    },
    {
      title: 'Longitude',
      dataIndex: 'longitude',
      key: 'longitude',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div className='flex justify-start'>
        <Space size="middle">
          <Link to={`volunteer/${record.key}`} className='bg-primary btn-primary text-sm py-1.5 px-3 rounded-md hover:no-underline'>Profile</Link>
          <Button onClick={confirmDelete} className='text-sm' type='primary' danger>Delete</Button>
          {contextHolder}
        </Space>
      </div>
      ),
    },
  ];

  return (
    <>
      <div className='mb-3 flex justify-between'>
        <h1>Volunteers</h1>
        <Button type="primary" className='bg-primary btn-primary' onClick={showModal}>
          Add Volunteers
        </Button>
      </div>

      <Table columns={columns} dataSource={volunteers} onChange={onChange} loading={volunteers_loading} />
    </>
  )
}

export default VolunteerView