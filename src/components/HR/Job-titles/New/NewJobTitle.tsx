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
import { useMutation } from 'react-query';
import { Link } from 'react-router-dom';
import { addJobTitle } from '../../../../constants/api/services/jobTitle';
import { IJobTitle } from '../../../../constants/interface/JobTitle';

const { Option } = Select;

const NewJobTitle = () => {
  const mutation = useMutation(addJobTitle, {
    onSuccess: () => {
      notification.success({
        message: 'Job Title Updated',
        description:
          'The new job title has been updated successfully.',
      });
    },
    onError: () => {
      notification.error({
        message: 'Error Added',
        description:
          'There is an error when updating job title.',
      });
    },
  });

  const handleAddJobTitle = async (
    data: IJobTitle
  ) => {
    try {
      await mutation.mutateAsync(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const [form] = Form.useForm();

  const onFinish = (values: IJobTitle) => {
    handleAddJobTitle(values);
    console.log(values);
  };

  return (
    <Card
      title='Add New Job Title'
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
            name='name'
            label='Job Title Name'
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

export default NewJobTitle;
