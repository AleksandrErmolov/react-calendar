import { Layout, Menu, Row } from 'antd';
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../routes';
import { useTypeSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { AuthActionCreators } from '../store/reducers/auth/actions-creator';

export const NavBar: FC = () => {

    const navigate = useNavigate()
    const { isAuth, user } = useTypeSelector(state => state.auth)
    const dispatch = useDispatch()


    return (

        <Layout.Header>
            <Row justify="end">
                {isAuth
                    ?
                    <>
                        <div style={{ color: 'white' }}>{user.username}</div>
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <Menu.Item
                                onClick={() => dispatch(AuthActionCreators.logout())}
                                key="1"
                            >
                                LogOut
                            </Menu.Item>
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
