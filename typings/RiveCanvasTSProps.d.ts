/**
 * This file was generated from RiveCanvasTS.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { DynamicValue, EditableValue } from "mendix";
import { Big } from "big.js";

export interface BooleaninputnamesType {
    booleaninput: string;
}

export interface TriggerinputnamesType {
    triggerinput: string;
}

export interface NumberinputnamesType {
    numberinput: string;
    numberattribute: EditableValue<Big>;
}

export interface BooleaninputnamesPreviewType {
    booleaninput: string;
}

export interface TriggerinputnamesPreviewType {
    triggerinput: string;
}

export interface NumberinputnamesPreviewType {
    numberinput: string;
    numberattribute: string;
}

export interface RiveCanvasTSContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    rivesource: DynamicValue<string>;
    statemachinename: DynamicValue<string>;
    booleaninputnames: BooleaninputnamesType[];
    activeinputname_boolean: EditableValue<string>;
    triggerinputnames: TriggerinputnamesType[];
    activeinputname_trigger: EditableValue<string>;
    numberinputnames: NumberinputnamesType[];
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
    rivesource: string;
    statemachinename: string;
    booleaninputnames: BooleaninputnamesPreviewType[];
    activeinputname_boolean: string;
    triggerinputnames: TriggerinputnamesPreviewType[];
    activeinputname_trigger: string;
    numberinputnames: NumberinputnamesPreviewType[];
}
