import "../InformationSection/InformationSection.css";
import InformationSection_Jessica from "./InformationSection_Jessica";
import LabResult from "./LabResult";
import PropTypes from "prop-types";

const InformationSection = ({data}) => {
  return (
    <>
        <div className="informationSection">
            <div className="informationSection_Jessica">
              <InformationSection_Jessica data={data} />
            </div>
            <div className="labResult">
              <LabResult  />
            </div>
        </div>
    </>
  );
};

InformationSection.propTypes = {
  data: PropTypes.array.isRequired,  
};

export default InformationSection;
