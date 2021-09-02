import "../root.css"
import "../css/footer.css"
import "../components/switch"
import { Switch } from "../components/switch"

export const Footer = ()=>{
    return (
        <footer>
            <section id="music">
                <span>
                    <h3 className="c-purple">
                        PlayList:
                    </h3>
                    <p>#Nome da playlist</p>
                </span>
                <p className="upper-c end-t"> #Nome da Musica</p>
            </section>
            <Switch/>
        </footer>
    )
}