import React from 'react'

const Details = () => {

    const bookBtn = (e) => {
        alert("Book me! (" + e.target.id + ")")
    }

    return (
        <>
            <div className="col-lg-6 bg-light border-bottom p-0">
                <div className="border-bottom p-3 fw-bold text-uppercase fs-6">
                    5 September 2021
                </div>
                <div className="overflow-scroll p-3" style={{maxHeight: "350px"}}>
                {/* BLOCK 1 */}
                <div className="border-bottom">
                    <small><strong>10:20 am</strong> start time</small>
                    {/* SUB-BLOCK 1 */}
                    <div className="bg-white p-3 shadow rounded-3 my-3">
                        <div className="d-flex justify-content-between align-items-center gap-3">
                            <div className="col-8">
                                <span>
                                Package description with a longer title
                                </span>
                                <br/>
                                <span className="text-success small fw-bold">
                                SAVE AUD $25
                                </span>
                            </div>
                            <div className="text-center">
                                <span>
                                <span>AUD</span><span className="fw-bold"> $1299</span> 
                                </span>
                                <br/>
                                <span>
                                <button className="btn rounded-pill btn-sm fw-bold px-3 mt-2" id="1" onClick={bookBtn}>BOOK</button>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* SUB-BLOCK 2 */}
                    <div className="bg-white p-3 shadow rounded-3 my-3">
                        <div className="d-flex justify-content-between align-items-center gap-3">
                            <div className="col-8">
                                <span>
                                Package description
                                </span>
                                <br/>
                                <span className="text-success small fw-bold">
                                
                                </span>
                            </div>
                            <div className="text-center">
                                <span>
                                <span>AUD</span><span className="fw-bold"> $1299</span> 
                                </span>
                                <br/>
                                <span>
                                <button className="btn rounded-pill btn-sm fw-bold px-3 mt-2" id="2" onClick={bookBtn}>BOOK</button>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* SUB-BLOCK 3 */}
                    <div className="bg-white p-3 shadow rounded-3 my-3">
                        <div className="d-flex justify-content-between align-items-center gap-3">
                            <div className="col-8">
                                <span>
                                Package description with a longer title
                                </span>
                                <br/>
                                <span className="text-success small fw-bold">
                                SAVE AUD $25
                                </span>
                            </div>
                            <div className="text-center">
                                <span>
                                <span>AUD</span><span className="fw-bold"> $1299</span> 
                                </span>
                                <br/>
                                <span>
                                <button className="btn rounded-pill btn-sm fw-bold px-3 mt-2" id="3" onClick={bookBtn}>BOOK</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            
                {/* BLOCK 2 */}
                <div className="border-bottom">
                    <small><strong>10:20 am</strong> start time</small>
                    {/* SUB-BLOCK 1 */}
                    <div className="bg-white p-3 shadow rounded-3 my-3">
                        <div className="d-flex justify-content-between align-items-center gap-3">
                            <div className="col-8">
                                <span>
                                Package description with a longer title
                                </span>
                                <br/>
                                <span className="text-success small fw-bold">
                                SAVE AUD $25
                                </span>
                            </div>
                            <div className="text-center">
                                <span>
                                <span>AUD</span><span className="fw-bold"> $1299</span> 
                                </span>
                                <br/>
                                <span>
                                <button className="btn rounded-pill btn-sm fw-bold px-3 mt-2" id="4" onClick={bookBtn}>BOOK</button>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* SUB-BLOCK 2 */}
                    <div className="bg-white p-3 shadow rounded-3 my-3">
                        <div className="d-flex justify-content-between align-items-center gap-3">
                            <div className="col-8">
                                <span>
                                Package description
                                </span>
                                <br/>
                                <span className="text-success small fw-bold">
                                
                                </span>
                            </div>
                            <div className="text-center">
                                <span>
                                <span>AUD</span><span className="fw-bold"> $1299</span> 
                                </span>
                                <br/>
                                <span>
                                <button className="btn rounded-pill btn-sm fw-bold px-3 mt-2" id="5" onClick={bookBtn}>BOOK</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
            </div> 
        </>

    )
}

export default Details
