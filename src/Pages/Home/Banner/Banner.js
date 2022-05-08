import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={"https://i.ibb.co/wc3QtxB/img-1.jpg"}
                    alt=""
                />
                <Carousel.Caption>
                    {/* <h3>First slide label</h3> */}
                    <p>We care about quality.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={"https://i.ibb.co/wc3QtxB/img-1.jpg"}
                    alt=""
                />

                <Carousel.Caption>
                    {/* <h3>Second slide label</h3> */}
                    <p>We care about quality.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={"https://i.ibb.co/wc3QtxB/img-1.jpg"}
                    alt=""
                />

                <Carousel.Caption>
                    {/* <h3>Third slide label</h3> */}
                    <p>
                        We care about quality.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;