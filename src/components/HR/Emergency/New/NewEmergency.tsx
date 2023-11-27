import { CloseOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  Form,
  Input,
  Select,
  Space,
  notification,
} from 'antd';
import { Option } from 'antd/es/mentions';
import { useMutation } from 'react-query';
import { Link } from 'react-router-dom';
import { addDepartment } from '../../../../constants/api/services/department';
import { IDepartment } from '../../../../constants/interface/Department';

const NewEmergency = () => {
  const mutation = useMutation(addDepartment, {
    onSuccess: () => {
      notification.success({
        message: 'Emergency Contact Added',
        description:
          'The new emergency contact has been added successfully.',
      });
    },
    onError: () => {
      notification.error({
        message: 'Error Adding',
        description:
          'There is an error when adding emergency contact.',
      });
    },
  });

  const handleSubmit = async (
    data: IDepartment
  ) => {
    try {
      await mutation.mutateAsync(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const [form] = Form.useForm();

  const onFinish = (values: IDepartment) => {
    handleSubmit(values);
    console.log(values);
  };

  return (
    <Card
      title='Add New Department'
      bordered={false}
      className='w-full'
      extra={
        <Link to='/hr/departments'>
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
            name='name'
            label='Department Name'
            rules={[{ required: true }]}
            className='w-full'
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='Status'
            label='Status'
            rules={[
              {
                required: true,
                message:
                  'Please select work type!',
              },
            ]}
            className='w-full'
            initialValue={'Active'}
          >
            <Select placeholder='select your work type'>
              <Option value='Active'>
                Active
              </Option>
              <Option value='Inactive'>
                Inactive
              </Option>
            </Select>
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

export default NewEmergency;
