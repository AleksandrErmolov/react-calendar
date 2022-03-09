import { Button, Layout, Modal, Row } from 'antd'
import React, { FC, useEffect, useState } from 'react'
import { EventCalendar } from '../components/EventCalendar'
import { EventForm } from '../components/EventForm'
import { useAction } from '../hooks/useAction'
import { useTypeSelector } from '../hooks/useTypedSelector'

const Event: FC = () => {

    const [modalVisible, setModalVisible] = useState(false)
    const { fetchGuests, createEvent } = useAction()
    const {guests, events} = useTypeSelector(state => state.event)
    

    useEffect(() => {
        fetchGuests()
    }, [])


    return (
        <Layout>
            {JSON.stringify(events)}
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
                <EventForm guests={guests} submit={event => createEvent(event)}/>
                <Row justify='end'>
                </Row>
            </Modal>
        </Layout >
    )
}

export default Event