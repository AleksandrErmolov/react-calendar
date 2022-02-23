import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from './routes';


function AppRouter() {
const auth = true;

    return (

         auth
            ?
            <Routes>
{privateRoutes.map(route =>
    <Route path={route.path} key={route.path} element={<route.component />}/>
    )}
    <Route path={'/*'} element={<Navigate replace to="/" />} />
            </Routes>
            :
            <Routes>
{publicRoutes.map(route =>
    <Route path={route.path} key={route.path} element={<route.component />}/>
    )}
        <Route path={'*'} element={<Navigate replace to="/login" />} />

            </Routes> 
 )
}

export default AppRouter