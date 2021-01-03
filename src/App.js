import React from "react"
import GeneralInformation from "./components/GeneralInformation"
import EducationalInformation from "./components/EducationalInformation"
import WorkExperience from "./components/WorkExperience"

function App() {
  return (
    <div className="App">
      <GeneralInformation/>
      <EducationalInformation/>
      <WorkExperience/>
    </div>
  );
}

export default App;
