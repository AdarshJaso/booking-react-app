import React, {useState} from 'react'

function People() {

    const [adult, setAdult] = useState(1)
    const [children, setChildren] = useState(0)
    
    if(adult < 1){
        setAdult(1);
    }
    if(children < 0){
        setChildren(0);
    }

    return (
        <>
            <div className="row pb-3 border-bottom">
                <div className="col-lg-5 d-flex gap-3 align-items-center">
                    <div>
                        <label>Adults</label>
                        <div className="input-group">
                            <button className="btn btn-outline-secondary border-0 pb-2 fw-bolder fs-5" onClick={() => setAdult(adult - 1)} type="button">-</button>
                            <input type="text" className="form-control text-center" placeholder="Adults" key={adult} defaultValue={adult} />
                            <button className="btn btn-outline-secondary border-0 pb-2 fw-bolder fs-5" onClick={() => setAdult(adult + 1)} type="button">+</button>
                        </div>
                    </div>
                    <div>
                        <label>Children<small> (3-5 years)</small></label>
                        <div className="input-group">
                            <button className="btn btn-outline-secondary border-0 pb-2 fw-bolder fs-5" onClick={() => setChildren(children - 1)} type="button">-</button>
                            <input type="text" className="form-control text-center" placeholder="Children (3-5 years)"  key={children} defaultValue={children} />
                            <button className="btn btn-outline-secondary border-0 pb-2 fw-bolder fs-5" onClick={() => setChildren(children + 1)} type="button">+</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default People
