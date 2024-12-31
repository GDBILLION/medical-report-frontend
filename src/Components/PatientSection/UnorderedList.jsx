import horizontal from "../../assets/images/horizontal.svg";
import emily from "../../assets/images/emily.png";
import Ryan from "../../assets/images/Ryan.png";
import Brandon from "../../assets/images/Brandon.png";
import Jessica from "../../assets/images/Jessica.png";
import samantha from "../../assets/images/samantha.png";
import ashley from "../../assets/images/ashley.png";
import brown from "../../assets/images/brown.png";
import Tyler from "../../assets/images/Tyler.png";
import Kelvin from "../../assets/images/Kelvin.png";
import Dylan from "../../assets/images/Dylan.png";
import Mike from "../../assets/images/Mike.png";
import PropTypes from "prop-types";

const UnorderedList = ({data}) => {
  console.log(data[0].name);
  return (
    <>
      <ul className="scrollable" style={{
        maxHeight: "100%",
        width: "100%",
        overflowY: "auto", 
        overflowX: "hidden",  
        marginBottom: "1em", 
        paddingRight: "8px", 
        scrollbarWidth: "thin"
      }}>
        <li className="patientSection_search">
          <div className="name_details">
            <img className="patient_name_img" src={emily} alt="emily" />
            <div className="stop">
              <p className="bold">Emily Williams</p>
              <p className="light">Female, 18</p>
            </div>
          </div>
          <img src={horizontal} alt="more" />
        </li>

        <li className="patientSection_search">
          <div className="name_details">
            <img className="patient_name_img" src={Ryan} alt="Ryan" />
            <div className="stop">
              <p className="bold">Ryan Johnson</p>
              <p className="light">Male, 45</p>
            </div>
          </div>
          <img src={horizontal} alt="more" />
        </li>

        <li className="patientSection_search">
          <div className="name_details">
            <img className="patient_name_img" src={Brandon} alt="Brandon" />
            <div className="stop">
              <p className="bold">Brandon Mitchelle</p>
              <p className="light">Male, 36</p>
            </div>
          </div>
          <img src={horizontal} alt="more" />
        </li>

        <li className="patientSection_search">
          <div className="name_details">
            <img className="patient_name_img" src={Jessica} alt="Jessica" />
            <div className="stop">
              <p className="bold">{data[0].name}</p>
              <p className="light">{data[0].gender}, {data[0].age}</p>
            </div>
          </div>
          <img src={horizontal} alt="more" />
        </li>

        <li className="patientSection_search">
          <div className="name_details">
            <img className="patient_name_img" src={samantha} alt="samantha" />
            <div className="stop">
              <p className="bold">Samantha Johnson</p>
              <p className="light">Female, 28</p>
            </div>
          </div>
          <img src={horizontal} alt="more" />
        </li>

        <li className="patientSection_search">
          <div className="name_details">
            <img className="patient_name_img" src={ashley} alt="ashley" />
            <div className="stop">
              <p className="bold">Ashley Martinez</p>
              <p className="light">Female, 56</p>
            </div>
          </div>
          <img src={horizontal} alt="more" />
        </li>

        <li className="patientSection_search">
          <div className="name_details">
            <img className="patient_name_img" src={brown} alt="Brown" />
            <div className="stop">
              <p className="bold">Olivia Brown</p>
              <p className="light">Female, 32</p>
            </div>
          </div>
          <img src={horizontal} alt="more" />
        </li>

        <li className="patientSection_search">
          <div className="name_details">
            <img className="patient_name_img" src={Tyler} alt="Tyler" />
            <div className="stop">
              <p className="bold">Tyler Davis</p>
              <p className="light">Male, 19</p>
            </div>
          </div>
          <img src={horizontal} alt="more" />
        </li>

        <li className="patientSection_search">
          <div className="name_details">
            <img className="patient_name_img" src={Kelvin} alt="kelvin" />
            <div className="stop">
              <p className="bold">Kelvin Anderson</p>
              <p className="light">Male, 30</p>
            </div>
          </div>
          <img src={horizontal} alt="more" />
        </li>

        <li className="patientSection_search">
          <div className="name_details">
            <img className="patient_name_img" src={Dylan} alt="Dylan" />
            <div className="stop">
              <p className="bold">Dylan Thompson</p>
              <p className="light">Male, 36</p>
            </div>
          </div>
          <img src={horizontal} alt="more" />
        </li>

        <li className="patientSection_search">
          <div className="name_details">
            <img className="patient_name_img" src={Mike} alt="Mike" />
            <div className="stop">
              <p className="bold">Mike Nolan</p>
              <p className="light">Male, 31</p>
            </div>
          </div>
          <img src={horizontal} alt="more" />
        </li>
        <li className="patientSection_search">
          <div className="name_details">
            <img className="patient_name_img" src={Mike} alt="Mike" />
            <div className="stop">
              <p className="bold">Mike Nolan</p>
              <p className="light">Male, 31</p>
            </div>
          </div>
          <img src={horizontal} alt="more" />
        </li>
        <li className="patientSection_search">
          <div className="name_details">
            <img className="patient_name_img" src={Mike} alt="Mike" />
            <div className="stop">
              <p className="bold">Mike Nolan</p>
              <p className="light">Male, 31</p>
            </div>
          </div>
          <img src={horizontal} alt="more" />
        </li>
        <li className="patientSection_search">
          <div className="name_details">
            <img className="patient_name_img" src={Mike} alt="Mike" />
            <div className="stop">
              <p className="bold">Mike Nolan</p>
              <p className="light">Male, 31</p>
            </div>
          </div>
          <img src={horizontal} alt="more" />
        </li>
        <li className="patientSection_search">
          <div className="name_details">
            <img className="patient_name_img" src={Mike} alt="Mike" />
            <div className="stop">
              <p className="bold">Mike Nolan</p>
              <p className="light">Male, 31</p>
            </div>
          </div>
          <img src={horizontal} alt="more" />
        </li>


      </ul>
    </>
  );
};


UnorderedList.propTypes = {
  data: PropTypes.array.isRequired, // Ensure it's an array
};

export default UnorderedList;
