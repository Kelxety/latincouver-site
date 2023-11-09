import React from 'react'
import { Space, Table, Tag, Button } from 'antd';
import type { ColumnsType,TableProps } from 'antd/es/table';


interface VolunteerDataType {
  key: string;
  fname: string;
  lname: string;
  gender: string;
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
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
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
        <Button type="link" className='btn-primary bg-primary'>View Profile</Button>
        <Button type="link" className='btn-danger bg-danger'>Delete</Button>
      </Space>
    ),
  },
];

type VolunteerProps = {
  volunteers: VolunteerDataType[],
}

const VolunteerView = ({volunteers}: VolunteerProps) => {
  return <><Table columns={columns} dataSource={volunteers} onChange={onChange} /></>
}

export default VolunteerView