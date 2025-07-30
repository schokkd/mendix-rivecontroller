import { ReactElement, createElement } from "react";

import { RiveCanvasTSContainerProps } from "../typings/RiveCanvasTSProps";
import { Canvas } from "./components/Canvas";
import "./ui/RiveCanvasTS.css";

export function RiveCanvasTS(props: RiveCanvasTSContainerProps): ReactElement {
    const { riveSource, stateMachineName, activeInputName_Boolean, booleanInputNames, triggerInputNames, numberInputNames, activeInputName_Trigger, style } = props;

    return (
        <Canvas
            riveSource={riveSource}
            stateMachineName={stateMachineName}
            activeInputName_Boolean={activeInputName_Boolean}
            booleanInputNames={booleanInputNames}
            triggerInputNames={triggerInputNames}
            numberInputNames={numberInputNames}
            activeInputName_Trigger={activeInputName_Trigger}
            className={props.class}
            style={style}
        />
    );
}
