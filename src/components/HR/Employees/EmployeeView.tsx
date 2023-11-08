import React from 'react'

import { Space, Table, Tag, Button } from 'antd';
import type { ColumnsType,TableProps } from 'antd/es/table';

interface EmployeeDataType {
  key: string;
  fname: string;
  lname: string;
  gender: string;
  department: string;
}


const columns: ColumnsType<EmployeeDataType> = [
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
    title: 'Department',
    dataIndex: 'department',
    key: 'department',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        {/* <a className='text-light btn-primary rounded-none'>View Profile</a> */}
        <Button type="link" className='btn-primary bg-primary'>View Profile</Button>
        <Button type="link" className='btn-danger bg-danger'>Delete</Button>
      </Space>
    ),
  },
];

const data: EmployeeDataType[] = [
  {
    key: '1',
    fname: 'John',
    lname: 'Brown',
    gender: 'Male',
    department: 'sample',
  },
  {
    key: '2',
    fname: 'John',
    lname: 'Brown',
    gender: 'Male',
    department: 'sample',
  },
  {
    key: '3',
    fname: 'John',
    lname: 'Brown',
    gender: 'Male',
    department: 'sample',
  },
  {
    key: '4',
    fname: 'Vincent',
    lname: 'Anderson',
    gender: 'Male',
    department: 'sample',
  },
  {
    key: '5',
    fname: 'Richard Parker',
    lname: 'Brown',
    gender: 'Male',
    department: 'sample',
  },
  {
    key: '6',
    fname: 'John',
    lname: 'Brown',
    gender: 'Male',
    department: 'sample',
  },
  {
    key: '7',
    fname: 'John',
    lname: 'Brown',
    gender: 'Male',
    department: 'sample',
  },
  {
    key: '8',
    fname: 'John',
    lname: 'Brown',
    gender: 'Male',
    department: 'sample',
  },
  {
    key: '9',
    fname: 'Belmar',
    lname: 'Brown',
    gender: 'Male',
    department: 'sample',
  },
  {
    key: '10',
    fname: 'John',
    lname: 'Brown',
    gender: 'Male',
    department: 'sample',
  },
  {
    key: '11',
    fname: 'John',
    lname: 'Brown',
    gender: 'Male',
    department: 'sample',
  },
  {
    key: '12',
    fname: 'John',
    lname: 'Brown',
    gender: 'Male',
    department: 'sample',
  },
];

const onChange: TableProps<EmployeeDataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};


const EmployeeView = () => {
  return (
    <>
      <div>
        <Table columns={columns} dataSource={data} onChange={onChange} />;
      </div>
    </>
  )
}

export default EmployeeView