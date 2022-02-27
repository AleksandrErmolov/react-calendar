import React, { FC } from 'react'
import { IEvent } from '../models/IEvents'
import { Calendar } from 'antd';


interface EventCalendarProps {
  events: IEvent[];
}

export const EventCalendar:FC<EventCalendarProps> = () => {
  return (
    <div>

      <Calendar />


    </div>
  )
}
