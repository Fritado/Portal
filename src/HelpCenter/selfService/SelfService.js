import React, { useState } from "react";
import Header from "../../common/Header";
import { IoSearch } from "react-icons/io5";
import AuthFooter from "../../common/AuthFooter";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import FritadoOverviewPg1 from "./Fritado-Overview/FritadoOverviewPg1";
import FritadoOverviewPg2 from "./Fritado-Overview/FritadoOverviewPg2";

const SelfService = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div
        className="px-4 mt-4"
        style={{ marginRight: "4rem", marginLeft: "4rem" }}
      >
        {/*Section-2 */}
        <div className="mt-4">
          <section className="d-flex flex-column">
            <div>
              <div className="d-flex flex-column">
                <h1>Fritado</h1>
                <p>Click here for questions about our SEO Assistant,Fritado</p>
              </div>
              <div
                className=" d-flex flex-column mt-2"
                style={{ gap: "25px", borderRadius: "8px" }}
              >
                {/* inner section-1 , it will replicate*/}
                <section
                  className="mt-3 px-4 py-4 bg-white border"
                  style={{ borderRadius: "10px" }}
                >
                  <div className="border-bottom pb-1 pt-2">
                    <h2 className="pb-2">Fritado Overview</h2>
                  </div>
                  <div className="pt-3">
                    {/**This div will replicate and from here all list will be wrapped inside link to open new pages */}
                    <div>
                      <div
                        onClick={() => setShow(!show)}
                        className="pb-1 d-flex flex-row justify-content-between "
                      >
                        <p className="cursor-pointer">What is fritado ?</p>
                        <span className="mr-2">
                          {show ? (
                            <MdKeyboardArrowDown size={20} />
                          ) : (
                            <MdKeyboardArrowRight size={20} />
                          )}
                        </span>
                      </div>
                      {show && 
                        <div className="my-1 ml-12">
                          <FritadoOverviewPg1 />
                        </div>
                     }
                    </div>
                    <div>
                      <div 
                      onClick={() => setShow(!show)}
                      className=" pb-1 d-flex flex-row justify-content-between">
                        <p className="cursor-pointer">My SEO Progresso</p>
                        <span className="mr-2">
                          {show ? (
                            <MdKeyboardArrowDown size={20} />
                          ) : (
                            <MdKeyboardArrowRight size={20} />
                          )}
                        </span>
                      </div>
                      {show ? (
                        <div className="my-1 ml-12">
                          <FritadoOverviewPg2 />
                        </div>
                      ) : null}
                    </div>
                    <div className=" pb-1 d-flex flex-row justify-content-between">
                      <p>Seona Affecting My Website</p>
                      <span className="mr-2">
                        <MdKeyboardArrowRight size={20} />
                      </span>
                    </div>
                    <div className=" pb-1 d-flex flex-row justify-content-between">
                      <p style={{ fontSize: "1.1rem" }}>Pricing and Billing</p>
                      <span className="mr-2">
                        <MdKeyboardArrowRight size={20} />
                      </span>
                    </div>
                  </div>
                </section>
                {/*/* inner section-2 , it will replicate*/}
                <section
                  className=" mt-3 px-4 py-4 bg-white border"
                  style={{ borderRadius: "10px" }}
                >
                  <div className="border-bottom py-1">
                    <h2 className="pb-2">Getting Started</h2>
                  </div>
                  <div className="pt-3">
                    {/**This div will replicate and from here all list will be wrapped inside link to open new pages */}
                    <div className="pb-1 d-flex flex-row justify-content-between">
                      <p>Onboarding</p>
                      <span className="mr-2">
                        <MdKeyboardArrowRight size={20} />
                      </span>
                    </div>
                    <div className=" pb-1 d-flex flex-row justify-content-between">
                      <p>Setting Up Fritado</p>
                      <span className="mr-2">
                        <MdKeyboardArrowRight size={20} />
                      </span>
                    </div>
                    <div className=" pb-1 d-flex flex-row justify-content-between">
                      <p>Getting Started Troubleshooting</p>
                      <span className="mr-2">
                        <MdKeyboardArrowRight size={20} />
                      </span>
                    </div>
                    <div className=" pb-1 d-flex flex-row justify-content-between">
                      <p style={{ fontSize: "1.1rem" }}>
                        Website Linking Instructions
                      </p>
                      <span className="mr-2">
                        <MdKeyboardArrowRight size={20} />
                      </span>
                    </div>
                    <div className=" pb-1 d-flex flex-row justify-content-between">
                      <p style={{ fontSize: "1.1rem" }}>
                        Website Linking Troubleshooting
                      </p>
                      <span className="mr-2">
                        <MdKeyboardArrowRight size={20} />
                      </span>
                    </div>
                  </div>
                </section>

                {/*/* inner section-3 , it will replicate*/}
                <section
                  className=" mt-3 px-4 py-4 bg-white border"
                  style={{ borderRadius: "10px" }}
                >
                  <div className="border-bottom py-1">
                    <h2 className="pb-2">Features</h2>
                  </div>
                  <div className="pt-3">
                    {/**This div will replicate and from here all list will be wrapped inside link to open new pages */}
                    <div className="pb-1 d-flex flex-row justify-content-between">
                      <p>Overview Page</p>
                      <span className="mr-2">
                        <MdKeyboardArrowRight size={20} />
                      </span>
                    </div>
                    <div className=" pb-1 d-flex flex-row justify-content-between">
                      <p>Blog Posts</p>
                      <span className="mr-2">
                        <MdKeyboardArrowRight size={20} />
                      </span>
                    </div>
                    <div className=" pb-1 d-flex flex-row justify-content-between">
                      <p>Code Changes</p>
                      <span className="mr-2">
                        <MdKeyboardArrowRight size={20} />
                      </span>
                    </div>
                    <div className=" pb-1 d-flex flex-row justify-content-between">
                      <p style={{ fontSize: "1.1rem" }}>Keywords</p>
                      <span className="mr-2">
                        <MdKeyboardArrowRight size={20} />
                      </span>
                    </div>
                  </div>
                </section>
                {/*/* inner section-4 , it will replicate*/}
                <section
                  className=" mt-3 px-4 py-4 bg-white border"
                  style={{ borderRadius: "10px" }}
                >
                  <div className="border-bottom py-1">
                    <h2 className="pb-2">Fritado Pro</h2>
                  </div>
                  <div className="pt-3">
                    {/**This div will replicate and from here all list will be wrapped inside link to open new pages */}
                    <div className="pb-1 d-flex flex-row justify-content-between">
                      <p>What is fritado Pro?</p>
                      <span className="mr-2">
                        <MdKeyboardArrowRight size={20} />
                      </span>
                    </div>
                  </div>
                </section>
                {/*/* inner section-5 , it will replicate*/}
                <section
                  className=" mt-3 px-4 py-4 bg-white border"
                  style={{ borderRadius: "10px" }}
                >
                  <div className="border-bottom py-1">
                    <h2 className="pb-2">General Resources</h2>
                  </div>
                  <div className="pt-3">
                    {/**This div will replicate and from here all list will be wrapped inside link to open new pages */}
                    <div className="pb-1 d-flex flex-row justify-content-between">
                      <p>Settings Page</p>
                      <span className="mr-2">
                        <MdKeyboardArrowRight size={20} />
                      </span>
                    </div>
                    <div className=" pb-1 d-flex flex-row justify-content-between">
                      <p>Product Updates</p>
                      <span className="mr-2">
                        <MdKeyboardArrowRight size={20} />
                      </span>
                    </div>
                    <div className=" pb-1 d-flex flex-row justify-content-between">
                      <p>System Requirements</p>
                      <span className="mr-2">
                        <MdKeyboardArrowRight size={20} />
                      </span>
                    </div>
                    <div className=" pb-1 d-flex flex-row justify-content-between">
                      <p style={{ fontSize: "1.1rem" }}>SEO Basics</p>
                      <span className="mr-2">
                        <MdKeyboardArrowRight size={20} />
                      </span>
                    </div>
                    <div className=" pb-1 d-flex flex-row justify-content-between">
                      <p style={{ fontSize: "1.1rem" }}>
                        Preferred Website Providers
                      </p>
                      <span className="mr-2">
                        <MdKeyboardArrowRight size={20} />
                      </span>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SelfService;
