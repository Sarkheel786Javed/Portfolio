import { Outlet } from 'react-router'
import SidebarMain from '../../app/layout/Sidebar/SidebarMain'
function Authorization() {
  return (
    <div className='d-flex'>
      <SidebarMain />
      <Outlet />
    </div>
  )
}

export default Authorization