import { useState } from "react";
import "./App.css";

import DiagnosisSection from "./Components/DiagnosisSection/DiagnosisSection";
import InformationSection from "./Components/InformationSection/InformationSection";
import NavBar from "./Components/NavBar/NavBar";
import PatientSection from "./Components/PatientSection/PatientSection";
import { JessicaData } from "./Components/JessicaData";

function App() {
    const [data] = useState(JessicaData);
    //const data = JessicaData[0];
    console.log(data);

  return (
    <>
      
        <div className="container">
          <NavBar />
          <div className="main">
            <PatientSection data={data} />
            <DiagnosisSection data={data[0]} />
            <InformationSection data={data} />
          </div>
        </div>
      
    </>
  );
}

export default App;
