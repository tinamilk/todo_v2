import { FC } from 'react';

export type Filter = ''|'Today'|'Done'|'Date'

export type Filters = {
    filter: Filter
}

interface SvgIconConstituentValues {
    strokeColor?: string;
    strokeWidth?: string;
    strokeWidth2?: string;
    strokeWidth3?: string;
    strokeFill?: string;
    fillColor?: string;
    fillColor2?: string;
    fillColor3?: string;
    fillColor4?: string;
    fillColor5?: string;
    fillColor6?: string;
    fillColor7?: string;
    imageWidth?: string;
    imageHeight?: string;
    width?: string;
    height?: string;
    rotateCenter?: number;
    className?: string;
    className2?: string;
    className3?: string;
    className4?: string;
    className5?: string;
}

export interface SvgIcon extends FC<SvgIconConstituentValues> {}