import React from "react"
import "./GeneralInformation.css"

class GeneralInformation extends React.Component{
    constructor(){
        super()
        this.state = {
            name : "",
            lastName : "",
            email : "",
            phone: "",
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name] : value,
        })
    }

    render(){
        return(
            <div className="allContainer"> 
                <form className="formContainer">
                    <label className="inputLabel">
                        First Name: 
                        <input type="text" name="name" onChange={this.handleChange} value={this.state.name}/>
                    </label>
                    <label className="inputLabel">
                       Last Name: 
                        <input type="text" name="lastName" onChange={this.handleChange} value={this.state.lastName}/>
                    </label>
                    <label className="inputLabel">
                       Email: 
                        <input type="email" name="email" onChange={this.handleChange} value={this.state.email}/>
                    </label>
                    <label className="inputLabel">
                       Phone: 
                        <input type="phone" name="phone" onChange={this.handleChange} value={this.state.phone}/>
                    </label>
                </form>
                {/*<div>
                    <p>Name: {this.state.name} {this.state.lastName} </p>
                    <p>Email: {this.state.email} </p>
                    <p>Phone: {this.state.phone} </p>

                </div>*/}

            </div>
        )
    }
}

export default GeneralInformation