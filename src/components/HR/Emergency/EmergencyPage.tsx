import {
  Button,
  Card,
  Form,
  Input,
  Space,
  Spin,
  notification,
} from 'antd';
import {
  useMutation,
  useQuery,
} from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IEmergency } from '../../../constants/interface/Emergency';
import {
  addEmergency,
  fetchEmergency,
} from '../../../constants/api/services/emergency';
import api from '../../../constants/Interceptor/Interceptor';
import { HR_EMPLOYEES } from '../../../constants/api/hr';
import { IEmployee } from '../../../constants/interface/Employee';

const EmergencyPage = () => {
  const [selectedEmployee, setSelectedEmployee] =
    useState(0);
  const [contactName, setContactName] =
    useState('');
  const [relationship, setRelationship] =
    useState('');
  const [contactNo, setContactNo] = useState('');
  const [createOrEdit, setCreateOrEdit] =
    useState(false);

  const [form] = Form.useForm();

  const { Search } = Input;

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

  const { data, isLoading, isError, refetch } =
    useQuery(
      ['emergency', { statusIndex: null }],
      fetchEmergency
    );

  const mutation = useMutation(addEmergency, {
    onSuccess: () => {
      notification.success({
        message: 'Emergency Added',
        description:
          'The new emergency contact has been added successfully.',
      });
    },
    onError: () => {
      notification.error({
        message: 'Error Added',
        description:
          'There is an error when adding emergency contact.',
      });
    },
  });

  const onSearch = (value: string) => {
    console.log('search:', value);
  };

  const handleSubmit = async (
    data: IEmergency
  ) => {
    try {
      data.employee = selectedEmployee;
      await mutation.mutateAsync(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const changeSelectedEmployee = (
    res: IEmployee
  ) => {
    setSelectedEmployee(res.pk || 0);
  };

  const onFinish = (values: IEmergency) => {
    handleSubmit(values);
  };

  useEffect(() => {
    const renderEmergency = () => {
      const selected =
        employee_res?.results.filter(
          (e) => e.employee === selectedEmployee
        );
      if (selected) {
        setContactName(
          selected.contactName || ''
        );
        setContactNo(selected.contactNo || '');
        setRelationship(
          selected.relationship || ''
        );
      }
    };
    renderEmergency();
  }, [employee_res?.results, selectedEmployee]);

  if (employeeError) return;
  <>Error in fetching employee</>;

  return (
    <div className='w-full'>
      <div className='flex gap-2'>
        <div className='w-1/3'>
          <Card
            title='Select an Employee'
            extra={
              <div className='flex space-x-2'>
                <Search
                  placeholder='Search by name'
                  allowClear
                  onSearch={onSearch}
                  className='w-[200px]'
                />
              </div>
            }
          >
            {isLoading && <Spin />}

            {!isLoading && (
              <div className=''>
                {employee_res?.results.map(
                  (res: IEmployee) => (
                    <div
                      className={`font-semibold hover:bg-gray-100 rounded-lg p-2 border-t-2 ${
                        selectedEmployee ===
                        res.pk
                          ? 'bg-primary text-white'
                          : 'text-black'
                      }`}
                      key={res.pk}
                      onClick={() => {
                        changeSelectedEmployee(
                          res
                        );
                      }}
                    >
                      {`${res.user_info.last_name}, ${res.user_info.first_name}`}
                    </div>
                  )
                )}
              </div>
            )}
          </Card>
        </div>
        <div className='w-2/3'>
          <Card
            title={`${
              selectedEmployee
                ? 'Selected Employee: ' +
                  selectedEmployee
                : 'Please Select Employee'
            }`}
          >
            <div className='flex justify-between'></div>
            <div className=''>
              {!isError && (
                <Form
                  form={form}
                  name='validateOnly'
                  layout='vertical'
                  onFinish={onFinish}
                  autoComplete='off'
                >
                  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-2'>
                    <Form.Item
                      name='name'
                      label='Contact Name'
                      rules={[{ required: true }]}
                      className='w-full'
                      initialValue={contactName}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name='relationship'
                      label='Relationship'
                      rules={[{ required: true }]}
                      className='w-full'
                      initialValue={relationship}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name='phone'
                      label='Contact No'
                      rules={[{ required: true }]}
                      className='w-full'
                      initialValue={contactNo}
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
                          Delete
                        </Button>
                      </Space>
                    </Form.Item>
                  </div>
                </Form>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EmergencyPage;
