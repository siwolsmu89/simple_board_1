import pagination from "./paginationReducer";
import articles from "./articleReducer";
import spinning from "./spinnerReducer";

const initialState = {
    articles: [],
    pagination: {
        currentPage: 1,
        pageSize: 5,
        lastPage: 1
    },
    spinning: false
}

export default function reducer(state=initialState, action) {
    return {
        articles: articles(state, action),
        pagination: pagination(state, action),
        spinning: spinning(state, action)
    };
}