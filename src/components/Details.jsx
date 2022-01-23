import React from 'react'
import DescBlock from './DescBlock'

const Details = () => {
    return (
        <>
            <div className="col-lg-6 bg-light border-bottom p-0">
                <div className="border-bottom p-3 fw-bold text-uppercase fs-6">
                    5 September 2021
                </div>
                <div className="overflow-scroll p-3" style={{maxHeight: "350px"}}>
                    <DescBlock time="10:20 am" />
                </div>
            </div> 
        </>
    )
}

export default Details
