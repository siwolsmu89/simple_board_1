import {MOVE_PAGE} from "../action/actions";

export default function pagination(state, action) {
    const { pagination } = state;

    switch (action.type) {
        case MOVE_PAGE:
            return {...pagination, currentPage: action.pageNo};
        default:
            return pagination;
    }
}