import React from "react";


const AuthFooter = ({ footdec }) => {
  return (
    <div className=" mt-4 d-flex flex-column align-items-center auth px-0  position-relative">
      

      <div className=" w-100 m-4 border border-top-2 "></div>
      <div className=" mt-4 text-center d-flex mx-auto">
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
