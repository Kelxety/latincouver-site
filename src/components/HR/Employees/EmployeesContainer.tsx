import React, { useEffect, useState } from 'react'
import EmployeeView from "./EmployeeView"

import { BASE_ENDPOINT } from "../../../constants/api/BaseEndpoint"
import { HR_EMPLOYEES } from "../../../constants/api/hr"
import api from '../../../constants/Interceptor/Interceptor'


function EmployeesContainer() {
    return <EmployeeView/>
}

export default EmployeesContainer