import {
  mdiAccountGroup,
  mdiCalendar,
  mdiCurrencyUsd,
  mdiHandshake,
  mdiLogout,
  mdiNotebook,
  mdiViewDashboardVariant,
} from '@mdi/js';
import Icon from '@mdi/react';
import { Popconfirm, message } from 'antd';
import companylogo from '../../assets/images/Latincouver_Color.png';

import {
  Link,
  useNavigate,
} from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const confirm = () => {
    message.success('Successfully logout');
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    navigate('/auth/login');
  };

  const cancel = () => {
    return;
  };

  return (
    <>
      <nav
        className='sidebar sidebar-offcanvas'
        id='sidebar'
      >
        <ul className='nav'>
          {/* <li className='nav-item'>
            <Link className='nav-link' to={'hr/'}>
              <img
                src={companylogo}
                width={200}
                alt=''
              />
              <span className='menu-title'>
                Human resources
              </span>
            </Link>
          </li> */}

          <li className='nav-item sidebar-category'>
            <p>Navigation</p>
            <span></span>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to={'/'}>
              {/* <i className="mdi mdi-view-quilt menu-icon"></i> */}
              <Icon
                path={mdiViewDashboardVariant}
                style={{
                  width: '20px',
                  height: '20px',
                  marginRight: '10px',
                }}
                className='menu-icon'
              />
              <span className='menu-title'>
                Dashboard
              </span>
              <div className='badge badge-info badge-pill'>
                2
              </div>
            </Link>
          </li>
          <li className='nav-item sidebar-category'>
            <p>Components</p>
            <span></span>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to={'hr/'}>
              {/* <i className="mdi mdi-view-headline menu-icon"></i> */}
              <Icon
                path={mdiAccountGroup}
                style={{
                  width: '20px',
                  height: '20px',
                  marginRight: '10px',
                }}
                className='menu-icon'
              />
              <span className='menu-title'>
                Human resources
              </span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to={'/'}>
              {/* <i className="mdi mdi-chart-pie menu-icon"></i> */}
              <Icon
                path={mdiNotebook}
                style={{
                  width: '20px',
                  height: '20px',
                  marginRight: '10px',
                }}
                className='menu-icon'
              />
              <span className='menu-title'>
                PMO
              </span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to={'/'}>
              <Icon
                path={mdiCalendar}
                style={{
                  width: '20px',
                  height: '20px',
                  marginRight: '10px',
                }}
                className='menu-icon'
              />
              <span className='menu-title'>
                Events
              </span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to={'/'}>
              <Icon
                path={mdiHandshake}
                style={{
                  width: '20px',
                  height: '20px',
                  marginRight: '10px',
                }}
              />
              <span className='menu-title'>
                Grants
              </span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to={'/'}>
              {/* <i className="mdi mdi-emoticon menu-icon"></i> */}
              <Icon
                path={mdiCurrencyUsd}
                style={{
                  width: '20px',
                  height: '20px',
                  marginRight: '10px',
                }}
                className='menu-icon'
              />
              <span className='menu-title'>
                Sales
              </span>
            </Link>
          </li>
          <Popconfirm
            title='Logout'
            description='Are you sure to logout?'
            onConfirm={confirm}
            onCancel={cancel}
            okText='Yes'
            okType='default'
            cancelText='No'
          >
            <li className='nav-item'>
              <Link className='nav-link' to={'/'}>
                <Icon
                  path={mdiLogout}
                  style={{
                    width: '20px',
                    height: '20px',
                    marginRight: '10px',
                  }}
                  className='menu-icon'
                />
                <span className='menu-title'>
                  Logout
                </span>
              </Link>
            </li>
          </Popconfirm>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
