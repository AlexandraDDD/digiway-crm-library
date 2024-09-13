import React, { ChangeEvent } from 'react';
export interface InputProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}
export declare const Input: React.FC<InputProps>;
