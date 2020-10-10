import React from "react";



class TasksList extends React.Component {
  state = {
    tasks: [
      {
        "id": "1",
        "text": "International Factors Strategist",
        "done": false
      },
      {
        "id": "2",
        "text": "District Infrastructure Executive",
        "done": false
      },
      {
        "id": "3",
        "text": "Dynamic Assurance Analyst",
        "done": true
      },
      {
        "id": "4",
        "text": "District Security Planner",
        "done": true
      },
      {
        "id": "5",
        "text": "Direct Web Architect",
        "done": false
      },
      {
        "id": "6",
        "text": "Global Accountability Engineer",
        "done": false
      },
      {
        "id": "7",
        "text": "Senior Infrastructure Engineer",
        "done": false
      },
    ]
  }

  render() {

    return (
      <main className="todo-list">
        <ul className="list">
          {this.state.tasks.map(task => (
            <li key={task.id} className="list-item">
              <input
                type="checkbox"
                className="list-item__checkbox"
                defaultChecked={task.done}
              />
              {task.text}
              <button className="list-item__delete-btn"></button>
            </li>
          ))}

        </ul>
      </main>
    )
  }
}

export default TasksList;