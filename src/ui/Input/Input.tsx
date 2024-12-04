import React, {FC} from "react";
import cn from 'classnames';
import * as styles from  './input.module.css';

type Props = {
    classNames?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'placeholder' | 'value'>;

export const Input: FC<Props> = ({ classNames, ...inputAttributes }) => {
    return (
        <input
            className={cn(styles.input, classNames)}
            {...inputAttributes}
        />
    )
}
