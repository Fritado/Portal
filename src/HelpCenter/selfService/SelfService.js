import React, { useState } from "react";
import Header from "../../common/Header";
import { IoSearch } from "react-icons/io5";
import AuthFooter from "../../common/AuthFooter";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

import {
  FritadoOverView,
  GettingStarted,
  Features,
  Fritadopro,
  GeneralResources,
} from "../../data/HelpCenterData";

const SelfService = () => {
  const [show, setShow] = useState(false);
  const [FritadoOverViews, setFritadoOverViews] = useState(FritadoOverView);
  const [gettingStart, setgettingStart] = useState(GettingStarted);
  const [Feature, setFeature] = useState(Features);
  const [FritadoProo, setFritadoProo] = useState(Fritadopro);
  const [GeneralResource, setGeneralResource] = useState(GeneralResources);

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

                    {FritadoOverViews.map((ele) => {
                      return (
                        <div className="py-1 d-flex flex-row justify-content-between ">
                          <p
                            onClick={() => setShow(!show)}
                            className="cursor-pointer"
                          >
                            {ele.title}
                          </p>
                          <span className="mr-2">
                            {show ? (
                              <MdKeyboardArrowDown size={20} />
                            ) : (
                              <MdKeyboardArrowRight size={20} />
                            )}
                          </span>

                          {show && (
                            <div className="my-1 ml-12">{ele.flipContent}</div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/*/* inner section-2 , it will replicate*/}
                <section
                  className="mt-3 px-4 py-4 bg-white border"
                  style={{ borderRadius: "10px" }}
                >
                  <div className="border-bottom pb-1 pt-2">
                    <h2 className="pb-2">Getting Started</h2>
                  </div>
                  <div className="pt-3">
                    {/**This div will replicate and from here all list will be wrapped inside link to open new pages */}

                    {gettingStart.map((ele) => {
                      return (
                        <div className="py-1 d-flex flex-row justify-content-between ">
                          <p
                            onClick={() => setShow(!show)}
                            className="cursor-pointer"
                          >
                            {ele.title}
                          </p>
                          <span className="mr-2">
                            {show ? (
                              <MdKeyboardArrowDown size={20} />
                            ) : (
                              <MdKeyboardArrowRight size={20} />
                            )}
                          </span>

                          {show && (
                            <div className="my-1 ml-12">{ele.flipContent}</div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>
                {/*/* inner section-3 , it will replicate*/}
                <section
                  className="mt-3 px-4 py-4 bg-white border"
                  style={{ borderRadius: "10px" }}
                >
                  <div className="border-bottom pb-1 pt-2">
                    <h2 className="pb-2">Features</h2>
                  </div>
                  <div className="pt-3">
                    {/**This div will replicate and from here all list will be wrapped inside link to open new pages */}

                    {Feature.map((ele) => {
                      return (
                        <div className="py-1 d-flex flex-row justify-content-between ">
                          <p
                            onClick={() => setShow(!show)}
                            className="cursor-pointer"
                          >
                            {ele.title}
                          </p>
                          <span className="mr-2">
                            {show ? (
                              <MdKeyboardArrowDown size={20} />
                            ) : (
                              <MdKeyboardArrowRight size={20} />
                            )}
                          </span>

                          {show && (
                            <div className="my-1 ml-12">{ele.flipContent}</div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>
                {/*/* inner section-4 , it will replicate*/}
                <section
                  className="mt-3 px-4 py-4 bg-white border"
                  style={{ borderRadius: "10px" }}
                >
                  <div className="border-bottom pb-1 pt-2">
                    <h2 className="pb-2">Fritado Pro</h2>
                  </div>
                  <div className="pt-3">
                    {/**This div will replicate and from here all list will be wrapped inside link to open new pages */}

                    {FritadoProo.map((ele) => {
                      return (
                        <div className="py-1 d-flex flex-row justify-content-between ">
                          <p
                            onClick={() => setShow(!show)}
                            className="cursor-pointer"
                          >
                            {ele.title}
                          </p>
                          <span className="mr-2">
                            {show ? (
                              <MdKeyboardArrowDown size={20} />
                            ) : (
                              <MdKeyboardArrowRight size={20} />
                            )}
                          </span>

                          {show && (
                            <div className="my-1 ml-12">{ele.flipContent}</div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>
                {/*/* inner section-5 , it will replicate*/}
                <section
                  className="mt-3 px-4 py-4 bg-white border"
                  style={{ borderRadius: "10px" }}
                >
                  <div className="border-bottom pb-1 pt-2">
                    <h2 className="pb-2">General Resources</h2>
                  </div>
                  <div className="pt-3">
                    {/**This div will replicate and from here all list will be wrapped inside link to open new pages */}

                    {GeneralResources.map((ele) => {
                      return (
                        <div className="py-1 d-flex flex-row justify-content-between ">
                          <p
                            onClick={() => setShow(!show)}
                            className="cursor-pointer"
                          >
                            {ele.title}
                          </p>
                          <span className="mr-2">
                            {show ? (
                              <MdKeyboardArrowDown size={20} />
                            ) : (
                              <MdKeyboardArrowRight size={20} />
                            )}
                          </span>

                          {show && (
                            <div className="my-1 ml-12">{ele.flipContent}</div>
                          )}
                        </div>
                      );
                    })}
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
