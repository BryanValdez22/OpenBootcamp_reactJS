import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

// Importamos el estilo css
import "../../styles/task.scss";

const TaskComponent = ({ task }) => {
  useEffect(() => {
    console.log("Created Task");
    return () => {
      console.log(`Task: ${task.name} id going to unmount`);
    };
  }, [task]);

  return (
    <tr className="fw-normal">
      <th>
        <span className="ms-2"> {task.name} </span>
      </th>
      <td className="align-middle">
        <span> {task.description} </span>
      </td>
      <td className="align-middle">
        <span> {task.level} </span>
      </td>
      <td className="align-middle">
        <span>
          {" "}
          {task.completed ? (
            <i className="bi-toggle-on"></i>
          ) : (
            <i className="bi-toggle-off"></i>
          )}
        </span>
      </td>
    </tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
