import {
  DeleteTwoTone,
  EditTwoTone,
} from '@ant-design/icons';
import { Button, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useNavigate } from 'react-router-dom';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const ContractorsPage = () => {
  const navigate = useNavigate();
  const addNew = () => {
    navigate('/hr/contractors/new');
  };

  const columns: ColumnsType<DataType> = [
    {
      title: 'Full Name',
      width: 150,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'Age',
      width: 85,
      dataIndex: 'age',
      key: 'age',
      fixed: 'left',
      sorter: true,
    },
    {
      title: 'Job Title',
      dataIndex: 'jobTitle',
      key: '1',
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: '1',
    },
    {
      title: 'Work Type',
      dataIndex: 'workType',
      key: '2',
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: '3',
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: '4',
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: '5',
    },
    {
      title: 'Department',
      dataIndex: 'address',
      key: '6',
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
              console.log(e);
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

  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 40,
      address: 'London Park',
    },
  ];

  return (
    <div className='w-full'>
      <div className='flex justify-between'>
        <h3 className='text-xl font-semibold'>
          List of Contractors
        </h3>
        <Button
          type='primary'
          className='bg-primary btn-primary'
          onClick={addNew}
        >
          Add Contractors
        </Button>
      </div>
      <div className='pt-4'>
        <Table
          columns={columns}
          dataSource={data}
          scroll={{ x: 1300 }}
        />
      </div>
    </div>
  );
};

export default ContractorsPage;
