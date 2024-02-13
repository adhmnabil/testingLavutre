import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ROUTES } from './Routes'
import Users from '../Components/Users'
import SingleUser from '../Components/SingleUser'


export default function Router() {
  return (
    <div>
        <Routes>
            <Route path={ROUTES.HOME}  element={<Users />}/>
            <Route path={ROUTES.USER}  element={<SingleUser />}/>
            <Route path='*'  element={<Users /> } />
        </Routes>

    </div>
  )
}
