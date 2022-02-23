import { Layout, Menu, Row } from 'antd';
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../routes';
import { useTypeSelector } from '../hooks/useTypedSelector';

export const NavBar: FC = () => {

    const navigate = useNavigate()
    const {isAuth} = useTypeSelector(state => state.auth)


    return (

        <Layout.Header>
            <Row justify="end">
                {isAuth
                    ?
                    <>
                    <div style={{ color: 'white' }}>myProject</div>
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <Menu.Item onClick={() => navigate(RouteNames.LOGIN)} key="1">LogOut</Menu.Item>
                    </Menu>
                    </>
                    :
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <Menu.Item onClick={() => navigate(RouteNames.LOGIN)} key="1">Login</Menu.Item>
                    </Menu>
                }
            </Row>
        </Layout.Header>

    )
}
