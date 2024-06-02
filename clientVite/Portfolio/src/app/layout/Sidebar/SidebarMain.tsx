// import {
//   CDBSidebar,
//   CDBSidebarContent,
//   CDBSidebarFooter,
//   CDBSidebarHeader,
//   CDBSidebarMenu,
//   CDBSidebarMenuItem,
// } from 'cdbreact';
// import { Link } from 'react-router-dom';
// import { dataSide } from './SidebarItems/SideBarItems';

const Sidebar = () => {
  return (
    <div
      style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
    >
      {/* <CDBSidebar>
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            Sidebar
          </a>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            {dataSide.map((path) => (
              <Link  to={path.navigate} className="activeClicked">
                <CDBSidebarMenuItem icon={path.icon}>{path.title}</CDBSidebarMenuItem>
              </Link>
            ))}
          </CDBSidebarMenu>
        </CDBSidebarContent>
        <CDBSidebarFooter
        //  style={{ textAlign: 'center' }}
         >
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar> */}
    </div>
  );

};

export default Sidebar;