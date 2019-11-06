// @flow
import React from "react";

export const useToggle = (initial: ?boolean): [boolean, ()=>void, ()=>void, ()=>void] => {
    const [value: boolean, setValue] = React.useState(!!initial)

    const toggle = (event: ?SyntheticEvent<*>) => {
        setValue(!value)
        event && event.type !== 'change' && event.preventDefault()
    }
    const enable = (event: ?SyntheticEvent<*>) => {
        setValue(true)
        event && event.type !== 'change' && event.preventDefault()
    }
    const disable = (event: ?SyntheticEvent<*>) => {
        setValue(false)
        event && event.type !== 'change' && event.preventDefault()
    }

    return [value, enable, disable, toggle]
}
