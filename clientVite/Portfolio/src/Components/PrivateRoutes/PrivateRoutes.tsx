import { Outlet } from 'react-router'

function PrivateRoutes() {
  return (
    <>
      <div className='w-100'>
        Private Routes
      </div>
      <Outlet />
    </>
  )
}

export default PrivateRoutes