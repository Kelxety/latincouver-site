import { CloseOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  DatePicker,
  Form,
  Input,
  Select,
  Space,
  notification,
} from 'antd';
import {
  useMutation,
  useQuery,
} from 'react-query';
import { Link } from 'react-router-dom';
import api from '../../../../constants/Interceptor/Interceptor';
import { HR_EMPLOYEES } from '../../../../constants/api/hr';
import { IEmployee } from '../../../../constants/interface/Employee';
import { ILeaveRequest } from '../../../../constants/interface/LeaveRequest';
import { addLeaveRequest } from '../../../../constants/api/services/leave-request';

const { Option } = Select;

const NewLeaveRequest = () => {
  const mutation = useMutation(addLeaveRequest, {
    onSuccess: () => {
      notification.success({
        message: 'Leave Request Added',
        description:
          'The new leave request has been added successfully.',
      });
    },
    onError: () => {
      notification.error({
        message: 'Error adding leave request',
        description:
          'There is an error when adding leave request.',
      });
    },
  });
  const {
    isLoading: employeeLoading,
    error: employeeError,
    data: employee_res,
  } = useQuery({
    queryFn: () =>
      api
        .get(HR_EMPLOYEES)
        .then((res) => res.data),
    queryKey: ['employeeData'],
    cacheTime: 3,
  });

  const config = {
    rules: [
      {
        type: 'object' as const,
        required: true,
        message: 'Please select date!',
      },
    ],
  };

  // const employeeOptions = employee_res.map(
  //   (res) => {
  //     console.log(res);
  //     return { value: res.id, label: res.gender };
  //   }
  // );

  const handleSubmit = async (
    data: ILeaveRequest
  ) => {
    try {
      data.start_date = new Date(
        data.start_date
      ).toLocaleDateString('en-CA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
      data.end_date = new Date(
        data.end_date
      ).toLocaleDateString('en-CA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
      await mutation.mutateAsync(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const [form] = Form.useForm();

  const onFinish = (values: ILeaveRequest) => {
    handleSubmit(values);
  };

  const handleChangeEmployee = () => {
    console.log('e');
  };

  if (employeeError) return;

  return (
    <Card
      title='Add New Leave Request'
      bordered={false}
      className='w-full'
      extra={
        <Link to='/hr/leave-request'>
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
            name='employee'
            label='Employee'
            rules={[{ required: true }]}
            className='w-full'
          >
            {!employeeLoading && (
              <Select
                placeholder='Employees'
                style={{ width: '100%' }}
                onChange={handleChangeEmployee}
                loading={employeeLoading}
              >
                {employee_res.results.map(
                  (employee: IEmployee) => (
                    <Option
                      key={employee.pk}
                      value={employee.pk}
                    >
                      {
                        (employee.user_info
                          .last_name,
                        employee.user_info
                          .first_name)
                      }
                    </Option>
                  )
                )}
              </Select>
            )}
          </Form.Item>
          <Form.Item
            name='start_date'
            label='Start Date'
            {...config}
            className='w-full'
          >
            <DatePicker className='w-full' />
          </Form.Item>
          <Form.Item
            name='end_date'
            label='End Date'
            {...config}
            className='w-full'
          >
            <DatePicker className='w-full' />
          </Form.Item>
          <Form.Item
            name='leave_type'
            label='Leave Type'
            rules={[{ required: true }]}
            className='w-full'
          >
            <Select placeholder='select your work type'>
              <Option value='S'>
                Sick Leave
              </Option>
              <Option value='V'>
                Vacation Leave
              </Option>
              <Option value='H'>
                Work From Home
              </Option>
              <Option value='O'>Day Off</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name='description'
            label='Desription'
            rules={[{ required: true }]}
            className='w-full'
          >
            <Input />
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

export default NewLeaveRequest;
