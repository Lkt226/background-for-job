import {Timer} from "../components/modules"
import "../css/main.css"

export const Main = ()=>{


    return (
        <main>
            <div className="column">
            <Timer/>
            <Timer/>
            <Timer/>
            </div>
            <div className="column">
            <Timer/>
            <Timer/>
            <Timer/>
            </div>
            <div className="column">
            <Timer/>
            <Timer/>
            <Timer/>
            </div>
            <div className="column">
            <Timer/>
            <Timer/>
            <Timer/>
            </div>
            
        </main>
    )
}