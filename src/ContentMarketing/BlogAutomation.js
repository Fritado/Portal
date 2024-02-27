import React from 'react'
import { Link } from "react-router-dom";

const BlogtabsName = [
  { id: "1", title: "Overview", path: "/overview" },
  { id: "2", title: "PageSpeed Insights", path: "/pagespeed" },
  { id: "3", title: "Preview", path: "#" },
  { id: "4", title: "Settings", path: "#" },
];
const BlogAutomation = () => {
  return (
    <div>
    <div className="d-flex flex-row border-bottom mb-3 py-3">
      {BlogtabsName.map((ele, index) => {
        return (
          <div key={index} className="pr-4">
            <Link to={ele.path}>{ele.title}</Link>
          </div>
        );
      })}
    </div>
  </div>
  )
}

export default BlogAutomation
