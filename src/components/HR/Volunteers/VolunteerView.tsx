import React from 'react'
import { Space, Table, Tag, Button, Modal, Select } from 'antd';
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
  confirmDelete: (pk: any) => void,
  showModal: () => void,
  contextHolder: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  volunteers_loading: boolean,
  open: boolean,
  handleCancel: () => void,
  handleSubmitVolunteerData: () => void,
  confirmLoading: boolean,
  contextHolderAlert: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  handleChangeUser: (value: number) => void,
  users_api_data: any;
  handleChangeGender: (value: string) => void,
  volunteering_application_data: any,
  handleChangeApplication: (value: number) => void,
  supervisor_api_data: any,
  handleChangeSupervisor: (value: number) => void,
  countriesAPI: any[],
  handleChangeCountry: (value: string) => void,
  onChangeUploadProfile: (img: any) => void,
}

const VolunteerView = ({
  volunteers, confirmDelete, showModal, contextHolder, volunteers_loading, open, handleCancel,
  handleSubmitVolunteerData, confirmLoading, contextHolderAlert, handleChangeUser, users_api_data,
  handleChangeGender, volunteering_application_data, handleChangeApplication, supervisor_api_data,
  handleChangeSupervisor, countriesAPI, handleChangeCountry, onChangeUploadProfile
}: VolunteerProps) => {

  const onSearch = (value: string) => { console.log('search:', value); };

    // Filter `option.label` match the user type `input`
const filterOption = (input: string, option?: { label: string; value: string }) =>
(option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  const handleUploadImage = (info: any) => { onChangeUploadProfile(info); };


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
          <Button onClick={() => confirmDelete(record?.key)} className='text-sm' type='primary' danger>Delete</Button>
          {contextHolder}
        </Space>
      </div>
      ),
    },
  ];

  return (
    <>
      {contextHolderAlert}
      <div className='mb-3 flex justify-between'>
        <h1>Volunteers</h1>
        <Button type="primary" className='bg-primary btn-primary' onClick={showModal}>
          Add Volunteers
        </Button>
      </div>

      <Table columns={columns} dataSource={volunteers} onChange={onChange} loading={volunteers_loading} />

      <Modal
        title="Add Volunteer"
        open={open}
        onOk={handleSubmitVolunteerData}
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
          <div className='grid grid-cols-3 gap-4 mb-3'>
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
              <label htmlFor="">Application</label>
              <Select
                showSearch
                placeholder="Application"
                optionFilterProp="children"
                onChange={handleChangeApplication}
                onSearch={onSearch}
                filterOption={filterOption}
                options={volunteering_application_data}
              />
            </div>
            <div className='grid gap-1'>
              <label htmlFor="">Supervisor</label>
              <Select
                showSearch
                placeholder="Supervisor"
                optionFilterProp="children"
                onChange={handleChangeSupervisor}
                onSearch={onSearch}
                filterOption={filterOption}
                options={supervisor_api_data}
              />
            </div>
            <div className='grid gap-1'>
              <label htmlFor="">Gender</label>
              <Select
                style={{ width: "auto" }}
                placeholder="Select Gender"
                onChange={handleChangeGender}
                options={[
                  { value: 1, label: 'Male' },
                  { value: 2, label: 'Female' },
                  { value: 3, label: 'Others' },
                ]}
              />
            </div>
            <div className='grid gap-1'>
              <label htmlFor="">Country</label>
              <Select
                showSearch
                placeholder="Select Country"
                onSearch={onSearch}
                style={{ width: 300 }}
                onChange={handleChangeCountry}
                options={countriesAPI}
              />
            </div>
          </div>
          <div className='grid gap-1'>
            <input type="file" id="img" name="img" accept="image/*" onChange={handleUploadImage}></input>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default VolunteerView