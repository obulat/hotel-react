import React from 'react';
import './TextInput.scss';

export interface TextInputProps {
    label: string;
    placeholder?: string;
    status? : 'default' | 'focus / hovered';
}

export const TextInput: React.FC<TextInputProps>  = ({
    label,
    placeholder = '',
    status = ''
}) => {
    const inputStatusClass: string = status ? ` text-input__input_${status}` : '';
    return (
        <label className="text-input">
            <span className="text-input__labels">
                <span className="text-input__label">
                    {label}
                </span>
                {status && <span className="text-input__status">{status}</span>}
            </span>
            <input className={`text-input__input${inputStatusClass}`}
                type="text"
                placeholder={placeholder}
            />
        </label>
    )
}

