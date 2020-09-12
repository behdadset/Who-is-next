import React from 'react';

function Nav(){
 
    return(
        <div className="mainNav">
            <div className="inputNav">
                <form >
                    <input type="text" className="title" placeholder="Type title..." />
                    <button className="save">Save</button>
                    
                </form>
                <div className="navBtns">
                    <button className="qSelect">Quick Select</button>
                    <form className="groupSize">
                        <p>Group Size </p>
                        <input type="number" className="sizeInput" placeholder="1" />
                    </form>
                       
                    <select  className="selectSort">
                        <option value="Random Algorithim">Random Algorithim</option>
                        <option value="Alphabetic">Alphabetic</option>
                        <option value="Reverse Alphabetic">Reverse Alphabetic</option>
                    </select>
                    
                    <button className="reset">Reset</button>
                </div>
            </div>
        </div>
    )
}

export default Nav;