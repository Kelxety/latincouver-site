import React, { useState } from "react";

import default_profile_picture from "../../../../assets/images/profiles/default/default_profile_picture.png";
import { Form, Input, Button } from "antd";


type LayoutType = Parameters<typeof Form>[0]["layout"];


type EmployeeProfileProps = {
  profile: any,
}


const ProfileView = ({ profile }: EmployeeProfileProps) => {
    const [form] = Form.useForm();

    const [formLayout, setFormLayout] = useState<LayoutType>("vertical");

    const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
        setFormLayout(layout);
    };

    const stringifiedDepartmentNames: string = profile?.department.length === 1 ? profile?.department[0].toUpperCase() : profile?.department.join(", ").toUpperCase();

  return (
    <>
      <section className="grid gap-4 md:grid-cols-2">
        <div className="bg-white text-center p-12 shadow-md md:h-80 md:flex md:flex-col md:items-center xl:w-full">
          <img src={profile?.photo || default_profile_picture} alt="" className="rounded-full object-fill text-center border-solid border-2 border-indigo-600 md:h-32 md:w-32" />
          <h2 className="mt-4 text-[25px] subpixel-antialiased font-semibold mb-2">
            {profile?.user?.first_name} {profile?.user?.last_name}
          </h2>
          <p className="text-[15px]">{stringifiedDepartmentNames}</p>
          <small className="text-slate-400 text-[15px]">
            {profile?.gender === 1 ? "Male" : profile?.gender === 2 ? "Female" : "Male"}
          </small>
        </div>

        <div className="bg-white shadow-md xl:col-span-1 p-3.5">
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
                    <Input placeholder="Job Title" value={profile?.title} />
                </Form.Item>
                <Form.Item label="Work Type">
                    <Input placeholder="Work Type" value={profile?.work_type === 1 ? "Full time" : "Part time"} />
                </Form.Item>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
                <Form.Item label="Salary">
                    <Input placeholder="Salary" value={profile?.salary} />
                </Form.Item>
                <Form.Item label="Payment Method">
                    <Input placeholder="Payment Method" value={profile?.payment_method === 1 ? "Salary" : "Hourly"} />
                </Form.Item>
            </div>
            <div className="grid gap-3 min-[425px]:grid-cols-2">
                <Form.Item label="Start Date">
                    <Input placeholder="Start Date" value={profile?.start_date} />
                </Form.Item>
                <Form.Item label="End Date">
                    <Input placeholder="End Date" value={profile?.end_date} />
                </Form.Item>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
                <Form.Item label="Allergies">
                    <Input placeholder="Allergies" value={profile?.allergies} />
                </Form.Item>
                <Form.Item label="Medical Condition">
                    <Input placeholder="Medical Condition" value={profile?.medical_condition} />
                </Form.Item>
            </div>
            <div className="grid gap-3">
                <Form.Item label="Bio">
                <Input.TextArea rows={6} value={profile?.bio} />
                </Form.Item>
                <Form.Item label="Notes">
                <Input.TextArea rows={6} value={profile?.notes} />
                </Form.Item>
            </div>
            <Form.Item>
              <Button type="primary" className="btn-primary bg-primary" disabled>Update Profile</Button>
            </Form.Item>

          </Form>
        </div>
      </section>
    </>
  );
};

export default ProfileView;
