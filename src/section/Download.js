import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import ImgGooglePlay from '../assets/img/Download-android.svg'
import ImgAppStore from '../assets/img/Download-apple.svg'
import ImgPhone from '../assets/img/Download-Phone.png'

export default function Download() {
    return (
        <div className="download mt-5">
            <Container>
                <Row style={{height: '60vh'}}>
                    <Col md="7" className="d-flex align-items-center">
                        <span>
                            <div className="header">
                                <span className="text-brown-light">Download</span> furniture order app <br/>
                                and get the bonus
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit<br/>
                                amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor.
                            </p>
                            <img src={ImgGooglePlay} style={{cursor: 'pointer'}} />
                            <img src={ImgAppStore} style={{cursor: 'pointer'}} />
                        </span>
                    </Col>
                    <Col md="5" className="d-flex align-items-center">
                        <div>
                                <img src={ImgPhone} />
                                <span className="desc">*Disc 50% for All purchese</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
