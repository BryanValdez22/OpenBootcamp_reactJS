import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/task";

const TaskListComponent = () => {
  const defaultTask = new Task(
    "Example",
    "Default Description",
    false,
    LEVELS.NORMAL
  );

  // estado del componente
  const [tasks, setTasks] = useState([defaultTask]);
  const [loading, setLoading] = useState(true);

  // control del ciclo de vida del componente
  useEffect(() => {
    console.log("Task Estate has been modified");
    setLoading(false);
    return () => {
      console.log("Tasks List component is going unmount...");
    };
  }, [tasks]);

  const changeComplete = (id) => {
    console.log("TODO: Cambiar estado de una tarea");
  };

  return (
    <div>
      <div className="col-12">
        <div className="card">
          <div className="card-header p-3">
            <h5>Your Task:</h5>
          </div>
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}
          >
            <table>
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Priority</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* TODO: iterar sobre una lista de tareas */}
                <TaskComponent task={defaultTask}></TaskComponent>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskListComponent;
