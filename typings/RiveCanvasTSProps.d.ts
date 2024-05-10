/**
 * This file was generated from RiveCanvasTS.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { DynamicValue, EditableValue } from "mendix";
import { Big } from "big.js";

export interface BooleanInputNamesType {
    booleanInput: string;
}

export interface TriggerInputNamesType {
    triggerInput: string;
}

export interface NumberInputNamesType {
    numberInput: string;
    numberAttribute: EditableValue<Big>;
}

export interface BooleanInputNamesPreviewType {
    booleanInput: string;
}

export interface TriggerInputNamesPreviewType {
    triggerInput: string;
}

export interface NumberInputNamesPreviewType {
    numberInput: string;
    numberAttribute: string;
}

export interface RiveCanvasTSContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    riveSource: DynamicValue<string>;
    stateMachineName: DynamicValue<string>;
    booleanInputNames: BooleanInputNamesType[];
    activeInputName_Boolean: EditableValue<string>;
    triggerInputNames: TriggerInputNamesType[];
    activeInputName_Trigger: EditableValue<string>;
    numberInputNames: NumberInputNamesType[];
}

export interface RiveCanvasTSPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    riveSource: string;
    stateMachineName: string;
    booleanInputNames: BooleanInputNamesPreviewType[];
    activeInputName_Boolean: string;
    triggerInputNames: TriggerInputNamesPreviewType[];
    activeInputName_Trigger: string;
    numberInputNames: NumberInputNamesPreviewType[];
}
