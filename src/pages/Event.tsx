import { Button, Layout, Modal, Row } from 'antd'
import React, { FC, useEffect, useState } from 'react'
import { EventCalendar } from '../components/EventCalendar'
import { EventForm } from '../components/EventForm'
import Login from './Login'

const Event: FC = () => {

    const [modalVisible, setModalVisible] = useState(false)
    const {fetchGuests} = useActions()

    useEffect(() => {
fetchGuests()
    }, [])

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
                <EventForm />

                <Row justify='end'>
                    <Button
                        type='primary'
                        htmlType='submit'
                    >
                        Создать
                    </Button>
                </Row>
            </Modal>
        </Layout >
    )
}

export default Event

function useActions(): { fetchGuests: any } {
    throw new Error('Function not implemented.')
}
