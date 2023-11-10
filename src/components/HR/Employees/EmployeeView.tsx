import React, { useEffect, useState } from 'react'

import { Space, Table, Tag, Button } from 'antd';
import type { ColumnsType,TableProps } from 'antd/es/table';
import { Link } from 'react-router-dom';


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
    render: (_, { department }) => (
      <>
        {department.map((tag) => {
          let color: string = 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    dataIndex: 'pk',
    key: 'pk',
    render: (_, record) => (
      <Space size="middle">
        <Link to={`${record.key}`} className='bg-primary btn-primary py-2.5 px-6 rounded-md'>Profile</Link>
        <Link to={`/`} className='bg-danger btn-danger py-2.5 px-6 rounded-md'>Delete</Link>
      </Space>
    ),
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

type EmployeeProps = {
  employees: EmployeeDataType[],
}


interface EmployeeDataType {
  key: string;
  fname: string;
  lname: string;
  gender: string;
  department: string[];
}

const EmployeeView = ({employees}: EmployeeProps) => {

  return (
    <><Table columns={columns} dataSource={employees} onChange={onChange} /></>
  )
}

export default EmployeeView