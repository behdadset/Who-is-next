import React from 'react'
import Side from './Side'
import History from './History'

export default function Body() {
    return (
        <div>
            <div className="mainBody">
                <Side />
                <div className="startPage">
                    <p className="ready">When ready, select START</p>
                    <button className="startBtn">START</button>
                    <History />
                </div>
                
            </div>
            
        </div>
    )
}
