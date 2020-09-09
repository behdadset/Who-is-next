import React from 'react'
import fire from './fire'

class Side extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            names: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount(){ //Get user's name list from firebase database
        fire.database().ref(`123456`).child("names").on("value",res => {
            this.setState({names: res.val()})
        })
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        console.log(this.state.value)
        if(this.state.names){
            fire.database().ref().child("123456").child("names").child(this.state.names.length).child("name").set(this.state.value)
        }else{
            fire.database().ref().child("123456").child("names").child(0).child("name").set(this.state.value)
        }
        event.preventDefault();
        this.setState({value: ''});
    }

    handleDelete(){
        console.log("delete")
    }

    render() {
        return (
            <div>
                <div className="side">
                    <div className="members">
                        <h3>Members</h3>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" onChange={this.handleChange} value={this.state.value} className="inputName" placeholder="Type Name..." />
                            <button type="submit" className="plusBtn">+</button>
                        </form>
                        <div className="membersList">
                            {this.state.names &&
                                Object.entries(this.state.names).map(function (key) {
                                    return <div className="names">
                                                <div className="nameInside">
                                                    <input type="checkbox" className="myCheck" />
                                                    <p>{key[1].name}</p>
                                                </div>
                                                <button onClick={() =>fire.database().ref().child("123456").child("names").child(key[0]).remove()} className="deleteBtn">Delete</button>
                                            </div> 
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Side;