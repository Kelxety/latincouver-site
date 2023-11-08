import React, { useState } from "react";

import default_profile_picture from "../../../../assets/images/profiles/default/default_profile_picture.png";
import { Form, Input, Button } from "antd";


type LayoutType = Parameters<typeof Form>[0]["layout"];

const ProfileView = () => {
    const [form] = Form.useForm();

    const [formLayout, setFormLayout] = useState<LayoutType>("vertical");

    const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
        setFormLayout(layout);
    };

  return (
    <>
      <section className="grid gap-4 md:grid-cols-2">
        <div className="bg-white text-center p-12 md:h-80 md:flex md:flex-col md:items-center xl:w-full">
            {/* xl:max-w-lg */}
          <img src={default_profile_picture} alt="" className="rounded-full text-center md:h-32 md:w-32" />
          <h2 className="mt-4 text-lg subpixel-antialiased font-semibold">
            Employee Name
          </h2>
          <p>DEPARTMENT</p>
          <small className="text-slate-400">GENDER</small>
        </div>

        <div className="bg-white xl:col-span-1">
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
                    <Input placeholder="Job Title" />
                </Form.Item>
                <Form.Item label="Work Type">
                    <Input placeholder="Work Type" />
                </Form.Item>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
                <Form.Item label="Salary">
                    <Input placeholder="Salary" />
                </Form.Item>
                <Form.Item label="Payment Method">
                    <Input placeholder="Payment Method" />
                </Form.Item>
            </div>
            <div className="grid gap-3 min-[425px]:grid-cols-2">
                <Form.Item label="Start Date">
                    <Input placeholder="Start Date" />
                </Form.Item>
                <Form.Item label="End Date">
                    <Input placeholder="End Date" />
                </Form.Item>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
                <Form.Item label="Allergies">
                    <Input placeholder="Allergies" />
                </Form.Item>
                <Form.Item label="Medical Condition">
                    <Input placeholder="Medical Condition" />
                </Form.Item>
            </div>
            <div className="grid gap-3">
                <Form.Item label="Bio">
                <Input.TextArea rows={6} />
                </Form.Item>
                <Form.Item label="Notes">
                <Input.TextArea rows={6} />
                </Form.Item>
            </div>
            <Form.Item>
              <Button type="primary" className="btn-primary bg-primary">Update Profile</Button>
            </Form.Item>

          </Form>
        </div>
      </section>
    </>
  );
};

export default ProfileView;
