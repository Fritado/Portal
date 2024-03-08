import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import BlogOverView from "./BlogOverView";

const BlogtabsName = [
  { id: "1", title: "Overview", path: "/blog-automation" },
  { id: "2", title: "History", path: "/blog-history" },
  { id: "3", title: "Settings", path: "#" },
];
const BlogAutomation = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="d-sm-flex page-header">
        <h1 className="text-dark font-weight-bold mb-2">Blog Automation</h1>
      </div>
      <div className="d-flex flex-row border-bottom mb-3 py-3">
        {BlogtabsName.map((ele) => {
          return (
            <div key={ele.id} className={`pr-4`}>
              <Link to={ele.path} exact>
                {ele.title}
              </Link>
            </div>
          );
        })}
      </div>
      {/* scroll to top */}
      {showButton && (
        <div
          className={`position-relative mb-4 scrollToTop `}
          style={{ float: "right"}}
        >
          <span
            onClick={handleScrollToTop}
            className="cursor-pointer position-fixed rounded pl-1"
            style={{
              bottom: "5.5rem",
              width: "36px",
              padding: "6px",
              backgroundColor: "rgba(47, 130, 162, 0.86)",
            }}
          >
            <IoArrowUpCircleOutline size={26} color="white" />
          </span>
        </div>
      )}
    </div>
  );
};

export default BlogAutomation;
