import React from "react"

class WorkExperience extends React.Component{
    constructor(){
        super()
        this.state = {
           companyName : "",
           position : "",
           mainTasks : "",
           started : "",
           finished : "",
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
                <form className="formWorkExperience">
                    <label className="inputLarge">
                        Company: 
                        <input type="text" size="50" name="companyName" onChange={this.handleChange} value={this.state.companyName}/>
                    </label>
                    <label className="inputLarge">
                        Position: 
                        <input type="text" size="50" name="position" onChange={this.handleChange} value={this.state.position}/>
                    </label>
                    <label className="inputLarge">
                        Main Tasks: 
                        <textarea cols="50" rows="3" name="mainTasks" onChange={this.handleChange} value={this.state.mainTasks}/>
                    </label>
                    <label className="inputLabel">
                        Started: 
                        <input type="date" name="started" onChange={this.handleChange} value={this.state.started}/>
                    </label>
                    <label className="inputLabel">
                        Until: 
                        <input type="date" name="finsihed" onChange={this.handleChange} value={this.state.finished}/>
                    </label>
                </form>
            </div>
        )
    }
}

export default WorkExperience