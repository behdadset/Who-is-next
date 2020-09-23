import React from 'react'
import fire from './fire'

class Side extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.generateMemberList = this.generateMemberList.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        if(this.state.value !== ""){
            if(this.props.uId !== ""){
                if(this.props.names){
                    fire.database().ref().child(this.props.uId).child("groups").child("classmastes").child("names").child(this.props.names.length).child("name").set(this.state.value)
                }else{
                    fire.database().ref().child(this.props.uId).child("groups").child("classmastes").child("names").child(0).child("name").set(this.state.value)
                }
            }else{
                alert("Please login first.")
            }
            
        }else{
            alert("Please Fill Name Field!");

        }
        
        event.preventDefault();
        this.setState({value: ''});
    }

    generateMemberList(){
        if(!this.props.names){
            return
        }
        var userId = this.props.uId
        return(
            this.props.names.map(function(item, i){
                return(
                    <div key={i} className="names">
                        <div className="nameInside">
                            <input type="checkbox" className="myCheck" />
                            <p>{item.name}</p>
                        </div>
                        <button onClick={() =>fire.database().ref().child(userId).child("groups").child("classmastes").child("names").child(i).remove()} className="deleteBtn">Delete</button>
                    </div>
                   
                )
                
            }
            )
        )
        
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
                            {this.generateMemberList()}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Side;