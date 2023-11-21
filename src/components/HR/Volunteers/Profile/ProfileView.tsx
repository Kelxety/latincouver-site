import React, { useState } from "react";

import default_profile_picture from "../../../../assets/images/profiles/default/default_profile_picture.png";
import { Form, Input, Button, Select } from "antd";


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


    const onSearch = (value: string) => {
      console.log('search:', value);
    };

  return (
    <>
      <section className="grid gap-4 md:grid-cols-2">
        <div className="bg-white text-center p-12 shadow-md md:h-80 md:flex md:flex-col md:items-center xl:w-full">
          <img src={profile?.photo} alt="" className="rounded-full object-cover text-center border-solid border-4 border-neutral-400 md:h-32 md:w-32" />
          <h2 className="mt-4 text-[25px] subpixel-antialiased font-semibold mb-2">
            {profile?.user_info}
          </h2>
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
                <Form.Item label="Application">
                    <Input placeholder="Application" value={profile?.applciation_name} />
                </Form.Item>
                <Form.Item label="Supervisor">
                    <Input placeholder="supervisor" value={profile?.salary} />
                </Form.Item>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
                <Form.Item label="Country">
                  <Select
                    showSearch
                    onSearch={onSearch}
                    defaultValue="lucy"
                    style={{ width: 200 }}
                    // onChange={handleChange}
                    options={[
                      { value: 'jack', label: 'Jack' },
                      { value: 'lucy', label: 'Lucy' },
                      { value: 'Yiminghe', label: 'yiminghe' },
                      { value: 'disabled', label: 'Disabled', disabled: true },
                    ]}
                  />
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
