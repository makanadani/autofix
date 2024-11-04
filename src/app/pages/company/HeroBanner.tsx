'use client'
import { ParallaxBanner } from 'react-scroll-parallax'
import coworking from '../../../public/img/hero/coworking1.jpg'

const HeroBanner = () => {
  return (
    <>
      <ParallaxBanner
        layers={[
          {
            image: coworking.src,
            speed: -55,
            style: { backgroundSize: 'contain' },
          },
        ]}
        className="flex items-center md:py-80 py-44 jarallax"
      />
    </>
  )
}

export default HeroBanner
