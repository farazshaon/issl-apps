import React from 'react'

function TopBanner({Banner, BannerTitle}) {
  return (
    <>
        <section className="TopBanner">
          <h1 className='text-center'>{BannerTitle}</h1>
        </section>
    </>
  )
}

export default TopBanner 