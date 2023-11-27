import { IEmployee } from './Employee';

export interface ISchedule {
  id: number;
  key: number;
  employee: IEmployee;
  start_time: Date;
  home_office: string;
}
