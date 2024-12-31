import "./PatientSection.css";
import search from "../../assets/images/search.svg";

import UnorderedList from "./UnorderedList";
import PropTypes from "prop-types";


const PatientSection = ({data}) => {
  return (
    <>
      <div className="patientSection" style={{
         paddingTop: "1em",
         paddingBottom: "5rem",
          borderRadius: "1rem",
          background: "#FFFFFF", 
          height: "52.5rem", 
          overflow: "hidden", 
      }}>
        <div className="patientSection_search">
          <h4>Patients</h4>
          <img src={search} alt="search" />
        </div>

        {/* <div className="patient_name"> */}
          <UnorderedList data= {data}  />
        {/* </div> */}
      </div>
    </>
  );
};

PatientSection.propTypes = {
  data: PropTypes.array.isRequired,  
};


export default PatientSection;
