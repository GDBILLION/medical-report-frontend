import "../InformationSection/InformationSection_Jessica.css";
import BirthIcon from "../../assets/images/BirthIcon.png";
import FemaleIcon from "../../assets/images/FemaleIcon.png";
import PhoneIcon from "../../assets/images/PhoneIcon.png";
import InsuranceIcon from "../../assets/images/InsuranceIcon.png";
import PropTypes from "prop-types";

const InformationSection_Jessica = ({data}) => {
  return (
    <>
      <div className="InformationSection_Jessica">
        <div className="InformationSection_Jessica_head">
          <img className="jessica_head" src={data[0].profile_picture} alt="head" />
        </div>
        <h5 className="Jess">{data[0].name}</h5>
        <div className="InformationSection_Jessica_detail">
          <ul>
            <li className="InformationSection_Jessica_detail_flex">
              <img className="jessica_icon" src={BirthIcon} alt="BirthIcon" />
              <div className="detail_proper">
                <p>Date Of Birth:</p>
                <p>{data[0].date_of_birth}</p>
              </div>
            </li>
            <li className="InformationSection_Jessica_detail_flex">
              <img className="jessica_icon" src={FemaleIcon} alt="BirthIcon" />
              <div className="detail_proper">
                <p>Gender</p>
                <p>{data[0].gender}</p>
              </div>
            </li>
            <li className="InformationSection_Jessica_detail_flex">
              <img className="jessica_icon" src={PhoneIcon} alt="PhoneIcon" />
              <div className="detail_proper">
                <p>Contact Info</p>
                <p>{data[0].phone_number}</p>
              </div>
            </li>
            <li className="InformationSection_Jessica_detail_flex">
              <img className="jessica_icon" src={PhoneIcon} alt="PhoneIcon" />
              <div className="detail_proper">
                <p>Emergency Contacts</p>
                <p>{data[0].emergency_contact}</p>
              </div>
            </li>
            <li className="InformationSection_Jessica_detail_flex">
              <img
                className="jessica_icon"
                src={InsuranceIcon}
                alt="InsuranceIcon"
              />
              <div className="detail_proper">
                <p>Insurance Provider</p>
                <p>{data[0].insurance_type}</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="show_all_flex">
          <button
            className="jessica_show_all"
            onClick={() => {
              alert("Show all information");
            }}
          >
            Show All Information
          </button>
        </div>
      </div>
    </>
  );
};
InformationSection_Jessica.propTypes = {
  data: PropTypes.array.isRequired,  
}; 


export default InformationSection_Jessica;
