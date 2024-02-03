import React from "react";


const AuthFooter = ({ footdec }) => {
  return (
    <div className=" mt-4 d-flex flex-column align-items-center auth px-0  position-relative">
      {/**1px solid #e0e2ec */}

      <div className=" w-100 mt-5 mx-5 border border-top-1 "></div>
      <div className=" mt-3 text-center d-flex mx-auto">
        <p>{footdec}</p>
      </div>
    </div>
  );
};

export default AuthFooter;
{
  /** <div className=" d-flex text-center position-relative ">
        <div className="mt-4 text-center font-weight-bold text-black ml-11">
          <strong>{text1} </strong>
          <p>{footdec}</p>
          <p className="font-weight-light">
           {desc1}
          </p>
        
          </div>
        
        </div> */
}
