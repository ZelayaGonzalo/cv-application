import React from "react"
import "./components/GeneralInformation.css"
import GeneralInformation from "./components/GeneralInformation"
import EducationalInformation from "./components/EducationalInformation"
import WorkExperience from "./components/WorkExperience"

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      isEditable : true,
    }
    this.handleButtons=this.handleButtons.bind(this);
  }
  handleButtons(event){
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name] : value,
  })
  }
  render(){
    return (
      <div className="App">
        <h3 className="titles">General</h3>
        <GeneralInformation canedit={this.state.isEditable.toString()}/>
        <h3 className="titles" >Education</h3>
        <EducationalInformation canedit={this.state.isEditable.toString()}/>
        <h3 className="titles" >Work Experience</h3>
        <WorkExperience canedit={this.state.isEditable.toString()}/>
        <div className="buttons">
          <button className="button" name="isEditable" value={false} onClick={this.handleButtons}>Preview</button>
          <button className="button" name="isEditable" value={true} onClick={this.handleButtons}>Edit</button>
        </div>
      </div>
    );
  }
  
}

export default App;
