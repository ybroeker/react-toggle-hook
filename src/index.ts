import React, {SyntheticEvent} from "react";

export const useToggle = (initial?: boolean): [boolean, (event?: SyntheticEvent)=>void, (event?: SyntheticEvent)=>void, (event?: SyntheticEvent)=>void] => {
    const [value, setValue] = React.useState<boolean>(!!initial)

    const toggle = (event?: SyntheticEvent) => {
        setValue(!value)
        event && event.type !== 'change' && event.preventDefault()
    }
    const enable = (event?: SyntheticEvent) => {
        setValue(true)
        event && event.type !== 'change' && event.preventDefault()
    }
    const disable = (event?: SyntheticEvent) => {
        setValue(false)
        event && event.type !== 'change' && event.preventDefault()
    }

    return [value, enable, disable, toggle]
}
