import { Button, Layout, Modal, Row } from 'antd'
import React, { FC, useEffect, useState } from 'react'
import { EventCalendar } from '../components/EventCalendar'
import { EventForm } from '../components/EventForm'
import { useAction } from '../hooks/useAction'
import { useTypeSelector } from '../hooks/useTypedSelector'
import {IEvent} from "../models/IEvents";

const Event: FC = () => {

    const [modalVisible, setModalVisible] = useState(false)
    const { fetchGuests, createEvent, fetchEvents } = useAction()
    const {guests, events} = useTypeSelector(state => state.event)
    const {user} = useTypeSelector(state => state.auth)


    useEffect(() => {
        fetchGuests()
        fetchEvents(user.username)
    }, [])


    const addNewEvent = (event:IEvent) => {
        createEvent(event)
        setModalVisible(false)
    }

    return (
        <Layout>
            <EventCalendar events={[]} />
            <Row justify='center'>
                <Button
                    onClick={() => setModalVisible(true)}
                >
                    Добавить событие

                </Button>
            </Row>

            <Modal
                title="Добавить событие"
                visible={modalVisible}
                footer={null}
                onCancel={() => setModalVisible(false)}
            >
                <EventForm guests={guests} submit={addNewEvent}/>
                <Row justify='end'>
                </Row>
            </Modal>
        </Layout >
    )
}

export default Event