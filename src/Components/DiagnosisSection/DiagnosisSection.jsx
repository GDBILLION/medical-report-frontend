import "../DiagnosisSection/DiagnosisSection.css";
import { Line } from "react-chartjs-2";
import respiratory from "../../assets/images/respiratory.svg";
import temperature from "../../assets/images/temperature.svg";
import heartBPM from "../../assets/images/heartBPM.svg";
import PropTypes from "prop-types";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { lineChartdata } from "../FakeData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DiagnosisSection = ({ data }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Blood Pressure Over the Months",
      },
    },
  };

  return (
    <>
      <div className="diagnosisSection">
        <div className="diagnosisSection_first_wrapper">
          <h4>Diagnosis History</h4>
          <div className="diagnosisSection_Line">
            <Line options={options} data={lineChartdata} />
          </div>
          <div className="diagnosisSection_rate">
            <div className="respiratory rate">
              <img className="target" src={respiratory} alt="respiratory" />
              <div className="bottom">
                <p>Respiratory rate</p>
                <p className="come-down">20bpm</p>
                <p>Normal</p>
              </div>
            </div>
            <div className="temperature rate">
              <img className="target" src={temperature} alt="temperature" />
              <div className="bottom">
                <p>Temperature</p>
                <p className="come-down">98.6°F</p>
                <p>Normal</p>
              </div>
            </div>
            <div className="heart rate">
              <img className="target" src={heartBPM} alt="heartbeat" />
              <div className="bottom">
                <p>Heart Rate</p>
                <p className="come-down">78bpm</p>
                <p>Lower than average</p>
              </div>
            </div>
          </div>
        </div>
        <div className="diagnosticList">
          <h4>Diagnostic List</h4>
          <div className="diagnolaList_grid">
            <table className="diagnosis-table">
              <thead className="fixed">
                <tr>
                  <th>Problem/Diagnosis</th>
                  <th>Description</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {data.diagnostic_list && data.diagnostic_list.length > 0 ? (
                  data.diagnostic_list.map((diagnosis, index) => (
                    <tr key={index}>
                      <td>{diagnosis.name}</td>{" "}
                      {/* Accessing name of diagnosis */}
                      <td>{diagnosis.description}</td>{" "}
                      {/* Accessing description */}
                      <td>{diagnosis.status}</td> {/* Accessing status */}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3">No diagnoses available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

DiagnosisSection.propTypes = {
  data: PropTypes.shape({
    diagnostic_list: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default DiagnosisSection;
