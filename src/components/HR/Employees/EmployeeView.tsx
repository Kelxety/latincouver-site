import React, { useEffect, useState } from 'react'

import { Space, Table, Tag, Button, Modal, Divider, Form, Input, Select, InputNumber, Checkbox, DatePicker } from 'antd';
import type { ColumnsType,TableProps } from 'antd/es/table';
import { Link } from 'react-router-dom';

import { EmployeeDataType, JobTitleDataType, DepartmentDataType, UsersDataType } from "../../../constants/interface/it"
import { workType } from "../../../constants/choices/choices"


const { RangePicker } = DatePicker;


const columns: ColumnsType<EmployeeDataType> = [
  {
    title: 'First Name',
    dataIndex: 'fname',
    key: 'fname',
    render: (text, record) => <Link to={`employee/${record.key}`}>{text}</Link>,
    sorter: (a, b) => a.fname.length - b.fname.length,
  },
  {
    title: 'Last Name',
    dataIndex: 'lname',
    key: 'lname',
    render: (text, record) => <Link to={`employee/${record.key}`}>{text}</Link>,
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
          return (
            <Tag color={'green'} key={tag}>
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
      <div className='flex justify-center'>
        <Space size="middle">
          <Link to={`employee/${record.key}`} className='bg-primary btn-primary py-2.5 px-6 rounded-md hover:no-underline'>Profile</Link>
          <Link to={`/`} className='bg-danger btn-danger py-2.5 px-6 rounded-md hover:no-underline'>Delete</Link>
        </Space>
      </div>
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

type SelectData = {
  value: string,
  label: string,
}

type EmployeeProps = {
  employees: EmployeeDataType[],
  open: boolean,
  confirmLoading: boolean,
  handleCancel: () => void,
  handleOk: () => void,
  showModal: () => void,
  loading: boolean,
  jobtitles: JobTitleDataType[],
  departments: DepartmentDataType[],
  users: UsersDataType[],

}

const EmployeeView = ({
  employees, open, confirmLoading, handleCancel, handleOk, showModal, loading, jobtitles, departments, users
}: EmployeeProps) => {

  const [jobTitle, setJobTitle] = useState<SelectData[]>([]);
  const [departmentData, setDepartmentData] = useState<SelectData[]>([]);
  const [userData, setUserData] = useState<SelectData[]>([]);

  useEffect(()=> {
    setJobTitle(jobtitles?.map((job: any) => {
      return {
        value: `${job?.key}`,
        label: job?.name.toUpperCase()
      }
    }))

    setDepartmentData(departments?.map((depart: any) => {
      return {
        value: `${depart?.key}`,
        label: depart?.name.toUpperCase()
      }
    }))

    setUserData(users?.map((user: any) => {
      return {
        value: user?.key,
        label: `${user?.first_name} ${user?.last_name}`
      }
    }))


  }, [jobtitles, departments, users]);

  console.log(`workType:`);
  console.table(workType)

  const tableProps: TableProps<EmployeeDataType> = {loading};

  const onChangeForm = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log('search:', value);
  };

  // Filter `option.label` match the user type `input`
const filterOption = (input: string, option?: { label: string; value: string }) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());


  return (
    <>
      <div className='mb-3 flex justify-end'>
        <Button type="primary" className='bg-primary btn-primary' onClick={showModal}>
          Add Employees
        </Button>
      </div>

      <Table {...tableProps} columns={columns} dataSource={employees} onChange={onChange} />

      <Modal
        title="Add Employee"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okText="Confirm"
        width={1000}
        okButtonProps={{
          style: { backgroundColor: "#6640b2", color: "white" }
        }}
      >
        <form className='mt-4'>
          <div className='grid grid-cols-4 grid-rows-3 gap-4'>
            <div className='grid gap-1'>
              <label htmlFor="">Title</label>
              <Select
                showSearch
                placeholder="Job Title"
                optionFilterProp="children"
                onChange={onChangeForm}
                onSearch={onSearch}
                filterOption={filterOption}
                options={jobTitle}
              />
            </div>
            <div className='grid gap-1'>
              <label htmlFor="">Work Type</label>
              <Select
                showSearch
                placeholder="Work Type"
                optionFilterProp="children"
                onChange={onChangeForm}
                onSearch={onSearch}
                filterOption={filterOption}
                options={jobTitle}
              />
            </div>

            <div className='grid gap-1'>
              <label htmlFor="">Salary</label>
              <InputNumber min={1} max={999999} defaultValue={0} />
            </div>
            {/* <div>
              <Checkbox>Is Manager</Checkbox>
            </div> */}
            <div className='grid gap-1'>
              <label htmlFor="">Start Date - End Date</label>
              <RangePicker />
            </div>
            <div className='grid gap-1'>
              <label htmlFor="">Department</label>
                <Select
                  mode="multiple"
                  style={{ width: '100%' }}
                  placeholder="Department"
                  // defaultValue={['a10', 'c12']}
                  // onChange={handleChange}
                  options={departmentData}
                />
            </div>
            <div className='grid gap-1'>
              <label htmlFor="">Medical Condition</label>
              <Input placeholder="Medical Condition" />
            </div>
            <div className='grid gap-1'>
              <label htmlFor="">Allergies</label>
              <Input placeholder="Allergies" />
            </div>
            <div className='grid gap-1'>
              <label htmlFor="">User</label>
              <Select
                showSearch
                placeholder="User"
                optionFilterProp="children"
                onChange={onChangeForm}
                onSearch={onSearch}
                filterOption={filterOption}
                options={userData}
              />
            </div>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default EmployeeView