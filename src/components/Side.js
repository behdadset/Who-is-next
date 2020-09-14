import React from 'react'
import fire from './fire'

class Side extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            names: {},
            userId: ''
        };

        fire.auth().onAuthStateChanged((user) =>{
            if(user.uid ){
                this.setState({userId: user.uid})
                fire.database().ref(this.state.userId).child("groups").child("classmastes").child("names").on("value",res => {
                    this.setState({names: res.val()})
                })
                console.log("working"+this.state.userId)
            }
        })

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        console.log("Test"+this.state.userId)
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        console.log(this.state.value)
        if(this.state.value !== ""){
            if(this.state.userId){
                if(this.state.names){
                    fire.database().ref().child(this.state.userId).child("groups").child("classmastes").child("names").child(this.state.names.length).child("name").set(this.state.value)
                }else{
                    fire.database().ref().child(this.state.userId).child("groups").child("classmastes").child("names").child(0).child("name").set(this.state.value)
                }
            }else{
                alert("Please login first")
            }
            
        }else{
            alert("Please Fill Name Field!");

        }
        
        event.preventDefault();
        this.setState({value: ''});
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
                                                    <input type="checkbox" checked className="myCheck" />
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