import "../root.css"
import "../css/header.css"

import settings from "../../icons/Gear.svg"

export const Header = ()=>{

    return (
        <header>
            <div id="options">
                <img src={settings} alt="Settings" id="settings" className="icon"/>
            </div>

            <div id="logo">
            <h1>for</h1>
            <h1 className="c-purple">(JOB)</h1>
            </div>
        </header>   
    )
}