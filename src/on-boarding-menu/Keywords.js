import React, { useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { RiArrowUpDownLine } from "react-icons/ri";
import AddKeyword from "./AddKeyword";
import axios from "axios";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";

const Keywords = () => {
  const [showModal, setShowModal] = useState(false);
  const [keywords, setKeywords] = useState([]);
  const [filterVal, setFilterVal] = useState("");
  const [searchApiData, setSearchAPIData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  // const records = keyword.slice(firstIndex, lastIndex);
  const [totalPages, setTotalPages] = useState(0);
  const [numbers, setNumbers] = useState([]);
  // const totalPages = Math.ceil(keyword.length / recordsPerPage);
  // const numbers = [...Array(totalPages + 1).keys()].slice(1);

  const columns = [
    { dataField: "id", text: "Id" },
    { dataField: "name", text: "Name", sort: true },
    { dataField: "username", text: "username", sort: true },
  ];

  useEffect(() => {
    getKeyWords();
  }, []);

  useEffect(() => {
    const total = Math.ceil(keywords.length / recordsPerPage);
    setTotalPages(total);
    setNumbers([...Array(total + 1).keys()].slice(1));
  }, [keywords, recordsPerPage]);

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function nextPage() {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function changeCurrentPage(id) {
    setCurrentPage(id);
  }
  const handleFilter = (e) => {
    if (e.target.value === "") {
      setKeywords(searchApiData);
    } else {
      const filteredData = searchApiData.filter(
        (item) =>
          item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.username.toLowerCase().includes(e.target.value.toLowerCase())
      );

      if (filteredData.length > 0) {
        setKeywords(filteredData);
      } else {
        setKeywords([{ name: "No Data" }]);
      }
    }
    setFilterVal(e.target.value);
  };

  const getKeyWords = async (e) => {
    const getKeywordsUrl =
      "http://localhost:4000/api/businessProfile/get-keywords";
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found");
      }
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(getKeywordsUrl, config);
      const data = response.data.data.keywords[0];
      const shortTailIndex = data.indexOf("Short Tail Keywords:");
      const longTailIndex = data.indexOf("Long Tail Keywords:");

      if (shortTailIndex === -1 || longTailIndex === -1) {
        throw new Error("Invalid response format: missing keywords");
      }

      const shortTailKeywords = data
        .substring(shortTailIndex + 20, longTailIndex)
        .split("\n")
        .filter(Boolean);

      const longTailKeywords = data
        .substring(longTailIndex + 18)
        .split("\n")
        .filter(Boolean);

      const combinedKeywords = [...shortTailKeywords, ...longTailKeywords];

      setKeywords(
        combinedKeywords.map((keyword) => keyword.replace(/^\d+\.\s*/, ""))
      );
      console.log("combinedKeywords", combinedKeywords);
    } catch (Error) {
      console.error("Error while fetching KeyWords data", Error);
    }
  };

  //   return keyword.map((keyword, index) => (
  //     <tr key={index}>
  //       <td>{index + 1}</td>
  //       <td>
  //         <span className="pr-3">
  //           <IoDiamond size={22} />
  //         </span>
  //         {keyword.name}
  //       </td>
  //       <td>{keyword.username}</td>
  //     </tr>
  //   ));
  // };
  return (
    <div>
      <div className="page-header">
        <h2 className="text-dark font-weight-bold mb-2"> KeyWords</h2>
      </div>
      <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">
                Fritado will write blog posts around keywords in order to
                increase traffic and attract customers based on what they search
                for.
              </h4>
              <h4>
                Fritado suggests focusing on easily accessible keywords,
                considering the popularity of your website
              </h4>
              <div className="mt-4 pt-3 d-flex flex-row justify-content-between">
                <div>
                  <input
                    type="search"
                    placeholder="Search"
                    value={filterVal}
                    onInput={(e) => handleFilter(e)}
                    className="px-4 py-2 border rounded mb-3"
                  />
                </div>
                <button
                  onClick={() => setShowModal(true)}
                  className="btn btn-primary border py-0 rounded px-3 "
                >
                  Add{" "}
                  <span>
                    <MdAdd size={22} />
                  </span>
                </button>
              </div>
              {showModal && (
                <AddKeyword OncloseModal={() => setShowModal(false)} />
              )}

              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>S.no</th>
                      <th style={{ paddingLeft: "2.5rem" }}>
                        <span className="pr-2">
                          <RiArrowUpDownLine size={18} />
                        </span>
                        Keyword
                      </th>
                      <th>
                        <span className="pr-2">
                          <RiArrowUpDownLine size={18} />
                        </span>
                        Search Volume
                      </th>
                      <th>
                        <span className="pr-2">
                          <RiArrowUpDownLine size={18} />
                        </span>
                        Competition
                      </th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {keywords.map((keyword, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{keyword}</td>
                        <td>100</td>
                        <td>#</td>
                        <td>
                          <span className="pr-3">
                            <CiEdit size={22} />
                          </span>
                          <span className="pl-3">
                            <MdDeleteForever size={22} />
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <nav className="mt-3 d-flex justify-content-end">
                  <ul className="pagination">
                    <li className="page-item">
                      <a href="#" className="page-link" onClick={prePage}>
                        Prev
                      </a>
                    </li>
                    {numbers.map((n, i) => (
                      <li
                        className={`page-item ${
                          currentPage === n ? "active" : ""
                        }`}
                        key={i}
                      >
                        <a
                          href="#"
                          className="page-link"
                          onClick={() => changeCurrentPage(n)}
                        >
                          {n}
                        </a>
                      </li>
                    ))}
                    <li className="page-item">
                      <a href="#" className="page-link" onClick={nextPage}>
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keywords;
