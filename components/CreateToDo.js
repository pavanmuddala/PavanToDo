import React, { useState } from "react";
import styles from "../components/CreateToDo.module.css"
const CreateToDo = ({ operation, task, description, setTask, setDescription, openCreate, closeCreate, showCreate, handleToDoList }) => {
    const taskHandler = (e) => {
        setTask(e.target.value)
    }
    const descriptionHandler = (e) => {
        setDescription(e.target.value)
    }
    const cancelHandler = () => {
        setTask("")
        setDescription("")
        closeCreate()
    }
    const createHandler = () => {

        let taskObj = { task: task, description: description }
        handleToDoList(taskObj)
        setTask("")
        setDescription("")
        closeCreate()
    }
    return (
        <div className={showCreate ? styles.showCreate : styles.hideCreate}>
            <div className={styles.modalBackdrop}>
                <div className={styles.modalCentered}>
                    <div className={styles.modalBox}>
                        <div className={styles.createDialogueHead}>
                            <h2>{operation} Task</h2>
                            <img src="/cross-sign.svg" alt="close" className={styles.crossImg} onClick={cancelHandler}></img>
                        </div>
                        <div>
                            <label className={styles.floatLeft + " " + styles.marginTop}>Task Name : </label>
                            <input className={styles.floatLeft + " " + styles.marginTop + " " + styles.textBoxStyles} value={task} type={"text"} placeholder={"Task"} onChange={taskHandler}></input>
                        </div>
                        <div>
                            <label className={styles.floatLeft + " " + styles.marginTop}>Description : </label>
                            <textarea className={styles.floatLeft + " " + styles.marginTop + " " + styles.textAreaStyles} value={description} placeholder={"Description"} onChange={descriptionHandler}></textarea>
                        </div>
                        <div className={styles.marginTop}>
                            <button className={styles.floatRight + " " + styles.cancelBtn} onClick={cancelHandler}>Cancel</button>
                            <button className={styles.floatRight + " " + styles.createBtn} onClick={createHandler}>{operation}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreateToDo;