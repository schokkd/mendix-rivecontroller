import { ReactElement, CSSProperties, createElement, useEffect } from "react";
import { EditableValue, DynamicValue } from "mendix";
import { BooleaninputnamesType, TriggerinputnamesType, NumberinputnamesType } from "typings/RiveCanvasTSProps";

import { useRive, useStateMachineInput } from '@rive-app/react-canvas';

export interface CanvasProps {
    rivesource: DynamicValue<string>; 
    statemachinename: DynamicValue<string>;
    booleaninputnames: BooleaninputnamesType[];
    triggerinputnames: TriggerinputnamesType[];
    numberinputnames: NumberinputnamesType[];
    activeinputname_boolean: EditableValue<string>
    activeinputname_trigger: EditableValue<string>
    defaultValue?: string;
    className?: string;
    style?: CSSProperties;
    bootstrapStyle?: BootstrapStyle;
    getRef?: (node: HTMLElement) => void;
}

export type BootstrapStyle = "default" | "info" | "inverse" | "primary" | "danger" | "success" | "warning";

export function Canvas(props: CanvasProps): ReactElement {
    const { rivesource, statemachinename, booleaninputnames, triggerinputnames, numberinputnames, activeinputname_boolean, activeinputname_trigger } = props;

    if (rivesource.status === 'loading' || statemachinename.status === 'loading') {
        return (<div />);
    }

    const { rive, RiveComponent } = useRive({
        src: `${window.location.origin}/rest/riveservice/v1/resource/getfile?FileName=${rivesource.value}`,
        stateMachines: `${statemachinename.value}`,
        autoplay: true,
    });

    const inputMap_boolean = new Map();
    const inputMap_trigger = new Map();
    const inputMap_number = new Map();

    var markers_boolean = [];
    for (let i = 0; i < booleaninputnames.length; i++) {
        markers_boolean[i] = useStateMachineInput(
            rive,
            `${statemachinename.value}`,
            `${booleaninputnames[i]['booleaninput']}`
        );
        inputMap_boolean.set(booleaninputnames[i]['booleaninput'], markers_boolean[i])
    }

    var markers_trigger = [];
    for (let i = 0; i < triggerinputnames.length; i++) {
        markers_trigger[i] = useStateMachineInput(
            rive,
            `${statemachinename.value}`,
            `${triggerinputnames[i]['triggerinput']}`
        );
        inputMap_trigger.set(triggerinputnames[i]['triggerinput'], markers_trigger[i])
    }

    var markers_number = [];
    for (let i = 0; i < numberinputnames.length; i++) {
        markers_number[i] = useStateMachineInput(
            rive,
            `${statemachinename.value}`,
            `${numberinputnames[i]['numberinput']}`
        );
        inputMap_number.set(numberinputnames[i]['numberinput'], markers_number[i])
    }

    useEffect(() => {
        for (let [input, statemachinehook] of inputMap_boolean) {
        if (activeinputname_boolean.value === input && statemachinehook !== null) {
            statemachinehook.value = true;
            //numLookInput!.value = 80;
        }
        if (activeinputname_boolean.value !== input && statemachinehook !== null) {
            statemachinehook.value = false;
        }
        }

    }, [activeinputname_boolean]);

    useEffect(() => {
        for (let [input, statemachinehook] of inputMap_trigger) {
        if (activeinputname_trigger.value === input && statemachinehook !== null) {
            statemachinehook.fire();
            activeinputname_trigger.setTextValue("");
        }
        }

    }, [activeinputname_trigger]);

    useEffect(() => {
        for (let i = 0; i < numberinputnames.length; i++) {
            let stateMachineHook = inputMap_number.get(numberinputnames[i]['numberinput'])
            if (stateMachineHook !== null) {
                stateMachineHook.value = numberinputnames[i]['numberattribute'].value;
            }
        }

    }, [numberinputnames]);

    return (
        <RiveComponent
        />
    );
}
