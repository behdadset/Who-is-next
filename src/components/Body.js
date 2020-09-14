import React from 'react'
import Side from './Side'
import History from './History'
import Nav from './Nav'

export default function Body() {
    return (
        <div>
        <Nav />
        <div>
            <div className="mainBody">
                <Side />
                <div className="startPage">
                    <p className="ready">When ready, select START</p>
                    <button className="startBtn">START</button>
                    
                </div>
                <History />
                
            </div>
            
        </div>
        </div>
    )
}
