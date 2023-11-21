import React, { useState } from "react";

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
}: EmployeeProfileProps) => {
  const [form] = Form.useForm();

  const [formLayout, setFormLayout] = useState<LayoutType>("vertical");

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };

  const stringifiedDepartmentNames: string = employee_profile?.department?.length === 1 ? employee_profile?.department[0].toUpperCase() : employee_profile?.department?.join(", ").toUpperCase();
  return (
    <>
      <section className="grid gap-4 md:grid-cols-2">
        {profile_loading ? (
          <Spin spinning={profile_loading} fullscreen />
        ) : (
          <>
            <div className="bg-white text-center p-12 shadow-lg rounded-lg md:h-80 md:flex md:flex-col md:items-center xl:w-full">
              <img
                src={employee_profile?.photo}
                alt=""
                className="rounded-full object-cover border-solid border-4 border-neutral-400 md:h-36 md:w-36"
              />
              <h2 className="mt-4 text-[30px] subpixel-antialiased font-semibold mb-2">
                {employee_profile?.user.toLowerCase().replace(/\b\w/g, (s: string) => s.toUpperCase())}
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
              <Form
                layout={formLayout}
                form={form}
                initialValues={{ layout: formLayout }}
                onValuesChange={onFormLayoutChange}
                // style={{ maxWidth: formLayout === "inline" ? "none" : 600 }}
                className="w-full"
                size={"large"}
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <Form.Item label="Job Title">
                    <Select
                      style={{ width: "100%" }}
                      onChange={handleChangeJobTitle}
                      options={job_titles}
                      value={employee_profile_data?.title}
                    />
                  </Form.Item>
                  <Form.Item label="Work Type">
                    <Select
                      defaultValue={
                        employee_profile_data?.work_type
                      }
                      style={{ width: "100%" }}
                      onChange={handleChangeWorkType}
                      options={[
                        { value: "FT", label: "Full Time" },
                        { value: "PT", label: "Part Time" },
                      ]}
                    />
                  </Form.Item>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Form.Item label="Payment Method">
                    <Select
                      defaultValue={
                        employee_profile_data?.pay_method
                      }
                      style={{ width: "100%" }}
                      onChange={handleChangePaymentMethod}
                      options={[
                        { value: "SL", label: "Salary" },
                        { value: "HR", label: "Hourly" },
                      ]}
                    />
                  </Form.Item>

                  <Form.Item label="Salary">
                    <InputNumber
                      min={0}
                      max={999999}
                      value={employee_profile_data?.salary}
                      onChange={(e) => onChangeSalary(e)}
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                </div>
                <div className="grid gap-3 min-[425px]:grid-cols-2">
                  <Form.Item label="Start Date">
                    <DatePicker
                      format={"YYYY-MM-DD"}
                      placeholder="Start Date"
                      style={{ width: "100%" }}
                      value={employee_profile_data?.start_date}
                      onChange={onChangeStartDate}
                    />
                  </Form.Item>
                  <Form.Item label="End Date">
                    <DatePicker
                      format={"YYYY/MM/DD"}
                      placeholder="End Date"
                      style={{ width: "100%" }}
                      value={employee_profile_data?.end_date}
                      onChange={onChangeEndDate}
                    />
                  </Form.Item>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <Form.Item label="Allergies">
                    <Input
                      placeholder="Allergies"
                      value={employee_profile_data?.allergies}
                      onChange={(e) => onChangeAllergies(e.target.value)}
                    />
                  </Form.Item>
                  <Form.Item label="Medical Condition">
                    <Input
                      placeholder="Medical Condition"
                      value={employee_profile_data?.medical_condition}
                      onChange={(e) => onChangeMedicalCondition(e.target.value)}
                    />
                  </Form.Item>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Form.Item label="Contract">
                    <Input
                      placeholder="Contract"
                      value={employee_profile_data?.contract}
                      onChange={(e) => onChangeContract(e.target.value)}
                    />
                  </Form.Item>

                  <Form.Item label="Departments">
                    <Select
                      mode="multiple"
                      defaultValue={profile_department}
                      placeholder="Departments"
                      style={{ width: "100%" }}
                      onChange={handleChangeDepartments}
                      options={departments_api_data}
                    />
                  </Form.Item>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Form.Item label="Bio">
                    <Input placeholder="Bio" value={employee_profile_data?.bio} onChange={(e) => handleChangeBio(e.target.value)}/>
                  </Form.Item>
                  <Form.Item label="Notes">
                    <Input
                      placeholder="Notes"
                      value={employee_profile_data?.notes}
                      onChange={(e) => handleChangeNotes(e.target.value)}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Checkbox onChange={onChangeIsManager} checked={employee_profile_data?.is_manager}>Is Manager</Checkbox>
                  </Form.Item>
                </div>
                <Form.Item>
                  <Button
                    type="primary"
                    className="btn-primary bg-primary"
                    disabled
                  >
                    Update Profile
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default ProfileView;
