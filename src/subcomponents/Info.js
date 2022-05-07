import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { AiTwotonePhone, AiOutlineMail } from 'react-icons/ai'
import { BsFillPinMapFill } from 'react-icons/bs'

function Info() {
    const infoArr = [{
        type: 'Phone',
        myInfo: <a href='tel:9195264896'>(919) 523-4896</a>,
        img: <AiTwotonePhone style={{ fontSize: '2em' }} />
    }, {
        type: 'Address',
        myInfo: 'Raleigh, NC',
        img: <BsFillPinMapFill style={{ fontSize: '2em' }} />
    }, {
        type: 'Email',
        myInfo: <a href='mailto:mgarlcr@gmail.com'>mgarlcr@gmail.com</a>,
        img: <AiOutlineMail style={{ fontSize: '2em' }} />
    }]

    return (
        <>
           {infoArr.map((info, i) => {
                return (
                    <Row className='d-flex justify-content-center mb-5' key={i}>
                        <Col xs={12} lg={10}>
                            <Card className='d-flex flex-row p-4'>
                                <Col xs={4} className='d-flex justify-content-center align-items-center'>
                                    {info.img}
                                </Col>
                                <Col xs={8} className='d-flex flex-column justify-content-center align-items-center'>
                                    <Card.Title>{info.type}</Card.Title>
                                    <Card.Text>
                                        {info.myInfo}
                                    </Card.Text>
                                </Col>
                            </Card>
                        </Col>
                    </Row>
                )
            })}
        </>
    )
}

export default Info