import Image from 'next/image'
import React from 'react'

const NetflixLogo = () => {
  return (
    <picture>
      <source
        media="(min-width: 768px)"
        srcSet="/asset/images/logo/full_netflix_logo.png"
      />
      <Image
        src="/asset/images/logo/shot_netflix_logo.png"
        alt='Clone-Netflix'
        width={0}
        height={0}
        sizes='100vw'
        className='w-8 md:w-32'
      />
    </picture>
  )
}

export default NetflixLogo