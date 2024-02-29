import React, { useState } from "react";
import BlogAutomation from "./BlogAutomation";
import { Link } from "react-scroll";
import { IoMdArrowRoundForward } from "react-icons/io";
import ProfileImg from ".././assets/images/chat/profile_image.jpg";
import { GoDotFill } from "react-icons/go";
import { FiKey } from "react-icons/fi";

const sideListName = [
  {
    id: "1",
    title: "On this page",
  },
  {
    id: "2",
    title: "Current",
  },
  {
    id: "3",
    title: "Upcoming",
  },
  {
    id: "4",
    title: "Recent",
  },
];
const BlogOverView = () => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const handleItemClick = (id) => {
    setSelectedItemId(id);
  };
  return (
    <div>
      <BlogAutomation />
      <div className="d-flex flex-row mb-4 ">
        <div
          className="border-right border rounded bg-white p-2"
          style={{ width: "30%" }}
        >
          {sideListName.map((element, id) => {
            const isSelected = selectedItemId === element.id;
            return (
              <div>
                <ul
                  onClick={() => handleItemClick(element.id)}
                  className={`py-2 cursor-pointer ${
                    isSelected ? "selected-item" : ""
                  }`}
                  style={{ backgroundColor: "#d9d8d8", listStyle: "none" }}
                >
                  <li key={id}>
                    <Link
                      to={element.title}
                      smooth={true}
                      offset={-130}
                      duration={500}
                    >
                      {element.title}
                    </Link>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
        {/* Current */}
        <div className="bg-white py-3 border rounded">
          <div id="Current" className="d-flex flex-column px-4 my-2 bg-white">
            <div className="p-3">
              <div className="d-flex justify-content-between">
                <h3>Current blog posts</h3>
                <button className="border px-3 py-2 bg-grey">
                  View history
                  <span className="pl-1">
                    <IoMdArrowRoundForward />
                  </span>
                </button>
              </div>
              <p>
                Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                ipsumLorem ipsumLorem ipsum
              </p>
            </div>
            <div className=" mx-4 my-3" style={{ maxWidth: "460px" }}>
              <div className="border rounded p-4">
                <div>
                  <h3>Some blog heading </h3>
                  <p>
                    Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem
                    ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsum Lorem
                    ......
                  </p>
                  <img
                    src={ProfileImg}
                    alt="blog-post-picture"
                    className="w-100 mb-3"
                    style={{height:"9.385rem"}}
                  />
                </div>
                <h2>Embracing the future : how Ai Enhance Financial...</h2>
                <div className="d-flex flex-column">
                  <div className="d-flex flex-row my-2 px-2 ">
                    <span className="pr-2">
                      <FiKey size={24} />
                    </span>
                    Financial Fritado ai
                  </div>
                  <div className="my-2 d-flex flex-row justify-content-between">
                    <button className="border-0 py-2 px-3 m">
                      <span className="pr-1">
                        <GoDotFill size={24} color="red" />
                        {/* after approval dot will change to green color & buttoen txt set to approved */}
                      </span>
                      Approval Pending
                    </button>
                    <button className="border-0 py-2 px-3">
                      <span className="pr-1">
                        <GoDotFill size={24} />
                      </span>
                      Publishes Feb 29th
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Upcoming */}
          <div
            id="Upcoming"
            className="d-flex flex-column py-2 mx-4 px-4  border-top"
          >
            <div className="p-3">
              <div className="d-flex justify-content-between">
                <h3>Upcoming blog posts</h3>

                <span className="pl-1">
                  <IoMdArrowRoundForward />
                </span>
              </div>
              <p>
                Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                ipsumLorem ipsumLorem ipsum
              </p>
            </div>
            {/* cards - replicating so that make a seperate card component for this  */}
            <div className="d-flex flex-row my-3" style={{ gap: "25px" }}>
              <div className="border rounded p-3">
                <h5> Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </h5>
                <div className="d-flex flex-column">
                  <div className="d-flex flex-row my-2 px-2">
                    <span className="pr-2">
                      <FiKey size={24} />
                    </span>
                    Financial Fritado ai
                  </div>
                  <div className="my-2 d-flex flex-row ">
                    <button className="border-0 py-2 px-3">
                      <span className="pr-1">
                        <GoDotFill size={24} />
                      </span>
                      Available Feb...10
                    </button>
                  </div>
                </div>
              </div>
              <div className="border rounded p-3">
                <h5> Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </h5>
                <div className="d-flex flex-column">
                  <div className="d-flex flex-row my-2 px-2">
                    <span className="pr-2">
                      <FiKey size={24} />
                    </span>
                    Financial Fritado ai
                  </div>
                  <div className="my-2 d-flex flex-row ">
                    <button className="border-0 py-2 px-3">
                      <span className="pr-1">
                        <GoDotFill size={24} />
                      </span>
                      Available Feb...10
                    </button>
                  </div>
                </div>
              </div>
              <div className="border rounded p-3">
                <h5> Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </h5>
                <div className="d-flex flex-column">
                  <div className="d-flex flex-row my-2 px-2">
                    <span className="pr-2">
                      <FiKey size={24} />
                    </span>
                    Financial Fritado ai
                  </div>
                  <div className="my-2 d-flex flex-row ">
                    <button className="border-0 py-2 px-3">
                      <span className="pr-1">
                        <GoDotFill size={24} />
                      </span>
                      Available Feb...10
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent */}
          <div
            id="Recent"
            className="d-flex flex-column border-top py-2 mx-4 px-4"
          >
            <div className="p-3">
              <div className="d-flex justify-content-between">
                <h3>Recent blog posts</h3>

                <span className="pl-1">
                  <IoMdArrowRoundForward />
                </span>
              </div>
              <p>
                Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                ipsumLorem ipsumLorem ipsum
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogOverView;
