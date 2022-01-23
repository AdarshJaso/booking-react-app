import React from 'react'
import SubBlock from './SubBlock'

const DescBlock = (props) => {
    return (
        <>
            {/* SAMPLE MANUAL DATA */}
            <div className="border-bottom">
                <small><strong>{props.time}</strong> start time</small>
                <SubBlock desc="Package description with a longer title" price="$1299" discount="SAVE AUD $25" id="1"/>
                <SubBlock desc="Package description with a longer title" price="$0" discount="SAVE AUD $10" id="2"/>
                <SubBlock desc="Package description with a longer title" price="$1200" discount="SAVE AUD $15" id="3"/>
            </div>

            {/* SAMPLE MANUAL DATA */}
            <div className="border-bottom">
                <small><strong>{props.time}</strong> start time</small>
                <SubBlock desc="Package description with a longer title" price="$1199" discount="" id="4"/>
                <SubBlock desc="Package description with a longer title" price="$199" discount="SAVE AUD $25" id="5"/>
            </div>
        </>
    )
}

export default DescBlock
