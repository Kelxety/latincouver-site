import { createBrowserRouter } from 'react-router-dom';

import HomePageContainer from '../Home/HomePageContainer';
import DashboardContainer from '../Dashboard/DashboardContainer';

// HR module
import HRContainer from '../HR/HRContainer';
import EmployeesContainer from '../HR/Employees/EmployeesContainer';
import ProfileContainer from '../HR/Employees/Profile/ProfileContainer';
import VolunteerContainer from '../HR/Volunteers/VolunteerContainer';
import VolunteerProfileContainer from '../HR/Volunteers/Profile/VolunteerProfileContainer';

// Auth
import LoginPage from '../auth/LoginPage';

import ErrorPage from '../error/ErrorPage';
import ContractorsPage from '../HR/Contractors/ContractorPage';
import NewContractor from '../HR/Contractors/New/NewContractor';
import ConfigurationList from '../HR/Configurations/ConfigurationList';
import TimesheetsPage from '../HR/Timesheets/TimesheetsPage';
import SchedulerPage from '../HR/Timesheets/Scheduler/SchedulerPage';
import JobTitlesPage from '../HR/Job-titles/JobTitlesPage';
import NewJobTitle from '../HR/Job-titles/New/NewJobTitle';
import DepartmentPage from '../HR/Departments/DepartmentPage';
import NewDepartment from '../HR/Departments/New/NewDepartments';
import EditDepartments from '../HR/Departments/Edit/EditDepartments';
import EditJobTitle from '../HR/Job-titles/Edit/EditJobTitle';
import EmergencyPage from '../HR/Emergency/EmergencyPage';
import SchedulePage from '../HR/Schedule/SchedulePage';
import LeavePage from '../HR/LeaveRequest/LeaveRequestPage';
import NewLeaveRequest from '../HR/LeaveRequest/New/NewLeaveRequest';
import EditLeaveRequest from '../HR/LeaveRequest/Edit/EditLeaveRequest';

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePageContainer />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <DashboardContainer />,
        },
        {
          path: 'hr',
          element: <HRContainer />,
        },
        {
          path: 'hr/employees',
          element: <EmployeesContainer />,
        },

        {
          path: 'hr/employees/employee/:employeeId',
          element: <ProfileContainer />,
        },
        {
          path: 'hr/volunteers',
          element: <VolunteerContainer />,
        },
        {
          path: 'hr/volunteers/volunteer/:volunteerId',
          element: <VolunteerProfileContainer />,
        },
        {
          path: 'hr/contractors',
          element: <ContractorsPage />,
        },
        {
          path: 'hr/contractors/new',
          element: <NewContractor />,
        },
        {
          path: 'hr/contractors/new',
          element: <NewContractor />,
        },
        {
          path: 'hr/job-titles',
          element: <JobTitlesPage />,
        },
        {
          path: 'hr/job-titles/new',
          element: <NewJobTitle />,
        },
        {
          path: 'hr/job-titles/edit/:id',
          element: <EditJobTitle />,
        },
        {
          path: 'hr/configuration',
          element: <ConfigurationList />,
        },
        {
          path: 'hr/timesheets',
          element: <TimesheetsPage />,
        },
        {
          path: 'hr/timesheets/scheduler',
          element: <SchedulerPage />,
        },
        {
          path: 'hr/departments',
          element: <DepartmentPage />,
        },
        {
          path: 'hr/departments/new',
          element: <NewDepartment />,
        },
        {
          path: 'hr/departments/edit/:id',
          element: <EditDepartments />,
        },
        {
          path: 'hr/emergency',
          element: <EmergencyPage />,
        },
        {
          path: 'hr/schedules',
          element: <SchedulePage />,
        },
        {
          path: 'hr/leave-request',
          element: <LeavePage />,
        },
        {
          path: 'hr/leave-request/new',
          element: <NewLeaveRequest />,
        },
        {
          path: 'hr/leave-request/edit/:id',
          element: <EditLeaveRequest />,
        },
      ],
    },
    {
      path: 'auth/login',
      element: <LoginPage />,
      errorElement: <ErrorPage />,
    },
  ]);

  return router;
};

export default Routes;
