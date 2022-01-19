import React from 'react'
import People from './People'
import CalendarBlock from './CalendarBlock'
import Details from './Details'

function Modal() {
    return (
        <>
            <div className="vh-100">
                <div className="position-absolute button-position">
                    <button type="button" className="btn btn-default rounded-pill fw-bold text-uppercase" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Check Availability
                    </button>
                </div>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title fw-bold" id="exampleModalLabel">Package Availability</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <People />
                                <div className="row">
                                    <CalendarBlock/>
                                    <Details />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
