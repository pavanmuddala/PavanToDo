import React from "react";
import styles from "../components/ToDoList.module.css"
import CreateToDo from "./CreateToDo";
import { useState } from "react";
const ToDoList = () => {
    const [showCreate, setShowCreate] = useState(false)
    const [operation, setOperation] = useState("create")
    const handleShowCreate = () => {
        setShowCreate(!showCreate)
    }
    const [task, setTask] = useState("")
    const [description, setDescription] = useState("")
    const [taskInd,setTaskInd]=useState(0)
    const editHandler = (ind) => {
        setTask(todoList[ind]?.task)
        setDescription(todoList[ind]?.description)
        setOperation("Update")
        setTaskInd(ind)
        setShowCreate(true)
    }
    const createBtnHandler = () => {
        setOperation("Create")
        setTask("")
        setDescription("")
        setShowCreate(true)
    }
    const openCreate = () => {
        setShowCreate(true)
    }
    const closeCreate = () => {
        setShowCreate(false)
    }
    const [todoList, setToDoList] = useState([{ task: "pavan", description: "something" }])
    const handleToDoList = (obj) => {
        let temp = todoList;
        if (operation == "Create") {
            temp.push(obj);
        }
        else{
            temp[taskInd]=obj
        }
        setToDoList(temp);

    }
    const deleteHandler = (ind) => {
        setToDoList(todoList.filter((f, index) => index != ind))
    }
    const colorList = ["rgb(0,255,255)", "rgb(218,112,214)", "#808080", "#FA8072", "#FFD700"]
    return (
        <>
            <div className={styles.mainDiv}>
                <h1>To Do List</h1>
                <button className={styles.createBtn} onClick={createBtnHandler}>Create Task</button>
                <CreateToDo operation={operation} task={task} description={description} setTask={setTask} setDescription={setDescription} openCreate={openCreate} closeCreate={closeCreate} showCreate={showCreate} handleToDoList={handleToDoList}></CreateToDo>
            </div>
            <div className={styles.toDoListContainer}>
                {
                    todoList.map((f, index) =>
                        <div className={styles.box}>
                            <div className={styles.boxHead} style={{ backgroundColor: colorList[index % 5] }}></div>
                            <div className={styles.boxHeader}>{f.task}</div>
                            <div className={styles.floatLeft + " " + styles.padding + " " + styles.description}>{f.description}</div>

                            <div className={styles.floatRight}>
                                <img src="edit-icon.png" className={styles.deleteIcon} onClick={() => { editHandler(index) }}></img>
                                <img src="delete-icon.png" className={styles.deleteIcon} onClick={() => { deleteHandler(index) }}></img>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}
export default ToDoList;