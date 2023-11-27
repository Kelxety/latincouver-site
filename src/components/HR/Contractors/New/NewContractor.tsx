import { CloseOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Space,
} from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const { Option } = Select;
const OPTIONS = [
  'Apples',
  'Nails',
  'Bananas',
  'Helicopters',
  'New Dealer',
];

interface ModelData {
  firstName: string;
  lastName: string;
  email: string;
  contactNo: string;
  address: string;
}

const NewContractor = () => {
  const [form] = Form.useForm();
  const [selectedItems, setSelectedItems] =
    useState<string[]>([]);
  const filteredOptions = OPTIONS.filter(
    (o) => !selectedItems.includes(o)
  );

  const onFinish = (values: ModelData) => {
    console.log(values);
  };

  const onChangeManager = (
    e: CheckboxChangeEvent
  ) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const config = {
    rules: [
      {
        type: 'object' as const,
        required: true,
        message: 'Please select date!',
      },
    ],
  };

  return (
    <Card
      title='Add New Contractor'
      bordered={false}
      className='w-full'
      extra={
        <Link to='/hr/contractors'>
          <CloseOutlined />
        </Link>
      }
    >
      <Form
        form={form}
        name='validateOnly'
        layout='vertical'
        onFinish={onFinish}
        autoComplete='off'
      >
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2'>
          <Form.Item
            name='Job Title'
            label='Job Title'
            rules={[{ required: true }]}
            className='w-full'
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='Work Type'
            label='Work Type'
            rules={[
              {
                required: true,
                message:
                  'Please select work type!',
              },
            ]}
            className='w-full'
          >
            <Select placeholder='select your work type'>
              <Option value='Full Time'>
                Full Time
              </Option>
              <Option value='Part Time'>
                Part Time
              </Option>
            </Select>
          </Form.Item>
          <Form.Item
            name='startDate'
            label='Start Date'
            {...config}
            className='w-full'
          >
            <DatePicker className='w-full' />
          </Form.Item>
          <Form.Item
            name='endDate'
            label='End Date'
            {...config}
            className='w-full'
          >
            <DatePicker className='w-full' />
          </Form.Item>
          <Form.Item
            name='Department'
            label='Department'
            rules={[
              {
                required: true,
              },
            ]}
            className='w-full'
          >
            <Select
              mode='multiple'
              placeholder='Departments'
              maxTagCount='responsive'
              value={selectedItems}
              onChange={setSelectedItems}
              style={{ width: '100%' }}
              options={filteredOptions.map(
                (item: string) => ({
                  value: item,
                  label: item,
                })
              )}
            />
          </Form.Item>
          <Form.Item
            name='medicalCondition'
            label='Medical Condition'
            rules={[
              {
                required: true,
              },
            ]}
            className='w-full'
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='allergies'
            label='Allergies'
            rules={[
              {
                required: true,
              },
            ]}
            className='w-full'
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='user'
            label='Select User'
            rules={[
              {
                required: true,
              },
            ]}
            className='w-full'
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='salary'
            label='Salary'
            rules={[
              {
                required: true,
                min: 1,
              },
            ]}
            initialValue={0}
            className='w-full'
          >
            <InputNumber className='w-full' />
          </Form.Item>
          <Form.Item
            name='gender'
            label='Gender'
            rules={[
              {
                required: true,
                message: 'Please select gender!',
              },
            ]}
            className='w-full'
          >
            <Select placeholder='select your gender'>
              <Option value='male'>Male</Option>
              <Option value='female'>
                Female
              </Option>
              <Option value='other'>Other</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name='contactNo'
            label='Contact No'
            rules={[
              {
                required: true,
              },
            ]}
            className='w-full'
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='notes'
            label='Notes'
            rules={[
              {
                required: true,
              },
            ]}
            className='w-full'
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='bio'
            label='BIo'
            rules={[
              {
                required: true,
              },
            ]}
            className='w-full'
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='manager'
            rules={[
              {
                required: true,
              },
            ]}
            className='w-full my-auto pl-2'
          >
            <Checkbox
              checked={false}
              onChange={onChangeManager}
            >
              Manager
            </Checkbox>
          </Form.Item>
        </div>

        <div className='flex space-x-4 pt-4'>
          <Form.Item>
            <Button
              type='default'
              className='bg-primary btn-primary w-[100px]'
              htmlType='submit'
            >
              Submit
            </Button>
          </Form.Item>
          <Form.Item>
            <Space>
              <Button
                htmlType='reset'
                type='default'
                className='bg-red-400 text-white w-[100px]'
              >
                Reset
              </Button>
            </Space>
          </Form.Item>
        </div>
      </Form>
    </Card>
  );
};

export default NewContractor;
