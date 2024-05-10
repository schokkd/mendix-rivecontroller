import { ReactElement, CSSProperties, createElement, useEffect } from "react";
import { EditableValue, DynamicValue } from "mendix";
import { BooleanInputNamesType, TriggerInputNamesType, NumberInputNamesType } from "typings/RiveCanvasTSProps";

import { useRive, useStateMachineInput } from '@rive-app/react-canvas';

export interface CanvasProps {
    riveSource: DynamicValue<string>; 
    stateMachineName: DynamicValue<string>;
    booleanInputNames: BooleanInputNamesType[];
    triggerInputNames: TriggerInputNamesType[];
    numberInputNames: NumberInputNamesType[];
    activeInputName_Boolean: EditableValue<string>
    activeInputName_Trigger: EditableValue<string>
    defaultValue?: string;
    className?: string;
    style?: CSSProperties;
    bootstrapStyle?: BootstrapStyle;
    getRef?: (node: HTMLElement) => void;
}

export type BootstrapStyle = "default" | "info" | "inverse" | "primary" | "danger" | "success" | "warning";

export function Canvas(props: CanvasProps): ReactElement {
    const { riveSource, stateMachineName, booleanInputNames, triggerInputNames, numberInputNames, activeInputName_Boolean, activeInputName_Trigger } = props;

    if (riveSource.status === 'loading' || stateMachineName.status === 'loading') {
        return (<div />);
    }

    const { rive, RiveComponent } = useRive({
        src: `${window.location.origin}/rest/riveservice/v1/resource/getfile?FileName=${riveSource.value}`,
        stateMachines: `${stateMachineName.value}`,
        autoplay: true,
    });

    const inputMap_boolean = new Map();
    const inputMap_trigger = new Map();
    const inputMap_number = new Map();

    var markers_boolean = [];
    for (let i = 0; i < booleanInputNames.length; i++) {
        markers_boolean[i] = useStateMachineInput(
            rive,
            `${stateMachineName.value}`,
            `${booleanInputNames[i]['booleanInput']}`
        );
        inputMap_boolean.set(booleanInputNames[i]['booleanInput'], markers_boolean[i])
    }

    var markers_trigger = [];
    for (let i = 0; i < triggerInputNames.length; i++) {
        markers_trigger[i] = useStateMachineInput(
            rive,
            `${stateMachineName.value}`,
            `${triggerInputNames[i]['triggerInput']}`
        );
        inputMap_trigger.set(triggerInputNames[i]['triggerInput'], markers_trigger[i])
    }

    var markers_number = [];
    for (let i = 0; i < numberInputNames.length; i++) {
        markers_number[i] = useStateMachineInput(
            rive,
            `${stateMachineName.value}`,
            `${numberInputNames[i]['numberInput']}`
        );
        inputMap_number.set(numberInputNames[i]['numberInput'], markers_number[i])
    }

    useEffect(() => {
        for (let [input, statemachinehook] of inputMap_boolean) {
        if (activeInputName_Boolean.value === input && statemachinehook !== null) {
            statemachinehook.value = true;
        }
        if (activeInputName_Boolean.value !== input && statemachinehook !== null) {
            statemachinehook.value = false;
        }
        }

    }, [activeInputName_Boolean]);

    useEffect(() => {
        for (let [input, statemachinehook] of inputMap_trigger) {
        if (activeInputName_Trigger.value === input && statemachinehook !== null) {
            statemachinehook.fire();
            activeInputName_Trigger.setTextValue("");
        }
        }

    }, [activeInputName_Trigger]);

    useEffect(() => {
        for (let i = 0; i < numberInputNames.length; i++) {
            let stateMachineHook = inputMap_number.get(numberInputNames[i]['numberInput'])
            if (stateMachineHook !== null) {
                stateMachineHook.value = numberInputNames[i]['numberAttribute'].value;
            }
        }

    }, [numberInputNames]);

    return (
        <RiveComponent />
    );
}
