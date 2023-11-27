import {
  DeleteTwoTone,
  EditTwoTone,
} from '@ant-design/icons';
import {
  Button,
  Input,
  Select,
  Table,
  Tag,
} from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { fetchLeaveRequest } from '../../../constants/api/services/leave-request';
import { ILeaveRequest } from '../../../constants/interface/LeaveRequest';

const LeavePage = () => {
  const { Search } = Input;
  const navigate = useNavigate();
  const addNew = () => {
    navigate('/hr/leave-request/new');
  };

  const { data, isLoading, isError, refetch } =
    useQuery(
      ['leaveRequest', { statusIndex: null }],
      fetchLeaveRequest
    );
  const columns: ColumnsType<ILeaveRequest> = [
    {
      title: 'Employee Name',
      dataIndex: 'employee_name',
      key: 'emp_name',
      fixed: 'right',
    },
    {
      title: 'Start Date',
      dataIndex: 'start_date',
      key: 'start_date',
    },
    {
      title: 'End Date',
      dataIndex: 'end_date',
      key: 'end_date',
    },
    {
      title: 'Leave Type',
      dataIndex: 'leave_type',
      key: 'leave_type',
      render: (item) => (
        <>
          {item === 'V' ? (
            <Tag color={'green'} key={item}>
              Vacation
            </Tag>
          ) : (
            <Tag color={'volcano'} key={item}>
              Sick Leave
            </Tag>
          )}
        </>
      ),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    // {
    //   title: 'Status',
    //   width: 100,
    //   fixed: 'right',
    //   dataIndex: 'status',
    //   render: (item) => (
    //     <>
    //       {item ? (
    //         <Tag color={'green'} key={item}>
    //           Approved
    //         </Tag>
    //       ) : (
    //         <Tag color={'volcano'} key={item}>
    //           Rejected
    //         </Tag>
    //       )}
    //     </>
    //   ),
    //   key: 'status',
    // },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (e) => (
        <div className='flex'>
          <div
            className='hover:cursor-pointer'
            onClick={() => {
              console.log(e);
              navigate(
                `/hr/leave-request/edit/${e.pk}`
              );
            }}
          >
            <EditTwoTone />
          </div>
          <div className='px-1'>|</div>
          <div className='hover:cursor-pointer'>
            <DeleteTwoTone twoToneColor='#eb2f96' />
          </div>
        </div>
      ),
    },
  ];

  const tableData: ILeaveRequest[] =
    data?.results.map((item, i) => ({
      ...item,
      key: i,
    })) || [];

  const onChange = (value: string) => {
    let statusIndex: number | null = null;
    if (value === 'Active') {
      statusIndex = 1;
    }
    refetch({
      queryKey: ['departments', { statusIndex }],
    });
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log('search:', value);
  };

  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) =>
    (option?.label ?? '')
      .toLowerCase()
      .includes(input.toLowerCase());

  return (
    <div className='w-full'>
      <div className='flex justify-between'>
        <h3 className='text-xl font-semibold'>
          List of Leave Request
        </h3>
        <div className='flex space-x-2'>
          <Search
            placeholder='Search by'
            allowClear
            onSearch={onSearch}
            className='w-[300px]'
          />
          <Select
            showSearch
            placeholder='Select a status'
            optionFilterProp='children'
            onChange={onChange}
            value={'Active'}
            onSearch={onSearch}
            filterOption={filterOption}
            options={[
              {
                value: 'Active',
                label: 'Active',
              },
              {
                value: 'Inactive',
                label: 'Inactive',
              },
            ]}
          />
          <Button
            type='primary'
            className='bg-primary btn-primary'
            onClick={addNew}
          >
            New
          </Button>
        </div>
      </div>
      <div className='pt-4'>
        {!isError && (
          <Table
            columns={columns}
            dataSource={tableData}
            loading={isLoading}
            scroll={{ x: 1300 }}
          />
        )}
      </div>
    </div>
  );
};

export default LeavePage;
