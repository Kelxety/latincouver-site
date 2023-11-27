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
import { fetchSchedule } from '../../../constants/api/services/schedule';
import { ISchedule } from '../../../constants/interface/Schedule';

const SchedulePage = () => {
  const { Search } = Input;
  const navigate = useNavigate();
  const addNew = () => {
    navigate('/hr/schedules/new');
  };

  const { data, isLoading, isError, refetch } =
    useQuery(
      ['schedule', { statusIndex: null }],
      fetchSchedule
    );
  const columns: ColumnsType<ISchedule> = [
    {
      title: 'Employee Name',
      dataIndex: 'employee.first_name',
      width: 300,
      key: 'name',
    },
    {
      title: 'Start Time',
      dataIndex: 'start_time',
      key: 'start_time',
      width: 300,
    },
    {
      title: 'Home Office',
      dataIndex: 'home_office',
      key: 'start_time',
    },
    {
      title: 'Status',
      width: 100,
      fixed: 'right',
      dataIndex: 'status',
      render: (item) => (
        <>
          {item ? (
            <Tag color={'green'} key={item}>
              Active
            </Tag>
          ) : (
            <Tag color={'volcano'} key={item}>
              Inactive
            </Tag>
          )}
        </>
      ),
      key: 'status',
    },
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
              navigate(
                `/hr/departments/edit/${e.id}`
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

  const tableData: ISchedule[] =
    data?.results.map((item) => ({
      ...item,
      key: item.key,
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
          List of all Schedules
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

export default SchedulePage;
