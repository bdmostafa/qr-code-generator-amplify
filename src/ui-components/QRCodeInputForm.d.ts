/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, HeadingProps, TextAreaFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type QRCodeInputFormInputValues = {
    Field0?: string;
};
export declare type QRCodeInputFormValidationValues = {
    Field0?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QRCodeInputFormOverridesProps = {
    QRCodeInputFormGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    Field0?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type QRCodeInputFormProps = React.PropsWithChildren<{
    overrides?: QRCodeInputFormOverridesProps | undefined | null;
} & {
    onSubmit: (fields: QRCodeInputFormInputValues) => void;
    onChange?: (fields: QRCodeInputFormInputValues) => QRCodeInputFormInputValues;
    onValidate?: QRCodeInputFormValidationValues;
} & React.CSSProperties>;
export default function QRCodeInputForm(props: QRCodeInputFormProps): React.ReactElement;
