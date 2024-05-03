import { ReactElement, createElement } from "react";

//import { RiveCanvasTSPreviewProps } from "../typings/RiveCanvasTSProps";

//import { Canvas } from "./components/Canvas";

function parentInline(node?: HTMLElement | null): void {
    // Temporary fix, the web modeler add a containing div, to render inline we need to change it.
    if (node && node.parentElement && node.parentElement.parentElement) {
        node.parentElement.parentElement.style.display = "inline-block";
    }
}

/*function transformProps(props: RiveCanvasTSPreviewProps): RiveCanvasTSContainerProps {
    return {
        name: props.name,
        rivesource: props.rivesource,
        statemachinename: props.statemachinename,
        inputnames_boolean: props.inputnames_boolean,
        inputnames_trigger: props.inputnames_trigger,
        activeinputname_boolean: EditableValue<props.activeinputname_boolean>,
        activeinputname_trigger: props.activeinputname_trigger,
        valueAttribute: props.valueAttribute,
        rivecanvastsValue: props.rivecanvastsValue
    };
}*/

export function preview(): ReactElement {
    return (
        <div ref={parentInline}>
            Rive Widget
        </div>
    );
}

export function getPreviewCss(): string {
    return require("./ui/RiveCanvasTS.css");
}
