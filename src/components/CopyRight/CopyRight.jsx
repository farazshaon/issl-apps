import React from 'react'
import {Container} from 'react-bootstrap'
import bacco from '../../assets/images/logo-bacco.png'
import basis from '../../assets/images/logo-basis.png'
export const CopyRight = () => {
  return (
    <>
    <section className='copy-right'>
        <Container>
            <div className='text-center member-logo'>
                <img src={bacco} className='img-fluid' alt="" />
                <img src={basis} className='img-fluid' alt="" />
                <p>Copyright © 2023, Impel Service & Solutions Limited</p>
            </div>
        </Container>
    </section>
    </>
  )
}
