import {DatePicker, Form, Input, Select} from 'antd'
import React, {FC, useState} from 'react'
import {IUser} from '../models/IUsers'
import {rules} from '../utils/rules'
import {IEvent} from "../models/IEvents";

interface EventFormProps {
    guests: IUser[]
}

export const EventForm: FC<EventFormProps> = (props) => {

    const [event, setEvent] = useState<IEvent>({
        author:'',
        date:'',
        description:'',
        guest:''

    } as IEvent)
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
                label="Выберите гостя"
                name="guest"
                rules={[rules.required()]}
            >
                <Select onChange={(guest:string) => setEvent({...event, guest}) }>
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
