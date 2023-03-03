import { filterValuesType } from "../../App"

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: number) => void
    changeFilter: (value: filterValuesType) => void
}

export function TodoList(props: PropsType) {
    return (
        <div>
            <h1>{props.title}</h1>
            <div>
                <input type="text" />
                <button>+</button>
            </div>
            <ul>
                {
                    props.tasks.map(el => <li><input type="checkbox" checked={el.isDone} /><span>{el.title} </span>
                        <button onClick={() => { props.removeTask(el.id) }}>x</button></li>)

                }
            </ul>
            <div>
                <button onClick={() => { props.changeFilter("all") }}>All</button>
                <button onClick={() => { props.changeFilter("active") }}>Active</button>
                <button onClick={() => { props.changeFilter("completed") }}>Completed</button>
            </div>
        </div>
    );
}
