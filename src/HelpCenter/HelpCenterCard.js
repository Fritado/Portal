import React from "react";
import { IoIosHelpCircleOutline } from "react-icons/io";

const HelpCenterCard = () => {
 
  return (
    <div>
      <div
        className=" p-4 d-flex flex-column border mx-auto bg-white help-card"
        style={{ width: "100%" , borderRadius:"10px" }}
      >
        <span className="" style={{width:"25px" ,padding:"12px",}}>
          <IoIosHelpCircleOutline style={25}/>
        </span>
        <div className=" py-2 mt-2">
          <h3>Seona</h3>
          <p>Click here for questions about our SEO Assistant , Seona</p>
        </div>
        
      </div>
    </div>
  );
};

export default HelpCenterCard;
