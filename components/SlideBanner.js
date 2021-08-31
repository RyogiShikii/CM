import { Carousel } from "react-bootstrap";

const SlideBanner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='http://localhost:3000/Evangelion.3.0+1.01.Thrice.Upon.a.Time.2021.1080p.AMZN.WEB-DL.DD+.5.1.H.264-RMB.mkv_20210814_162400.023.jpg'
                    alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                    className="d-block w-100"
                    src='http://localhost:3000/Evangelion.3.0+1.01.Thrice.Upon.a.Time.2021.1080p.AMZN.WEB-DL.DD+.5.1.H.264-RMB.mkv_20210814_162400.023.jpg'
                    alt="First slide"
                />
                <Carousel.Caption>
                <img
                    className="d-block w-100"
                    src='http://localhost:3000/f0Qj6h-bb0xZcT3cSk3-sg.jpg'
                    alt="First slide"
                />
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                    className="d-block w-100"
                    src='http://localhost:3000/Evangelion.3.0+1.01.Thrice.Upon.a.Time.2021.1080p.AMZN.WEB-DL.DD+.5.1.H.264-RMB.mkv_20210814_162400.023.jpg'
                    alt="First slide"
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default SlideBanner;