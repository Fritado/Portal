import React from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { MdAdd } from "react-icons/md";

const Competetors = () => {
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Competetors</h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="!#" onClick={(event) => event.preventDefault()}>
                On Boarding
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Competetors
            </li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Competetors Analysis</h4>
              <p className="card-description">
                Provide a list of your business competitors, and we'll analyze
                their online presence to ensure your visibility at the forefront
                of search results.
              </p>

              <form className="forms-sample">
                <div style={{ textAlign: "right" }} className="mt-2">
                  <Link to="/add-keyword">
                    <button className="btn btn-primary border rounded py-2 px-3 mx-2">
                      Add{" "}
                      <span>
                        <MdAdd size={22} />
                      </span>
                    </button>
                  </Link>
                </div>

                <Form.Group>
                  <label htmlFor="exampleInputName1">Competetors </label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="exampleInputName1"
                    placeholder="abc.com "
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="exampleInputName1">Competetors </label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="exampleInputName1"
                    placeholder="abc.com "
                  />
                </Form.Group>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competetors;
