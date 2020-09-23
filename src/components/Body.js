import React from 'react'
import Side from './Side'
import History from './History'
import Nav from './Nav'
import fire from './fire'

function Body(props) {
    function start(){
        const random = Math.floor(Math.random() * props.names.length);
        console.log(random)
        fire.database().ref().child(props.uId).child("groups").child("classmastes").child("names")[random].remove()
    }
    return (
        <div>
        <Nav />
        <div>
            <div className="mainBody">
                <Side uId={props.uId} names={props.names}/>
                <div className="startPage">
                    <p className="ready">When ready, select START</p>
                    <button className="startBtn" onClick={()=>start()}>START</button>
                    
                </div>
                <History />
                
            </div>
            
        </div>
        </div>
    )
}

export default Body;