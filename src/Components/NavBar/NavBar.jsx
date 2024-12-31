import "../NavBar/NavBar.css"
import TechCare from "../../assets/images/TestLogo.png"
import home from "../../assets/images/home.png"
import patient from "../../assets/images/patient.png"
import schedule from "../../assets/images/schedule.png"
import message from "../../assets/images/message.png"
import transaction from "../../assets/images/transaction.png"
import settings from "../../assets/images/settings.png"
import more from "../../assets/images/more.png"
import senior_doctor from "../../assets/images/senior-doctor.png"

const NavBar = () => {
  //console.log(alert);
  return (
    <>
      <div className="nav">
        <img src={TechCare} alt="TechCare Logo" />

        <ul className="transaction">
          <li>
            <button onClick={()=>alert("You clicked me")}>
              <img src={home} alt="home" />
              Overview
            </button>
          </li>
          <li>
            <button onClick={()=>alert("You clicked me")}>
              <img src={patient} alt="patient" />
              Patients
            </button>
          </li>
          <li>
            <button onClick={()=>alert("You clicked me")}>
              <img src={schedule} alt="schedule" />
              Schedule
            </button>
          </li>
          <li>
            <button onClick={()=>alert("You clicked me")}>
              <img src={message} alt="message" />
              Message
            </button>
          </li>
          <li>
            <button onClick={()=>alert("You clicked me")}>
              <img src={transaction} alt="" />
              Transaction
            </button>
          </li>
        </ul>
        <div className="nav_social">
          <img src={senior_doctor} alt="senior_doctor" />
          <div className="nav_social_write">
            <p>Dr. Jose Simmons</p>
            <p>General Practitioner</p>
          </div>
          <div className="navsocial_setting_more">
            <img src={settings} alt="settings" />
            <img src={more} alt="more" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
