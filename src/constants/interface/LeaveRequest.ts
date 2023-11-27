import { IEmployee } from './Employee';

export interface ILeaveRequest {
  pk: number;
  employee: IEmployee;
  start_date: Date | string;
  end_date: Date | string;
  leave_type: number;
  description: string;
}
