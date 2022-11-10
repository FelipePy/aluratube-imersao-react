import { useContext } from "react";
import { ColorModeContext } from "../components/menu/components/ ColorMode";

export default function Video() {
    const context = useContext(ColorModeContext);
    return (
        <>
            <section>
                <h1>Video</h1>
                <button onClick={context.toggleMode}>Trocar tema</button>
            </section>
        </>
    )
}