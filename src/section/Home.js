import { Container, Row, Col } from 'react-bootstrap'

import Navbar from '../components/Navbar'

import HomeImg from '../assets/img/Home.svg'

export default function Home() {
    return (
        <Container fluid>
            <Row>
                <Navbar />
            </Row>
            <Row className="section">
                <Col md="7" className="d-flex align-items-center home">
                    <span style={{margin: '0 120px 0 60px'}}>
                        <div className="header mb-4">
                            Fill your <span className="text-brown-light">space</span> at home <br/>
                            with <span className="text-brown-light">stylish furniture</span>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing <br/> 
                            elit ut aliquam, purus sit amet luctus venenatis, <br/> 
                            lectus magna fringilla urna, porttitor rhoncus dolor <br/> 
                            purus non.
                        </p>
                        <button className="mt-4">{`See More >`}</button>
                    </span>
                </Col>
                <Col md="5" className="bg-brown-light position-relative d-flex align-items-center">
                    <img src={HomeImg} style={{left: '-170px'}} className="position-relative" />
                </Col>
            </Row>
        </Container>
    )
}
