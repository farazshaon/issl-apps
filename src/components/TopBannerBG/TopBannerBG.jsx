import React from 'react'

const TopBannerBG = ({Banner}) => {
  return (
    <>
        <div className="banner">
            <img src={Banner} alt="" className='img-fluid' />
        </div>
    </>
  )
}

export default TopBannerBG