import React from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { MdAdd } from "react-icons/md";


const BusinessProfile = () => {
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title"> Business Profile </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="!#" onClick={(event) => event.preventDefault()}>
                On Boarding
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Business Profile
            </li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Business profile</h4>
              <p className="card-description">
                Fritado leverages your business name and description to craft
                pertinent content. It is essential for the description to be
                accurate and concise
              </p>
              <form className="forms-sample">
                <Form.Group>
                  <label htmlFor="exampleInputName1">Name</label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="exampleInputName1"
                    placeholder="Name"
                  />
                </Form.Group>

                <Form.Group>
                  <label htmlFor="exampleTextarea1">Textarea</label>
                  <textarea
                    className="form-control"
                    id="exampleTextarea1"
                    col=""
                    rows="4"
                  ></textarea>
                </Form.Group>
                <button type="submit" className="btn btn-primary mr-2">
                  Submit
                </button>
                <button className="btn btn-light">Cancel</button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Location</h4>
              <p className="card-description">
                Fritado can autonomously generate content focused on your
                business's location, enhancing the ability to reach more
                pertinent prospective customers.
              </p>
              <form className="forms-sample">
                <Form.Group>
                  <label htmlFor="exampleInputName1">Location</label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="exampleInputName1"
                    placeholder="location"
                  />
                </Form.Group>
              </form>
            </div>
          </div>
        </div>

        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Product & Services</h4>
              <p className="card-description">
                Fritado can autonomously generate content focused on your
                business's location, enhancing the ability to reach more
                pertinent prospective customers.
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
                  <label htmlFor="exampleInputName1">Product & Services</label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="exampleInputName1"
                    placeholder="Product & Services"
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="exampleInputName1">Product & Services</label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="exampleInputName1"
                    placeholder="Product & Services"
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

export default BusinessProfile;
