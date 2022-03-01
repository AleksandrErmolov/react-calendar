import {DatePicker, Form, Input, Select} from 'antd'
import React, {FC} from 'react'
import {IUser} from '../models/IUsers'
import {rules} from '../utils/rules'

interface EventFormProps {
    guests: IUser[]
}

export const EventForm: FC<EventFormProps> = (props) => {

    console.log(props.guests)

    return (
        <Form>
            <Form.Item
                label="Описание события"
                name="description"
                rules={[rules.required()]}
            >
                <Input/>
            </Form.Item>


            <Form.Item
                label="Дата события"
                name="date"
                rules={[rules.required()]}
            >
                <DatePicker/>
            </Form.Item>

            <Form.Item
                label="Описание события"
                name="description"
                rules={[rules.required()]}
            >
                <Select>
                    {props.guests.map(guest => {
                        return (<Select.Option key={guest.username} value={guest.username}>
                            {guest.username}
                        </Select.Option>)
                    })
                    }
                </Select>
            </Form.Item>


        </Form>
    )
}
