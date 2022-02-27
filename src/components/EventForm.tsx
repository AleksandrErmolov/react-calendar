import { DatePicker, Form, Input, Select } from 'antd'
import React from 'react'
import { rules } from '../utils/rules'

export const EventForm = () => {

    
    return (
        <Form>
            <Form.Item
                label="Описание события"
                name="description"
                rules={[rules.required()]}
            >
                <Input />
            </Form.Item>


            <Form.Item
            label="Дата события"
            name="date"
            rules={[rules.required()]}
            >
                <DatePicker />
            </Form.Item>

            <Form.Item>
         <Select>
         <Select.Option value="jack">Jack</Select.Option>
         <Select.Option value="lucy">Lucy</Select.Option>
         <Select.Option value="disabled" disabled>
           Disabled
         </Select.Option>
         <Select.Option value="Yiminghe">yiminghe</Select.Option>
       </Select>
      </Form.Item>


        </Form>
    )
}
