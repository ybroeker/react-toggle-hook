import React from "react";

export const useToggle = (initial) => {
    const [value, setValue] = React.useState(!!initial);

    const toggle = (event) => {
        setValue(!value)
        event && event.type !== 'change' && event.preventDefault()
    };
    const enable = (event) => {
        setValue(true)
        event && event.type !== 'change' && event.preventDefault()
    };
    const disable = (event) => {
        setValue(false)
        event && event.type !== 'change' && event.preventDefault()
    };

    return [value, enable, disable, toggle];
};
