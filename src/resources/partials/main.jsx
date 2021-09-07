import {TodoList} from "../components/todoList"
import {Timer} from "../components/Timer"
import "../css/main.css"

export const Main = ()=>{


    return (
        <main>
            <div className="column">
            <TodoList/>
            <Timer/>
            <div></div>
            </div> 
        </main>
    )
}