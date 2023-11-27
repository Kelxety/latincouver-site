import { useEffect } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  Form,
  Input,
  Select,
  Space,
  Spin,
  notification,
} from 'antd';
import {
  useMutation,
  useQuery,
} from 'react-query';
import { Link } from 'react-router-dom';
import {
  editDepartment,
  fetchDepartmentById,
} from '../../../../constants/api/services/department';
import { IDepartment } from '../../../../constants/interface/Department';

const { Option } = Select;

const EditDepartments = () => {
  const id = window.location.pathname
    .split('/')
    .pop();
  const { data, isLoading, isError } = useQuery(
    ['departmentById'],
    () => fetchDepartmentById(Number(id))
  );

  const mutation = useMutation(editDepartment, {
    onSuccess: () => {
      notification.success({
        message: 'Department Updated',
        description:
          'The department has been updated successfully.',
      });
    },
    onError: () => {
      notification.error({
        message: 'Error Added',
        description:
          'There is an error when updating the department .',
      });
    },
  });

  const handleSubmit = async (
    data: IDepartment & { id: number }
  ) => {
    try {
      data.id = Number(id);
      await mutation.mutateAsync(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const [form] = Form.useForm();

  const onFinish = (
    values: IDepartment & { id: number }
  ) => {
    handleSubmit(values);
  };

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        name: data.name,
        status: 1,
      });
    }
  }, [data, form]);

  if (isError) {
    return;
  }

  return (
    <Card
      title='Add New Department Name'
      bordered={false}
      className='w-full'
      extra={
        <Link to='/hr/departments'>
          <CloseOutlined />
        </Link>
      }
    >
      {isLoading && <Spin />}
      {!isLoading && (
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
              label='Department'
              rules={[{ required: true }]}
              className='w-full'
              initialValue={data?.name}
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
      )}
    </Card>
  );
};

export default EditDepartments;
