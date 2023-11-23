import React from 'react'

import { Space, Table, Tag, Button, Modal, Input, Select, InputNumber, Checkbox, DatePicker, Upload, message, Alert } from 'antd';
import type { ColumnsType,TableProps } from 'antd/es/table';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { Link } from 'react-router-dom';

import { EmployeeDataType } from "../../../constants/interface/it"


import type { UploadProps } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined, UploadOutlined } from '@ant-design/icons';

const onChange: TableProps<EmployeeDataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

type EmployeeProps = {
  employee_res_data: any,
  open: boolean,
  confirmLoading: boolean,
  handleCancel: () => void,
  showModal: () => void,
  employee_data_loading: boolean,
  confirmDelete: (pk: number, fname: string, lname: string) => void,
  contextHolder: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  departments_api_data: any,
  handleChangeDepartments:  (value: string[]) => void,
  job_titles: any,
  onChangeFormJobTitle: (value: string) => void,
  handleChangeWorkType: (value: string) => void;
  users_api_data: any;
  onChangeStartDate: (date: any) => void,
  onChangeEndDate: (date: any) => void,
  onChangeIsManager: (e: CheckboxChangeEvent) => void,
  handleChangeBio: (value: string) => void,
  handleChangeNotes: (value: string) => void,
  handleChangeContract: (value: string) => void,
  handleChangeGender: (value: string) => void,
  onChangeSalary: (value: number) => void,
  handleChangeUser: (value: number) => void,
  onChangeAllergies: (value: string) => void,
  onChangeMedicalCondition: (value: string) => void,
  onChangeUploadProfile: (img: any) => void,
  handleSubmitEmployeeData: () => void,
  contextHolderAlert: React.ReactElement<any, string | React.JSXElementConstructor<any>>

}

const EmployeeView = ({
  employee_res_data, open, confirmLoading, handleCancel, showModal, employee_data_loading,
  confirmDelete, contextHolder, departments_api_data, handleChangeDepartments, job_titles, onChangeFormJobTitle, handleChangeWorkType,
  users_api_data, onChangeStartDate, onChangeEndDate, onChangeIsManager, handleChangeBio, handleChangeNotes, handleChangeContract,
  handleChangeGender, onChangeSalary, handleChangeUser, onChangeAllergies, onChangeMedicalCondition,
  onChangeUploadProfile, handleSubmitEmployeeData, contextHolderAlert
}: EmployeeProps) => {

  const columns: ColumnsType<any> = [
    {
      title: 'First Name',
      dataIndex: 'first_name',
      key: 'first_name',
      render: (text, record) => <Link to={`employee/${record?.key}`}>{text.toLowerCase().replace(/\b\w/g, (s: string) => s.toUpperCase())}</Link>,
    },
    {
      title: 'Last Name',
      dataIndex: 'last_name',
      key: 'last_name',
      render: (text, record) => <Link to={`employee/${record?.key}`}>{text.toLowerCase().replace(/\b\w/g, (s: string) => s.toUpperCase())}</Link>,
    },
    {
      title: 'Job Title',
      dataIndex: 'role',
      key: 'role',
      render: (text) => <p>{text.toLowerCase().replace(/\b\w/g, (s: string) => s.toUpperCase())}</p>
    },
    {
      title: 'Department',
      dataIndex: 'department_names',
      key: 'department_names',
      render: (_, { department_names }) => (
        <>
          {department_names.map((tag: any) => {
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
      title: 'Work Type',
      dataIndex: 'work_type',
      key: 'work_type',
    },
    {
      title: 'Start Date',
      dataIndex: 'start_date',
      key: 'start_date',
      render: (text) => <>{text ?? "No Date Provided"}</>
    },
    {
      title: 'End Date',
      dataIndex: 'end_date',
      key: 'end_date',
      render: (text) => <>{text ?? "No Date Provided"}</>
    },
    {
      title: 'Manager',
      dataIndex: 'is_manager',
      key: 'is_manager',
      render: (_, record) => (
        <div>
          {record?.is_manager ? <CheckCircleOutlined className='text-success' /> : <CloseCircleOutlined className='text-danger' />}
        </div>
      ),
    },
    {
      title: 'Action',
      dataIndex: 'pk',
      key: 'pk',
      render: (_, record) => (
        <div className='flex justify-start'>
          <Space size="middle">
            <Link to={`employee/${record.key}`} className='bg-primary btn-primary text-sm py-1.5 px-3 rounded-md hover:no-underline'>Profile</Link>
            <Button onClick={() => confirmDelete(record?.key, record?.first_name, record?.last_name)} className='text-sm' type='primary' danger>Delete</Button>
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


  const handleUploadImage = (info: any) => { onChangeUploadProfile(info); };


  return (
    <>
      {contextHolderAlert}
      <div className='mb-3 flex justify-between'>
        <h1>Employees</h1>
        <Button type="primary" className='bg-primary btn-primary' onClick={showModal}>
          Add Employees
        </Button>
      </div>

      <Table columns={columns} dataSource={employee_res_data} onChange={onChange} loading={employee_data_loading} />

      <Modal
        title="Add Employee"
        open={open}
        onOk={handleSubmitEmployeeData}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        destroyOnClose={true}
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
                  { value: 1, label: "Full Time" },
                  { value: 2, label: "Part Time" },
                ]}
              />
            </div>
            <div className='grid gap-1'>
              <label htmlFor="">Start Date</label>
              <DatePicker onChange={onChangeStartDate} />
            </div>
            <div className='grid gap-1'>
              <label htmlFor="">End Date</label>
              <DatePicker onChange={onChangeEndDate} />
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
              <Input placeholder="Medical Condition" onChange={(e) => onChangeMedicalCondition(e.target.value)} />
            </div>
            <div className='grid gap-1'>
              <label htmlFor="">Allergies</label>
              <Input placeholder="Allergies" onChange={(e) => onChangeAllergies(e.target.value)} />
            </div>
            <div className='grid gap-1'>
              <label htmlFor="">User</label>
              <Select
                showSearch
                placeholder="User"
                optionFilterProp="children"
                onChange={handleChangeUser}
                onSearch={onSearch}
                filterOption={filterOption}
                options={users_api_data}
              />
            </div>
            <div className='grid gap-1'>
              <label htmlFor="">Salary</label>
              <InputNumber min={1} max={999999} defaultValue={0} style={{ width: "auto" }} onChange={(e: any) => onChangeSalary(e)} />
            </div>
            <div className='grid gap-1'>
              <label htmlFor="">Gender</label>
              <Select
                style={{ width: "auto" }}
                onChange={handleChangeGender}
                options={[
                  { value: 1, label: 'Male' },
                  { value: 2, label: 'Female' },
                  { value: 3, label: 'Others' },
                ]}
              />
            </div>
            <div className='grid gap-1'>
              <label htmlFor="">Contact</label>
              <Input placeholder="Contact" onChange={(e) => handleChangeContract(e.target.value)} />
            </div>
            <div className='grid gap-1'>
              <label htmlFor="">Notes</label>
              <Input placeholder="Notes" onChange={(e) => handleChangeNotes(e.target.value)} />
            </div>
            <div className='grid gap-1'>
              <label htmlFor="">Bio</label>
              <Input placeholder="Bio" onChange={(e) => handleChangeBio(e.target.value)} />
            </div>
            <div className='mt-5'>
              <Checkbox onChange={onChangeIsManager}>Is Manager</Checkbox>
            </div>
          </div>
          <div>
            <input type="file" id="img" name="img" accept="image/*" onChange={handleUploadImage}></input>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default EmployeeView