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


const columns: ColumnsType<VolunteerDataType> = [
  {
    title: 'First Name',
    dataIndex: 'fname',
    key: 'fname',
    render: (text) => <a>{text}</a>,
    sorter: (a, b) => a.fname.length - b.fname.length,
  },
  {
    title: 'Last Name',
    dataIndex: 'lname',
    key: 'lname',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Application',
    dataIndex: 'application',
    key: 'application',
  },
  {
    title: 'Supervisor',
    dataIndex: 'supervisor',
    key: 'supervisor',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Link to={`volunteer/${record.key}`} className='bg-primary btn-primary py-2.5 px-6 rounded-md'>Profile</Link>
        <Link to={`/`} className='bg-danger btn-danger py-2.5 px-6 rounded-md'>Delete</Link>
      </Space>
    ),
  },
];

type VolunteerProps = {
  volunteers: VolunteerDataType[],
}

const VolunteerView = ({volunteers}: VolunteerProps) => {

  return (
    <>
      <div className='mb-3 flex justify-end'>
        <Button type="primary" className='bg-primary btn-primary' disabled>
          Add Volunteers
        </Button>
      </div>
      <Table columns={columns} dataSource={volunteers} onChange={onChange} />
    </>
  )
}

export default VolunteerView