import React from 'react'
import {Card} from 'react-bootstrap'

function Cards({children}) {
  return (
    <>
            <Card>
                <div>
                    {children}
                </div>

            </Card>
    </>
  )
}

export default Cards