import { Button, Layout, Modal, Row } from 'antd'
import React, { FC, useEffect, useState } from 'react'
import { EventCalendar } from '../components/EventCalendar'
import { EventForm } from '../components/EventForm'
import { useAction } from '../hooks/useAction'
import { useTypeSelector } from '../hooks/useTypedSelector'

const Event: FC = () => {

    const [modalVisible, setModalVisible] = useState(false)
    const { fetchGuests } = useAction()
    const {guests} = useTypeSelector(state => state.event)
    

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
                <EventForm guests={guests} />

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