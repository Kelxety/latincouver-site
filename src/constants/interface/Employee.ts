import { IJobTitle } from './JobTitle';
import { CustomUserDataType } from './it';

interface workTypeProps {
  value: number;
  label: string;
}

export interface IEmployee {
  key: string;
  pk: number;
  user_info: {
    last_name: string;
    first_name: string;
  };
  user_data_org: CustomUserDataType;
  bio: string;
  salary: number;
  medic_condition: string | null;
  allergies: string | null;
  start_date: Date;
  end_date: Date;
  notes: string | null;
  photo: string;
  is_manager: boolean;
  work_type: workTypeProps;
  payment_method: workTypeProps;
  job_title_data: IJobTitle;
  gender: workTypeProps;
  department: string[];
}
