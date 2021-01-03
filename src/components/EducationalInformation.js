import React from "react"

class EducationalInformation extends React.Component{
    constructor(){
        super()
        this.state = {
            schoolName : "",
            title : "",
            started: "",
            finished:"",
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
            <div>
                <form className="formContainerEducational">
                    <label className="inputLarge" >
                        School: 
                        <input type="text" size="50" name="schoolName" onChange={this.handleChange} value={this.state.schoolName}/>
                    </label>
                     <label className="inputLarge" >
                        Title: 
                        <input type="text" size="50" name="title" onChange={this.handleChange} value={this.state.title}/>
                     </label>
                     <label className="inputLabel">
                         Started: 
                        <input type="date" name="started" onChange={this.handleChange} value={this.state.started}/>
                    </label>
                    <label className="inputLabel">
                        Finished:
                        <input type="date" name="finished" onChange={this.handleChange} value={this.state.finished}/>
                </label>
                </form>
                   
            </div>
        )
    }
}

export default EducationalInformation