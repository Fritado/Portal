import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import BlogAutomation from "./BlogAutomation";
import { MdEdit , MdDelete  } from "react-icons/md";

const dummydata = [
  {
    id:"1",
    name: "Jeevan",
    age: 21,
    gender: "male",
  },
  {
    id:"2",
    name: "Piyush",
    age: 17,
    gender: "male",
  },
  {
    id:"3",
    name: "Arti",
    age: 22,
    gender: "female",
  },
  {
    id:"4",
    name: "Subham",
    age: 21,
    gender: "male",
  },
  {
    id:"5",
    name: "Yuvraj",
    age: 23,
    gender: "male",
  },
];

const UpcomingBlogs = () => {
  const [users, setUsers] = useState(dummydata);

  const handleDragEnd = (e) => {
    if (!e.destination) return;
    let tempData = Array.from(users);
    let [source_data] = tempData.splice(e.source.index, 1);
    tempData.splice(e.destination.index, 0, source_data);
    setUsers(tempData);
  };
  return (
    <div className="">
      <BlogAutomation />

      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Upcoming Blog Posts</h4>
            <p className="card-description">
              {" "}
              Add className <code>.table-dark</code>
            </p>
            <DragDropContext onDragEnd={handleDragEnd}>
              <div className="table-responsive">
                <table className="table table-dark">
                  <thead>
                    <tr>
                      <th> Priority </th>
                      <th>Blog Topic</th>
                      <th>To be published</th>
                      <th></th>
                    </tr>
                  </thead>
                  <Droppable droppableId="droppable-1">
                    {(provider) => (
                      <tbody
                        className="text-capitalize"
                        ref={provider.innerRef}
                        {...provider.droppableProps}
                      >
                        {users?.map((user, index) => (
                          <Draggable
                            key={user.name}
                            draggableId={user.name}
                            index={index}
                          >
                            {(provider) => (
                              <tr
                                {...provider.draggableProps}
                                ref={provider.innerRef}
                              >
                                <td {...provider.dragHandleProps}> {user.id} </td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>
                                  <div className="d-flex flex-row">
                                    <span className="pr-4"><MdEdit /></span>
                                    <span className="pl-4"><MdDelete/></span>
                                  </div>
                                </td>
                              </tr>
                            )}
                          </Draggable>
                        ))}
                        {provider.placeholder}
                      </tbody>
                    )}
                  </Droppable>
                </table>
              </div>
            </DragDropContext>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingBlogs;
