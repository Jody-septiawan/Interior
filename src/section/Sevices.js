import { Container, Row, Col } from 'react-bootstrap'

import ServicesImg from '../assets/img/Services.png'

export default function Sevices() {
    return (
        <Container>
            <Row  className="section services">
                <Col md="5" className="d-flex align-items-center justify-content-center">
                    <img src={ServicesImg} className="img-fluid" />
                </Col>
                <Col md="7" className="d-flex align-items-center">
                    <span>
                        <div className="header mb-4">
                            How to we provides our <span className="text-brown-light">services</span>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit <br/> 
                            amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus <br/> 
                            non enim praesent elementum facilisis :
                        </p>
                        <ul>
                            <li><span className="dotList"></span> Elegant</li>
                            <li><span className="dotList"></span> Minimalist</li>
                            <li><span className="dotList"></span> Stylish</li>
                        </ul>
                    </span>
                </Col>
            </Row>
        </Container>
    )
}
