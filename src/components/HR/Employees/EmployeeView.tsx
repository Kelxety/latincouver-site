import React, { useEffect, useState } from 'react'

import { Space, Table, Tag, Button, Modal, Divider, Form, Input, Select, InputNumber, Checkbox, DatePicker, Upload, message } from 'antd';
import type { ColumnsType,TableProps } from 'antd/es/table';
import { Link } from 'react-router-dom';

import { EmployeeDataType, JobTitleDataType, DepartmentDataType, UsersDataType } from "../../../constants/interface/it"


import type { UploadProps } from "antd";
import { UploadOutlined } from '@ant-design/icons';

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
  employee_data: any,
  open: boolean,
  confirmLoading: boolean,
  handleCancel: () => void,
  handleOk: () => void,
  showModal: () => void,
  employee_data_loading: boolean,
  confirmDelete: () => void,
  contextHolder: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  departments_api_data: any,
  handleChangeDepartments:  (value: string[]) => void,
  job_titles: any,
  onChangeFormJobTitle: (value: string) => void,
  handleChangeWorkType: (value: string) => void;
  users_api_data: any;

}

const EmployeeView = ({
  employee_data, open, confirmLoading, handleCancel, handleOk, showModal, employee_data_loading,
  confirmDelete, contextHolder, departments_api_data, handleChangeDepartments, job_titles, onChangeFormJobTitle, handleChangeWorkType,
  users_api_data,
}: EmployeeProps) => {


  // const tableProps: TableProps<EmployeeDataType> = {loading};

  const columns: ColumnsType<EmployeeDataType> = [
    {
      title: 'Name',
      dataIndex: 'user',
      key: 'user',
      render: (text, record) => <Link to={`employee/${record?.key}`}>{text}</Link>,
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
            <Link to={`employee/${record.key}`} className='bg-primary btn-primary text-sm py-1.5 px-3 rounded-md hover:no-underline'>Profile</Link>
            <Button onClick={confirmDelete} className='text-sm' type='primary' danger>Delete</Button>
            {contextHolder}
          </Space>
        </div>
      ),
    },
  ];

  const onSearch = (value: string) => {
    console.log('search:', value);
  };

  // Filter `option.label` match the user type `input`
const filterOption = (input: string, option?: { label: string; value: string }) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());


  const props: UploadProps = {
    name: "file",
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    headers: {
      authorization: "authorization-text"
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log("HAHAHAHAHAHHA");
        console.log(info.file, info.fileList);
      }
      if (info.file.status == "uploading") {
        console.log("HAHAHAHAHAHHA");
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    }
  };


  return (
    <>
      <div className='mb-3 flex justify-between'>
        <h1>Employees</h1>
        <Button type="primary" className='bg-primary btn-primary' onClick={showModal}>
          Add Employees
        </Button>
      </div>

      <Table columns={columns} dataSource={employee_data} onChange={onChange} loading={employee_data_loading} />
      {/* {...tableProps} */}

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
          <div className='grid grid-cols-4 grid-rows-3 gap-4 mb-3'>
            <div className='grid gap-1'>
              <label htmlFor="">Title</label>
              <Select
                showSearch
                placeholder="Job Title"
                optionFilterProp="children"
                onChange={onChangeFormJobTitle}
                onSearch={onSearch}
                filterOption={filterOption}
                options={job_titles}
              />
            </div>
            <div className='grid gap-1'>
              <label htmlFor="">Work Type</label>
              <Select
                placeholder="Work Type"
                onChange={handleChangeWorkType}
                options={[
                  { value: "FT", label: "Full Time" },
                  { value: "PT", label: "Part Time" },
                ]}
              />
            </div>
            <div className='grid gap-1'>
              <label htmlFor="">Start Date</label>
              <DatePicker />
            </div>
            <div className='grid gap-1'>
              <label htmlFor="">End Date</label>
              <DatePicker />
            </div>
            <div className='grid gap-1'>
              <label htmlFor="">Department</label>
                <Select
                  mode="multiple"
                  style={{ width: '100%' }}
                  placeholder="Department"
                  onChange={handleChangeDepartments}
                  options={departments_api_data}
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
                onChange={handleChangeDepartments}
                onSearch={onSearch}
                filterOption={filterOption}
                options={users_api_data}
              />
            </div>
            <div className='grid gap-1'>
              <label htmlFor="">Salary</label>
              <InputNumber min={1} max={999999} defaultValue={0} style={{ width: "auto" }} />
            </div>
            <div className='grid gap-1'>
              <label htmlFor="">Gender</label>
              <Select
                defaultValue="ML"
                style={{ width: "auto" }}
                // onChange={handleChange}
                options={[
                  { value: 'ML', label: 'Male' },
                  { value: 'FM', label: 'Female' },
                  { value: 'Others', label: 'Others' },
                ]}
              />
            </div>
            <div className='grid gap-1'>
              <label htmlFor="">Contact</label>
              <Input placeholder="Contact" />
            </div>
            <div className='grid gap-1'>
              <label htmlFor="">Notes</label>
              <Input placeholder="Notes" />
            </div>
            <div className='grid gap-1'>
              <label htmlFor="">Bio</label>
              <Input placeholder="Bio" />
            </div>
            <div className='mt-5'>
              <Checkbox>Is Manager</Checkbox>
            </div>
          </div>
          <div>
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Upload Profile Picture</Button>
            </Upload>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default EmployeeView