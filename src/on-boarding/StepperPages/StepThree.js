import React from 'react'
import { TfiControlBackward ,TfiControlForward } from "react-icons/tfi";

const StepThree = ({ onPrev, onNext }) => {
  return (
    <div>
      <span className="d-flex flex-row">Explore your dashboard</span>
      <div className="d-flex flex-column mt-4 border">
        <div className="d-flex flex-column py-4 px-3">
          <h2>Watch our guide</h2>
          <p>
            Lorem lorem lorem lorem lorem Lorem lorem lorem lorem loremLorem
            lorem lorem lorem loremLorem lorem lorem lorem lorem
          </p>
        </div>
        <div className="mx-3 my-7">
          <video
            className=""
            muted
            loop
            autoPlay
          >
            <source type="video/mp4"></source>
          </video>
          </div>
      </div>
      <div className="d-flex justify-content-center mx-auto  mt-4 ">
        <button className=" text-dark btn pr-2  mx-2" onClick={onPrev}> <span className="mr-1"><TfiControlBackward /></span>Prev</button>
        <button className="btn text-dark pl-2 mx-2" onClick={onNext}>Next <span className="ml-1"><TfiControlForward /></span></button>
      </div>
    </div>
  )
}

export default StepThree
