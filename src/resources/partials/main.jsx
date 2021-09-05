import {Timer, ToDO} from "../components/modules"
import "../css/main.css"

export const Main = ()=>{


    return (
        <main>
            <div className="column">
            <ToDO/>
            <Timer/>
            <div></div>
            </div> 
        </main>
    )
}