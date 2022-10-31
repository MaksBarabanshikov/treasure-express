// @flow
import * as React from 'react';

type Props = {
    text: string
};

export function RulesItem(props: Props) {
    return (
        <li className="rules-item">
            {props.text}
        </li>
    );
}
