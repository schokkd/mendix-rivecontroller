import { ReactElement, createElement } from "react";

import { RiveCanvasTSContainerProps } from "../typings/RiveCanvasTSProps";
import { Canvas } from "./components/Canvas";
import "./ui/RiveCanvasTS.css";

export function RiveCanvasTS(props: RiveCanvasTSContainerProps): ReactElement {
    const { rivesource, statemachinename, activeinputname_boolean, booleaninputnames, triggerinputnames, numberinputnames, activeinputname_trigger, style } = props;

    return (
        <Canvas
            rivesource={rivesource}
            statemachinename={statemachinename}
            activeinputname_boolean={activeinputname_boolean}
            booleaninputnames={booleaninputnames}
            triggerinputnames={triggerinputnames}
            numberinputnames={numberinputnames}
            activeinputname_trigger={activeinputname_trigger}
            className={props.class}
            style={style}
        />
    );
}
