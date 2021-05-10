import {CALCULATE_PAGINATION, MOVE_PAGE} from "../action/actions";

export default function pagination(state, action) {
    const { articles, pagination } = state;

    switch (action.type) {
        case MOVE_PAGE:
            return action.pagination;
        case CALCULATE_PAGINATION:
            const paginationAfterCalculate = {...pagination};
            paginationAfterCalculate.lastPage = Math.ceil(action.totalCount / 10);
            console.log(articles.length);

            return paginationAfterCalculate;
        default:
            return pagination;
    }
}