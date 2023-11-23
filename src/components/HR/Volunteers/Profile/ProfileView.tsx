import React, { useEffect, useState } from "react";

import default_profile_picture from "../../../../assets/images/profiles/default/default_profile_picture.png";
import { Form, Input, Button, Select } from "antd";


type LayoutType = Parameters<typeof Form>[0]["layout"];


type EmployeeProfileProps = {
  profile: any,
  countriesAPI: any[],
  handleChangeCountry: (value: string) => void,
  volunteering_application: any[],
  handleChangeApplication: (value: number) => void,
  supervisor_data: any[],
  handleChangeSupervisor: (value: number) => void,
  SubmitUpdateForm: () => void,
  contextHolderAlert: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
}


const ProfileView = ({
  profile, countriesAPI, handleChangeCountry, volunteering_application, handleChangeApplication, supervisor_data,
  handleChangeSupervisor, SubmitUpdateForm, contextHolderAlert
}: EmployeeProfileProps) => {
    const [form] = Form.useForm();

    const [formLayout, setFormLayout] = useState<LayoutType>("vertical");

    const [volunteerName, setVolunteerName] = useState<string>("");
    const [volunteerProfile, setVolunteerProfile] = useState<any>(null);

    useEffect(()=> {
      setVolunteerName(profile?.user_info);
      setVolunteerProfile(profile?.photo);

      return () => {
        setVolunteerName("");
        setVolunteerProfile(null);
      }
    }, [profile]);

    console.log("volunteerName");
    console.log(volunteerName);

    const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
        setFormLayout(layout);
    };


    const onSearch = (value: string) => {
      console.log('search:', value);
    };

  return (
    <>
      {contextHolderAlert}
      <section className="grid gap-4 md:grid-cols-2">
        <div className="bg-white text-center p-12 shadow-md md:h-80 md:flex md:flex-col md:items-center xl:w-full">
          <img src={volunteerProfile} alt="" className="rounded-full object-cover text-center border-solid border-4 border-neutral-400 md:h-32 md:w-32" />
          <h2 className="mt-4 text-[25px] subpixel-antialiased font-semibold mb-2">
            {/* {profile?.user_info.toLowerCase().replace(/\b\w/g, (s: string) => s.toUpperCase())} */}
            {volunteerName}
          </h2>
          <small className="text-slate-400 text-[15px]">
            VOLUNTEER
          </small>
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
                  <Select
                    showSearch
                    onSearch={onSearch}
                    value={profile?.application}
                    style={{ width: "100%" }}
                    onChange={handleChangeApplication}
                    options={volunteering_application}
                  />
                </Form.Item>
                <Form.Item label="Supervisor">
                  <Select
                    showSearch
                    onSearch={onSearch}
                    value={profile?.supervisor}
                    style={{ width: "100%" }}
                    onChange={handleChangeSupervisor}
                    options={supervisor_data}
                  />
                </Form.Item>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
                <Form.Item label="Country">
                  <Select
                    showSearch
                    onSearch={onSearch}
                    value={profile?.country}
                    style={{ width: 400 }}
                    onChange={handleChangeCountry}
                    options={countriesAPI}
                  />
                </Form.Item>
            </div>
            <Form.Item>
              <Button type="primary" className="btn-primary bg-primary" onClick={SubmitUpdateForm}>Update Profile</Button>
            </Form.Item>

          </Form>
        </div>
      </section>
    </>
  );
};

export default ProfileView;
