import React, { useEffect, useState } from "react";

import {
  Form,
  Input,
  Button,
  Select,
  InputNumber,
  DatePicker,
  Spin,
  Checkbox,
} from "antd";

import type { CheckboxChangeEvent } from 'antd/es/checkbox';

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

type LayoutType = Parameters<typeof Form>[0]["layout"];

type EmployeeProfileProps = {
  employee_profile: any;
  profile_loading: boolean;
  job_titles: any;
  handleChangeDepartments: (value: string[]) => void;
  handleChangeWorkType: (value: string) => void;
  handleChangePaymentMethod: (value: string) => void;
  handleChangeJobTitle: (value: number) => void;
  departments_api_data: any;
  onChangeIsManager: (e: CheckboxChangeEvent) => void,
  profile_department: any[],
  handleChangeNotes:  (value: string) => void,
  handleChangeBio: (value: string) => void,
  onChangeAllergies: (value: string) => void,
  onChangeMedicalCondition: (value: string) => void,
  employee_profile_data: any,
  onChangeSalary: (value: number) => void,
  onChangeStartDate: any,
  onChangeEndDate: any,
  onChangeContract: (value: string) => void,
  SubmitUpdateForm: () => void,
  contextHolder: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
};


dayjs.extend(customParseFormat);


const ProfileView = ({
  employee_profile,
  profile_loading,
  job_titles,
  handleChangeDepartments,
  handleChangeWorkType,
  handleChangePaymentMethod,
  handleChangeJobTitle,
  departments_api_data,
  onChangeIsManager,
  profile_department,
  handleChangeNotes,
  handleChangeBio,
  onChangeAllergies,
  onChangeMedicalCondition,
  employee_profile_data,
  onChangeSalary,
  onChangeStartDate,
  onChangeEndDate,
  onChangeContract,
  SubmitUpdateForm,
  contextHolder
}: EmployeeProfileProps) => {

  const [startDate, setStartDate] = useState<any>();
  const [endDate, setEndDate] = useState<any>();

  useEffect(()=> {
    setStartDate(dayjs(employee_profile_data?.start_date, "YYYY-MM-DD"));
    setEndDate(dayjs(employee_profile_data?.end_date, "YYYY-MM-DD"));

    return () => {
      setStartDate(null);
      setEndDate(null);
    }
  }, [employee_profile_data]);

  const stringifiedDepartmentNames: string = employee_profile?.department?.length === 1 ? employee_profile?.department[0].toUpperCase() : employee_profile?.department?.join(", ").toUpperCase();
  return (
    <>
      {contextHolder}
      <section className="grid gap-4 md:grid-cols-2">
        {profile_loading ? (
          <Spin spinning={profile_loading} fullscreen />
        ) : (
          <>
            <div className="bg-white text-center p-12 shadow-lg rounded-lg md:h-80 md:flex md:flex-col md:items-center xl:w-full">
              <img
                src={employee_profile?.photo}
                alt=""
                className="rounded-full object-cover text-center border-solid border-4 border-neutral-400 md:h-32 md:w-32"
              />
              <h2 className="mt-4 text-[30px] subpixel-antialiased font-semibold mb-2">
                {employee_profile?.user_info.toLowerCase().replace(/\b\w/g, (s: string) => s.toUpperCase())}
              </h2>
              <p className="text-[17px]">{stringifiedDepartmentNames}</p>
              <small className="text-slate-400 text-[17px]">
                {employee_profile?.gender === 1
                  ? "Male"
                  : employee_profile?.gender === 2
                  ? "Female"
                  : "Male"}
              </small>
            </div>
            <div className="bg-white shadow-lg rounded-lg xl:col-span-1 p-3.5">
              <form
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className='grid gap-1 my-4'>
                    <label htmlFor="">Job Title</label>
                    <Select
                      style={{ width: "100%" }}
                      onChange={handleChangeJobTitle}
                      options={job_titles}
                      value={employee_profile_data?.title}
                    />
                  </div>
                  <div className='grid gap-1 my-4'>
                    <label htmlFor="">Work Type</label>
                    <Select
                      value={
                        employee_profile_data?.work_type
                      }
                      style={{ width: "100%" }}
                      onChange={handleChangeWorkType}
                      options={[
                        { value: 1, label: "Full Time" },
                        { value: 2, label: "Part Time" },
                      ]}
                    />
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className='grid gap-1 my-4'>
                    <label htmlFor="">Payment Method</label>
                    <Select
                      value={
                        employee_profile_data?.pay_method
                      }
                      style={{ width: "100%" }}
                      onChange={handleChangePaymentMethod}
                      options={[
                        { value: 1, label: "Salary" },
                        { value: 2, label: "Hourly" },
                      ]}
                    />
                  </div>

                  <div className='grid gap-1 my-4'>
                    <label htmlFor="">Salary</label>
                    <InputNumber
                      min={0}
                      max={999999}
                      value={employee_profile_data?.salary}
                      onChange={(e) => onChangeSalary(e)}
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div className="grid gap-3 min-[425px]:grid-cols-2">
                  <div className='grid gap-1 my-4'>
                    <label htmlFor="">Start Date</label>
                    <DatePicker
                      placeholder="Start Date"
                      style={{ width: "100%" }}
                      // value={employee_profile_data?.start_date}
                      value={startDate}
                      onChange={onChangeStartDate}
                    />
                  </div>
                  <div className='grid gap-1 my-4'>
                    <label htmlFor="">End Date</label>
                    <DatePicker
                      format={"YYYY/MM/DD"}
                      placeholder="End Date"
                      style={{ width: "100%" }}
                      // value={employee_profile_data?.end_date}
                      value={endDate}
                      onChange={onChangeEndDate}
                    />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">

                  <div className='grid gap-1 my-4'>
                    <label htmlFor="">Allergies</label>
                    <Input
                      placeholder="Allergies"
                      value={employee_profile_data?.allergies}
                      onChange={(e) => onChangeAllergies(e.target.value)}
                    />
                  </div>
                  <div className='grid gap-1 my-4'>
                    <label htmlFor="">Medical Condition</label>
                    <Input
                      placeholder="Medical Condition"
                      value={employee_profile_data?.medical_condition}
                      onChange={(e) => onChangeMedicalCondition(e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">

                  <div className='grid gap-1 my-4'>
                    <label htmlFor="">Contract</label>
                    <Input
                      placeholder="Contract"
                      value={employee_profile_data?.contract}
                      onChange={(e) => onChangeContract(e.target.value)}
                    />
                  </div>

                  <div className='grid gap-1 my-4'>
                    <label htmlFor="">Departments</label>
                    <Select
                      mode="multiple"
                      defaultValue={profile_department}
                      placeholder="Departments"
                      style={{ width: "100%" }}
                      onChange={handleChangeDepartments}
                      options={departments_api_data}
                    />
                  </div>

                </div>
                <div className="grid gap-3 sm:grid-cols-2">

                  <div className='grid gap-1 my-4'>
                    <label htmlFor="">Bio</label>
                    <Input placeholder="Bio" value={employee_profile_data?.bio} onChange={(e) => handleChangeBio(e.target.value)}/>
                  </div>

                  <div className='grid gap-1 my-4'>
                    <label htmlFor="">Notes</label>
                    <Input
                      placeholder="Notes"
                      value={employee_profile_data?.notes}
                      onChange={(e) => handleChangeNotes(e.target.value)}
                    />
                  </div>

                  <div className='grid gap-1 my-4'>
                    <Checkbox onChange={onChangeIsManager} checked={employee_profile_data?.is_manager}>Is Manager</Checkbox>
                  </div>
                </div>
                <Form.Item>
                  <Button
                    type="primary"
                    className="btn-primary bg-primary"
                    onClick={SubmitUpdateForm}
                  >
                    Update Profile
                  </Button>
                </Form.Item>
              </form>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default ProfileView;
