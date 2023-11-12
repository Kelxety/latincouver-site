export interface EmployeeDataType {
    key: string;
    fname: string;
    lname: string;
    gender: string;
    department: string[];
}

export interface JobTitleDataType {
    key: number;
    name: string;
    status: number;
}

export interface DepartmentDataType {
    name: string;
}

export interface UsersDataType {
    key: number;
    first_name: string;
    last_name: string;
}