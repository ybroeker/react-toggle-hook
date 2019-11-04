import React from "react";

export const useToggle = (initial) => {
    const [value, setValue] = React.useState(!!initial);

    const toggle = (event) => {
        setValue(!value);
        event && event.preventDefault();
    };
    const enable = (event) => {
        setValue(true);
        event && event.preventDefault();
    };
    const disable = (event) => {
        setValue(false);
        event && event.preventDefault();
    };

    return [value, enable, disable, toggle];
};
