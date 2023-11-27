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
import { IEmployee } from '../../../../constants/interface/Employee';
import { ILeaveRequest } from '../../../../constants/interface/LeaveRequest';
import {
  editLeaveRequest,
  fetchByLeaveRequestId,
} from '../../../../constants/api/services/leave-request';
import api from '../../../../constants/Interceptor/Interceptor';
import { HR_EMPLOYEES } from '../../../../constants/api/hr';
import moment from 'moment';

const { Option } = Select;

const EditLeaveRequest = () => {
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
  const id = window.location.pathname
    .split('/')
    .pop();
  const { data, isLoading, isError } = useQuery(
    ['leaveRequestById'],
    () => fetchByLeaveRequestId(Number(id))
  );
  const mutation = useMutation(editLeaveRequest, {
    onSuccess: () => {
      notification.success({
        message: 'Leave Request Updated',
        description:
          'The new leave request has been updated successfully.',
      });
    },
    onError: () => {
      notification.error({
        message: 'Error updating leave request',
        description:
          'There is an error when updating leave request.',
      });
    },
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

  const handleSubmit = async (
    formData: ILeaveRequest & { id: number }
  ) => {
    try {
      formData.start_date = new Date(
        formData.start_date
      ).toLocaleDateString('en-CA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
      formData.end_date = new Date(
        formData.end_date
      ).toLocaleDateString('en-CA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
      formData.id = Number(id);
      await mutation.mutateAsync(formData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const [form] = Form.useForm();

  const onFinish = (
    values: ILeaveRequest & { id: number }
  ) => {
    handleSubmit(values);
  };

  const handleChangeEmployee = () => {
    console.log('e');
  };

  if (!data) return;

  return (
    <Card
      title='Edit Leave Request'
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
            initialValue={data.pk}
          >
            {!isLoading && (
              <Select
                placeholder='Employees'
                style={{ width: '100%' }}
                onChange={handleChangeEmployee}
                loading={employeeLoading}
              >
                {employee_res?.results.map(
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
            initialValue={moment(data.start_date)}
          >
            <DatePicker className='w-full' />
          </Form.Item>
          <Form.Item
            name='end_date'
            label='End Date'
            {...config}
            className='w-full'
            initialValue={moment(data.end_date)}
          >
            <DatePicker className='w-full' />
          </Form.Item>
          <Form.Item
            name='leave_type'
            label='Leave Type'
            rules={[{ required: true }]}
            className='w-full'
            initialValue={data.leave_type}
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
            initialValue={data.description}
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

export default EditLeaveRequest;
