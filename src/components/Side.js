import React from 'react'

export default function Side() {
    return (
        <div>
            <div className="side">
                <div className="members">
                    <h3>Members</h3>
                    <div>
                        <input type="text" className="inputName" placeholder="Type Name..." />
                        <button className="plusBtn">+</button>
                    </div>
                    <div className="membersList">
                        <div className="names">
                            <div className="nameInside">
                                <input type="checkbox" className="myCheck" checked/>
                                <p>Martin Betts</p>
                            </div>
                            <button className="deleteBtn">Delete</button>
                        </div>
                        <div className="names">
                            <div className="nameInside">
                                <input type="checkbox" className="myCheck" checked/>
                                <p>Martin Betts</p>
                            </div>
                            <button className="deleteBtn">Delete</button>
                        </div>
                        <div className="names">
                            <div className="nameInside">
                                <input type="checkbox" className="myCheck" checked/>
                                <p>Martin Betts</p>
                            </div>
                            <button className="deleteBtn">Delete</button>
                        </div>
                        <div className="names">
                            <div className="nameInside">
                                <input type="checkbox" className="myCheck" checked/>
                                <p>Martin Betts</p>
                            </div>
                            <button className="deleteBtn">Delete</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
