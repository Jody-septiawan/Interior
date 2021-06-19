import { Container, Row, Col } from 'react-bootstrap'

import BlogImg1 from '../assets/img/blog-1.svg'
import BlogImg2 from '../assets/img/blog-2.svg'

export default function Blog() {
    return (
        <Container className="section blog">
            <Row>
                <Col>
                    <div className="header mb-4 text-center">
                        Our popular <span className="text-brown-light">blog</span>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="d-flex justify-content-center">
                        <img src={BlogImg1} />
                    </div>
                    <div className="date">11 January 2021</div>
                    <div className="title">
                        Make Cozy Space in Your Home
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur <br/> 
                        adipiscing elit ut aliquam, purus sit amet luctus <br/>
                        venenatis, lectus magna fringilla urna, porttitor <br/>
                        rhoncus dolor.
                    </p>
                    <button>{`See More >`}</button>
                </Col>
                <Col>
                    <div className="d-flex justify-content-center">
                        <img src={BlogImg2} className="img-fluid" />
                    </div>
                    <div className="date">21 February 2021</div>
                    <div className="title">
                        Story with Minimalist Furnitures
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur <br/> 
                        adipiscing elit ut aliquam, purus sit amet luctus <br/>
                        venenatis, lectus magna fringilla urna, porttitor <br/>
                        rhoncus dolor.
                    </p>
                    <button>{`See More >`}</button>
                </Col>
            </Row>
        </Container>
    )
}
