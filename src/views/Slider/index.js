import React, { Component } from 'react';
import Slider from '../../components/Slide/index';
const IMAGE_DATA = [
    {
        src: require('../../components/Slide/images/demo1.png'),
        alt: 'images-1',
    },
    {
        src: require('../../components/Slide/images/demo2.png'),
        alt: 'images-2',
    },
    {
        src: require('../../components/Slide/images/demo3.png'),
        alt: 'images-3',
    },
    {
        src: require('../../components/Slide/images/demo4.png'),
        alt: 'images-3',
    },
];
export default class SliderPage extends Component {

    render() {
        return (
            <section>
                <Slider items={IMAGE_DATA}
                    speed={1.2}
                    delay={2.1}
                    pause={true}
                    autoplay={true}
                    dots={true}
                    arrows={true}
                />
            </section>
        )
    }
}