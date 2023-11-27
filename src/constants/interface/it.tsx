export interface CustomUserDataType {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
}

interface workTypeProps {
  value: number | any;
  label: string;
}

export interface EmployeeDataType {
  key: string;
  user_data_org: CustomUserDataType;
  bio: string | any;
  salary: number | any;
  medic_condition: string | null;
  allergies: string | null;
  start_date: any;
  end_date: any;
  notes: string | null;
  photo: any;
  is_manager: boolean | any;
  work_type: workTypeProps;
  payment_method: workTypeProps;
  job_title_data: jobTitleProps;
  gender: workTypeProps;
  department: string[];
}

export interface UsersDataType {
  key: number;
  first_name: string;
  last_name: string;
}
