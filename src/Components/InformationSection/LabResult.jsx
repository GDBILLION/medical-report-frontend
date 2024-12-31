import "../InformationSection/LabResult.css";
import download from "../../assets/images/download.svg";

const LabResult = () => {
  return (
    <>
      <div className="labResult">
        <h4>Lab Results</h4>
        
          <div className="labResult_test">
          <div className="labResultScroll">
            <ul>
              <li className="labResult_test_flex">
                <p>Blood Tests</p>
                <img className="download" src={download} alt="download" />
              </li>
              <li className="labResult_test_flex">
                <p>CT Scans</p>
                <img className="download" src={download} alt="download" />
              </li>
              <li className="labResult_test_flex">
                <p>Radiology Reports</p>
                <img className="download" src={download} alt="download" />
              </li>
              <li className="labResult_test_flex">
                <p>X-Rays</p>
                <img className="download" src={download} alt="download" />
              </li>
              <li className="labResult_test_flex">
                <p>Urine Test</p>
                <img className="download" src={download} alt="download" />
              </li>
            </ul>
            </div>
          </div>
        
      </div>
    </>
  );
};

export default LabResult;
