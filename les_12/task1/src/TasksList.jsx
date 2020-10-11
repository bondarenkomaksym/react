import React from "react";
import Task from "./Task";
import CreateTaskInput from "./CreateTaskInput";



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
    ]
  }

  //метод принимает текст из инпута(CreateTaskInput)
  onCreate = text => {
    const newTask = {
      id: Math.random(),
      text,
      done: false,
    };

    // и полученные свойства добавляем в существующий массив задач
    const { tasks } = this.state;
    const updatedTasks = tasks.concat(newTask);
    this.setState({ tasks: updatedTasks });
  }

  //метод зачёркивает задачу
  handleTaskStatusChange = (id) => {
    //1. найти задачу в списке
    //2. переключить вкл/выкл
    //3. сохранить обновлённый список
    const updatedTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done
        }
      }
      return task;
    });
    //результат метода сохраняем в состояние
    this.setState({ tasks: updatedTasks });
  }

  //метод удаления задачи
  handleTaskDelete = (id) => {
    //1. фильтруем задачи
    //2. обновляем список задач
    const updatedTasks = this.state.tasks
      .filter(task => task.id !== id);
    //результат метода сохраняем в состояние
    this.setState({ tasks: updatedTasks });
  }


  render() {

    const sortedList = this.state.tasks
      .slice()
      .sort((a, b) => a.done - b.done);

    return (
      <main className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map(task => (
            <Task key={task.id}
              {...task}
              onDelete={this.handleTaskDelete}
              onChange={this.handleTaskStatusChange}
            />
          ))}

        </ul>
      </main>
    )
  }
}

export default TasksList;