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
import { fetchDepartments } from '../../../constants/api/services/department';
import { IDepartment } from '../../../constants/interface/Department';

const DepartmentPage = () => {
  const { Search } = Input;
  const navigate = useNavigate();
  const addNew = () => {
    navigate('/hr/departments/new');
  };

  const { data, isLoading, isError, refetch } =
    useQuery(
      ['departments', { statusIndex: null }],
      fetchDepartments
    );
  const columns: ColumnsType<IDepartment> = [
    {
      title: 'Department Name',
      dataIndex: 'name',
      key: 'name',
      fixed: 'right',
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

  const tableData: IDepartment[] =
    data?.results.map((item) => ({
      ...item,
      key: item.name,
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
          List of Departments
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

export default DepartmentPage;
