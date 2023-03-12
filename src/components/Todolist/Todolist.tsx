import { ChangeEvent, KeyboardEvent, useState } from "react"
import { filterValuesType } from "../../App"

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    addTask: (title: string) => void
    changeFilter: (value: filterValuesType) => void
}

export function TodoList(props: PropsType) {

    const [newTaskTitle, setNewTaskTitle] = useState("");

    const newTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) { props.addTask(newTaskTitle); setNewTaskTitle("") }
    }

    const addTask = () => {
        props.addTask(newTaskTitle); setNewTaskTitle("")
    }

    const onAllClickHandler = () => { props.changeFilter("all"); }
    const onActiveClickHandler = () => { props.changeFilter("active"); }
    const onCompletedClickHandler = () => { props.changeFilter("completed"); }

    return (
        <div>
            <h1>{props.title}</h1>
            <div>
                <input type="text" value={newTaskTitle}
                    onKeyPress={onKeyPressHandler}
                    onChange={newTitleChangeHandler} />
                <button onClick={addTask}>+</button>
            </div>
            <ul>
                {
                    props.tasks.map(el => {
                        const onRemoveHandler = () => {
                            props.removeTask(el.id)
                        }
                        return <li key={el.id}><input type="checkbox" checked={el.isDone} /><span>{el.title} </span>
                            <button onClick={onRemoveHandler}>x</button></li>
                    })

                }
            </ul>
            <div>
                <button onClick={onAllClickHandler}>All</button>
                <button onClick={onActiveClickHandler}>Active</button>
                <button onClick={onCompletedClickHandler}>Completed</button>
            </div>
        </div>
    );
}
