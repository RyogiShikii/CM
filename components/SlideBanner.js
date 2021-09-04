import { Carousel } from "react-bootstrap";
import styles from './slideBanner.module.css';

const SlideBanner = () => {
    return (
        <Carousel indicators={false}>
            <Carousel.Item className={styles.background}>
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.background}>
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
            <Carousel.Item className={styles.background}>
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default SlideBanner;