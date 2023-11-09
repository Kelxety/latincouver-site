import React from 'react'
import { Card } from 'antd';
import Icon from '@mdi/react';
import { mdiAccountGroup, mdiAlphaJBoxOutline, mdiBookClock, mdiCarBrakeAlert, mdiClockOutline, mdiDomain, mdiEmoticonSickOutline, mdiHandHeart, mdiOfficeBuildingOutline, mdiUmbrellaBeachOutline } from '@mdi/js';

import { Link } from "react-router-dom";

import "./hr.css"
const HRView = () => {
  return (
    <>
        <section className='
            w-full grid gap-4 lm:flex lm:flex-col lm:items-center
            md:grid md:gap-4 md:grid-cols-3 md:grid-rows-4 xl:grid-cols-4 laptopL:grid-cols-5
        '
        >
            <div className='flex justify-center items-center lm:w-[18.75rem] md:w-[14.375rem] laptopL:w-full'>
                <Card className='w-full h-customheight167 shadow-md'>
                    <Link to={`employees`} className='flex flex-col justify-center items-center hover:no-underline text-center'>
                        <Icon path={mdiAccountGroup} size={4} className='text-primary' title={"Employees"} />
                        <p className='hover:no-underline'>EMPLOYEES</p>
                    </Link>
                </Card>
            </div>

            <div className='flex justify-center items-center lm:w-[18.75rem] md:w-[14.375rem] laptopL:w-full'>
                <Card className='w-full h-customheight167 shadow-md'>
                    <Link to={"/"} className='flex flex-col justify-center items-center hover:no-underline text-center'>
                        <Icon path={mdiDomain} size={4} className='text-primary' title={"Contractors"} />
                        <p className='hover:no-underline'>CONTRACTOR</p>
                    </Link>
                </Card>
            </div>

            <div className='flex justify-center items-center lm:w-[18.75rem] md:w-[14.375rem] laptopL:w-full'>
                <Card className='w-full h-customheight167 shadow-md'>
                    <Link to={`volunteers`} className='flex flex-col justify-center items-center hover:no-underline text-center'>
                        <Icon path={mdiHandHeart} size={4} className='text-primary' title={"Volunteers"} />
                        <p className='hover:no-underline'>VOLUNTEERS</p>
                    </Link>
                </Card>
            </div>

            
            <div className='flex justify-center items-center lm:w-[18.75rem] md:w-[14.375rem] laptopL:w-full'>
                <Card className='w-full h-customheight167 shadow-md'>
                    <Link to={"/"} className='flex flex-col justify-center items-center hover:no-underline text-center'>
                        <Icon path={mdiBookClock} size={4} className='text-primary' title={"Timesheets"} />
                        <p className='hover:no-underline'>TIMESHEETS</p>
                    </Link>
                </Card>
            </div>

            <div className='flex justify-center items-center lm:w-[18.75rem] md:w-[14.375rem] laptopL:w-full'>
                <Card className='w-full h-customheight167 shadow-md'>
                    <Link to={"/"} className='flex flex-col justify-center items-center hover:no-underline text-center'>
                        <Icon path={mdiClockOutline} size={4} className='text-primary' title={"Schedules"} />
                        <p className='hover:no-underline'>SCHEDULES</p>
                    </Link>
                </Card>
            </div>
            <div className='flex justify-center items-center lm:w-[18.75rem] md:w-[14.375rem] laptopL:w-full'>
                <Card className='w-full h-customheight167 shadow-md'>
                    <Link to={"/"} className='flex flex-col justify-center items-center hover:no-underline text-center'>
                        <Icon path={mdiAlphaJBoxOutline} size={4} className='text-primary' title={"Job Titles"} />
                        <p className='hover:no-underline'>JOB TITLES</p>
                    </Link>
                </Card>
            </div>

            <div className='flex justify-center items-center lm:w-[18.75rem] md:w-[14.375rem] laptopL:w-full'>
                <Card className='w-full h-customheight167 shadow-md'>
                    <Link to={"/"} className='flex flex-col justify-center items-center hover:no-underline text-center'>
                        <Icon path={mdiEmoticonSickOutline} size={4} className='text-primary' title={"Leave Requests"} />
                        <p className='hover:no-underline'>LEAVE REQUESTS</p>
                    </Link>
                </Card>
            </div>
            <div className='flex justify-center items-center lm:w-[18.75rem] md:w-[14.375rem] laptopL:w-full'>
                <Card className='w-full h-customheight167 shadow-md'>
                    <Link to={"/"} className='flex flex-col justify-center items-center hover:no-underline text-center'>
                        <Icon path={mdiUmbrellaBeachOutline} size={4} className='text-primary' title={"Vacation"} />
                        <p className='hover:no-underline'>VACATION</p>
                    </Link>
                </Card>
            </div>

            <div className='flex justify-center items-center lm:w-[18.75rem] md:w-[14.375rem] laptopL:w-full'>
                <Card className='w-full h-customheight167 shadow-md'>
                    <Link to={"/"} className='flex flex-col justify-center items-center hover:no-underline text-center'>
                        <Icon path={mdiCarBrakeAlert} size={4} className='text-primary' title={"Emergency"} />
                        <p className='hover:no-underline'>EMERGENCY</p>
                    </Link>
                </Card>
            </div>

            <div className='flex justify-center items-center lm:w-[18.75rem] md:w-[14.375rem] laptopL:w-full'>
                <Card className='w-full h-customheight167 shadow-md'>
                    <Link to={"/"} className='flex flex-col justify-center items-center hover:no-underline text-center'>
                        <Icon path={mdiOfficeBuildingOutline} size={4} className='text-primary' title={"Departments"} />
                        <p className='hover:no-underline'>DEPARTMENTS</p>
                    </Link>
                </Card>
            </div>
        </section>
    </>
  )
}

export default HRView