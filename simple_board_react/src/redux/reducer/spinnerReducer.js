import {SPINNING_OFF, SPINNING_ON} from "../action/actions";

export default function spinning(state, action) {
    const { spinning } = state;

    switch (action.type) {
        case SPINNING_ON:
            return true;
        case SPINNING_OFF:
            return false;
        default:
            return spinning;
    }
}