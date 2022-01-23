import React from 'react'

const SubBlock = (props) => {

    const bookBtn = (e) => {
        alert("Book me! (" + e.target.id + ")")
    }

    return (
        <>
            <div className="bg-white p-3 shadow rounded-3 my-3">
                <div className="d-flex justify-content-between align-items-center gap-3">
                    <div className="col-8">
                        <span>
                        {props.desc}
                        </span>
                        <br/>
                        <span className="text-success small fw-bold">
                        {props.discount}
                        </span>
                    </div>
                    <div className="text-center">
                        <span>
                        <span>AUD</span><span className="fw-bold"> {props.price}</span> 
                        </span>
                        <br/>
                        <span>
                        <button className="btn rounded-pill btn-sm fw-bold px-3 mt-2" id={props.id} onClick={bookBtn}>BOOK</button>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubBlock
