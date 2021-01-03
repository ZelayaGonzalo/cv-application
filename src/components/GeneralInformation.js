import React from "react"


class GeneralInformation extends React.Component{
    constructor(props){
        super(props)
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
        const isEditable=(this.props.canedit ==="true")? true :false ;
        return(
            <div className="allContainer"> 
            {isEditable ? 
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
                        <input type="email" name="email" onChange={this.handleChange} value={this.state.email} required/>
                    </label>
                    <label className="inputLabel">
                       Phone: 
                        <input type="phone" name="phone" onChange={this.handleChange} value={this.state.phone}/>
                    </label>
                </form>
                :
                <div>
                    <p>Name: {this.state.name} {this.state.lastName} </p>
                    <p>Email: {this.state.email} </p>
                    <p>Phone: {this.state.phone} </p>

                </div>
            }
            </div>
        )
    }
}

export default GeneralInformation