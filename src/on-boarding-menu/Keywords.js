import React, { useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoDiamond, IoArrowDownOutline } from "react-icons/io5";
import { RiArrowUpDownLine } from "react-icons/ri";
import AddKeyword from "./AddKeyword";
import axios from "axios";

const Keywords = () => {
  const [showModal, setShowModal] = useState(false);
  const [keyword, setKeyword] = useState([]);
  const [filterVal, setFilterVal] = useState("");
  const [searchApiData, setSearchAPIData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = keyword.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(keyword.length / recordsPerPage);
  const numbers = [...Array(totalPages + 1).keys()].slice(1);

  const columns = [
    { dataField: "id", text: "Id" },
    { dataField: "name", text: "Name", sort: true },
    { dataField: "username", text: "username", sort: true },
  ];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        setKeyword(res);
        setSearchAPIData(res);
      })
      .catch((error) => console.log(error));
  }, []);

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
      setKeyword(searchApiData);
    } else {
      const filteredData = searchApiData.filter(
        (item) =>
          item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.username.toLowerCase().includes(e.target.value.toLowerCase())
      );

      if (filteredData.length > 0) {
        setKeyword(filteredData);
      } else {
        setKeyword([{ name: "No Data" }]);
      }
    }
    setFilterVal(e.target.value);
  };

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
                      <th style={{ paddingLeft: "2.5rem" }}>
                        {" "}
                        <span className="pr-2">
                          <RiArrowUpDownLine size={18} />
                        </span>
                        Keyword{" "}
                      </th>
                      <th style={{ textAlign: "end" }}>
                        Monthly Searches{" "}
                        <span className="pl-1">
                          <IoArrowDownOutline size={18} />
                        </span>
                      </th>
                      <th>
                        Difficulty{" "}
                        <span className="pl-2">
                          <RiArrowUpDownLine size={18} />
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {records.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <span className="pr-3">
                              <IoDiamond size={22} />
                            </span>
                            {item.name}
                          </td>
                          <td style={{ textAlign: "end" }}>{item.id} </td>
                          <td> {item.username}</td>
                        </tr>
                      );
                    })}
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
