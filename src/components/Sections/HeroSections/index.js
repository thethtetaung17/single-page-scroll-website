import React, { useState } from 'react';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    ArrowForward,
    ArrowRight,
    HeroBtnWrapper
} from './HeroElements';
import Video from '../../../videos/video.mp4';
import { Button } from '../../ButtonElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>“Travel is the only thing you buy that makes you richer.”</HeroH1>
                <HeroP>
                    Remember that happiness is a way of travel, not a destination.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup'
                        smooth
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'>
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
