import { Button, Form, Input } from 'antd'
import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { AuthActionCreators } from '../store/reducers/auth/actions-creator'
import { rules } from '../utils/rules'

export const LoginForm:FC = () => {
  
const dispatch = useDispatch()

  const submit = () => {
      dispatch(AuthActionCreators.login('user','123'))
  }
  
  
    return (


    <Form
    onFinish={submit}

    
    >
    <Form.Item
        label="Username"
        name="username"
        rules={[rules.required('Пожалуйста введите имя пользователя')]}
      >
        <Input />
      </Form.Item>



      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required('Пожалуйста введите пароль')]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>

      
      </Form>

    )
}
