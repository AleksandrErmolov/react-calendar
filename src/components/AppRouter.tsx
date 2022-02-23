import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useTypeSelector } from '../hooks/useTypedSelector';
import { privateRoutes, publicRoutes } from '../routes';


function AppRouter() {

const {isAuth} = useTypeSelector(state => state.auth)


    return (
        isAuth
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